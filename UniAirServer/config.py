from configparser import ConfigParser
import os

config = ConfigParser()

def write_to_config():
    with open('./settings.ini', 'w') as f:
        config.write(f)

def read_to_config():
    config.read('settings.ini')

def delete_config():
    if os.path.exists("./settings.ini"):
        os.remove("./settings.ini")
    else:
        print("LOG: Settings file not found, attempted to delete")