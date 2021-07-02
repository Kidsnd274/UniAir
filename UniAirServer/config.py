from configparser import ConfigParser

config = ConfigParser()

def write_to_config():
    with open('./settings.ini', 'w') as f:
        config.write(f)

def read_to_config():
    config.read('settings.ini')