import json
from datetime import datetime

class ControllerData():
    """ControllerData object for holding controller information and abstracting away certain functions"""

    def __init__(self, initDict):
        self.aircon_power = initDict['aircon_power']
        self.aircon_temp = initDict['aircon_temp']
        self.aircon_fanspeed = initDict['aircon_fanspeed']
        self.aircon_flap = initDict['aircon_flap']
        self.aircon_eco_mode = initDict['aircon_eco_mode']
        self.aircon_powerful_mode = initDict['aircon_powerful_mode']

    def checkNotEqual(self, otherControllerData): # Returns true is it's not the same
        check1 = self.aircon_power != otherControllerData.aircon_power
        check2 = self.aircon_temp != otherControllerData.aircon_temp
        check3 = self.aircon_fanspeed != otherControllerData.aircon_fanspeed
        check4 = self.aircon_flap != otherControllerData.aircon_flap
        check5 = self.aircon_eco_mode != otherControllerData.aircon_eco_mode
        check6 = self.aircon_powerful_mode != otherControllerData.aircon_powerful_mode
        return check1 or check2 or check3 or check4 or check5 or check6

    def exportJson(self):
        return json.dumps({
            'date_and_time': datetime.now().isoformat(),
            'aircon_power': self.aircon_power,
            'aircon_temp': self.aircon_temp,
            'aircon_fanspeed': self.aircon_fanspeed,
            'aircon_flap': self.aircon_flap,
            'aircon_eco_mode': self.aircon_eco_mode,
            'aircon_powerful_mode': self.aircon_powerful_mode
        })

    def updateControllerData(self, jsonData):
        self.aircon_power = jsonData['aircon_power']
        self.aircon_temp = jsonData['aircon_temp']
        self.aircon_fanspeed = jsonData['aircon_fanspeed']
        self.aircon_flap = jsonData['aircon_flap']
        self.aircon_eco_mode = jsonData['aircon_eco_mode']
        self.aircon_powerful_mode = jsonData['aircon_powerful_mode']
