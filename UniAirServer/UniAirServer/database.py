import json, os
try:
    from .virtualcontroller.VirtualController import VirtualController
    from .virtualcontroller.ControllerHolder import ControllerHolder
    from .config import config
except:
    pass
try:
    from virtualcontroller.VirtualController import VirtualController
    from virtualcontroller.ControllerHolder import ControllerHolder
    from config import config
except:
    pass

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
virtual_controller = ControllerHolder(None)

def write_to_database():
    with open('./database.db', 'w') as f:
        json.dump(virtual_controller.controller.export_dict(), f)

def read_from_database():
    with open('./database.db') as json_file:
        data = json.load(json_file)
        data['controllerName'] = config.get('settings', 'aircon_model')
        virtual_controller.replace_controller(VirtualController(data))
        return data

def load_placeholder_data():
    virtual_controller.replace_controller(VirtualController(controllerData))

def delete_database():
    virtual_controller.replace_controller(None)
    if os.path.exists("./database.db"):
        os.remove("./database.db")
    else:
        print("LOG: Database file not found, attempted to delete")