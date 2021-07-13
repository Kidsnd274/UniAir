from os import write
import socket
import lirc
import json
from datetime import datetime
from virtualcontroller.ControllerData import ControllerData
from config import config

class VirtualController():
    """Main virtual controller handling IR commands with LIRC and web server"""

    def __init__(self, initDict):
        self.controllerName = initDict['controllerName']
        self.controllerData = ControllerData(initDict)

        self.client = lirc.Client(
            connection = lirc.LircdConnection(
                address = config.get('settings', 'lircd_address'),
                socket = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM),
                timeout = 5.0
            )
        )

    def get_aircon_data(self):
        return self.controllerData.exportJson()

    def update_aircon_data(self, jsonData):
        controllerDataTemp = {
            "aircon_power": jsonData['aircon_power'],
            "aircon_temp": jsonData['aircon_temp'],
            "aircon_fanspeed": jsonData['aircon_fanspeed'],
            "aircon_flap": jsonData['aircon_flap'],
            "aircon_eco_mode": jsonData['aircon_eco_mode'],
            "aircon_powerful_mode": jsonData['aircon_powerful_mode'],
        }
        if self.controllerData.checkNotEqual(ControllerData(controllerDataTemp)):
            self.controllerData.updateControllerData(jsonData)
            print("LOG: Aircon Data changes made, sending IR...")
            self.send_updated_data_ir()

    def send_once(self, controller, command):
        try:
            print("LOG: Sending pulse...")
            self.client.send_once(controller, command)
            # write_to_database()
        except lirc.exceptions.LircdInvalidReplyPacketError:
            print("ERROR: Invalid reply from lircd ignored")

    def send_updated_data_ir(self):
        if not self.controllerData.aircon_power:
            command = "OFF"
        elif self.controllerData.aircon_powerful_mode:
            command = "ON_POWERFUL"
        else:
            # ON_FANSPEED_VANE_MODE_TEMP
            command = "ON_" + str(self.controllerData.aircon_fanspeed) + "_" + str(self.controllerData.aircon_flap) + "_COOL_" + str(self.controllerData.aircon_temp)
        self.send_once(self.controllerName, command)

    def export_dict(self):
        data = {}
        data['controllerName'] = self.controllerName
        data.update(self.controllerData.exportDict())
        return data

    def test_ir(self):
        self.send_once(self.controllerName, "OFF")
        print("DEBUG: Sent IR Test, OFF from " + self.controllerName)

    def toggle_power(self):
        if self.controllerData.aircon_power == False:
            self.client.send_once(self.controllerName, "SWITCH_ON")
            print("DEBUG: Sent IR Test, SWITCH_ON from mitsubishi_kh18a")
            self.controllerData.aircon_power = True
        elif self.controllerData.aircon_power == True:
            self.client.send_once(self.controllerName, "SWITCH_OFF")
            print("DEBUG: Sent IR Test, SWITCH_OFF from mitsubishi_kh18a")
            self.controllerData.aircon_power = False
        else:
            pass

if __name__ == "__main__":
    print("Please run main webserver app.py!")
    print("DEBUG: Runnnig IR test...")
    controllerData = {
        "controller": "mitsubishi_kh18a",
        "aircon_power": False,
        "aircon_temp": 100,
        "aircon_fanspeed": 2,
        "aircon_flap": 3,
        "aircon_eco_mode": False,
        "aircon_powerful_mode": False,
    }
    TestController = VirtualController(controllerData)
    TestController.send_once("mitsubishi_kh18a", "SWITCH_OFF")
    print("DEBUG: Sent IR Test, sent SWITCH_OFF from mitsubishi_kh18a")
