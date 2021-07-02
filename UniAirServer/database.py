import json
from virtualcontroller.VirtualController import VirtualController

# Placeholder data
controllerData = {
    "controllerName": "mitsu_control", # by default it should be mitsu_control
    "aircon_power": False,
    "aircon_temp": 25,
    "aircon_fanspeed": 2,
    "aircon_flap": 3,
    "aircon_eco_mode": False,
    "aircon_powerful_mode": False,
}

virtual_controller = VirtualController(controllerData)

def write_to_database():
    with open('./database.db', 'w') as f:
        json.dump(virtual_controller.export_dict(), f)

def read_from_database():
    with open('./database.db') as json_file:
        data = json.load(json_file)
        virtual_controller = VirtualController(data)
        return data