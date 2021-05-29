import socket
import lirc
import json
from datetime import datetime

class VirtualController():
    """Main virtual controller handling IR commands with LIRC and web server"""

    def __init__(self):
        self.controller = "mitsubishi_kh18a"
        self.aircon_power = False
        self.aircon_temp = 26
        self.aircon_fanspeed = 2
        self.aircon_flap = 3
        self.aircon_eco_mode = False
        self.aircon_powerful_mode = False

        self.client = lirc.Client(
            connection = lirc.LircdConnection(
                address = "/var/run/lirc/lircd-tx", # Use /var/run/lirc/lircd for default lirc installations
                socket = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM),
                timeout = 5.0
            )
        )

    def get_aircon_data(self):
        return json.dumps({
            'date_and_time': datetime.now().isoformat(),
            'aircon_power': self.aircon_power,
            'aircon_temp': self.aircon_temp,
            'aircon_fanspeed': self.aircon_fanspeed,
            'aircon_flap': self.aircon_flap,
            'aircon_eco_mode': self.aircon_eco_mode,
            'aircon_powerful_mode': self.aircon_powerful_mode
        })

    def update_aircon_data(self, jsonData):
        self.aircon_power = jsonData['aircon_power']
        self.aircon_temp = jsonData['aircon_temp']
        self.aircon_fanspeed = jsonData['aircon_fanspeed']
        self.aircon_flap = jsonData['aircon_flap']
        self.aircon_eco_mode = jsonData['aircon_eco_mode']
        self.aircon_powerful_mode = jsonData['aircon_powerful_mode']

    def send_once(self, controller, command):
        self.client.send_once(controller, command)

    def test_ir(self):
        self.client.send_once("mitsubishi_kh18a", "SWITCH_OFF")
        print("DEBUG: Sent IR Test, SWITCH_OFF from mitsubishi_kh18a")

    def toggle_power(self):
        if self.aircon_power == False:
            self.client.send_once(self.controller, "SWITCH_ON")
            print("DEBUG: Sent IR Test, SWITCH_ON from mitsubishi_kh18a")
            self.aircon_power = True
        elif self.aircon_power == True:
            self.client.send_once(self.controller, "SWITCH_OFF")
            print("DEBUG: Sent IR Test, SWITCH_OFF from mitsubishi_kh18a")
            self.aircon_power = False
        else:
            pass

if __name__ == "__main__":
    print("Please run main webserver app.py!")
    print("DEBUG: Runnnig IR test...")
    TestController = VirtualController()
    TestController.send_once("mitsubishi_kh18a", "SWITCH_OFF")
    print("DEBUG: Sent IR Test, sent SWITCH_OFF from mitsubishi_kh18a")