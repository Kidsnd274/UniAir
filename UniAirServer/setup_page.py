import functools
from os import write
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, Response
)
# from werkzeug.security import check_password_hash, generate_password_hash
from config import config, write_to_config
import json
from virtualcontroller.VirtualController import VirtualController
from database import write_to_database, virtual_controller, read_from_database
import socket

bp = Blueprint('setup_page', __name__, url_prefix='/setup')

@bp.route('/register', methods=('GET', 'POST'))
def register():
    if request.method == 'POST':
        error = None
        aircon_model = request.form['aircon_model']
        config['settings']['aircon_model'] = aircon_model
        config['settings']['first_time_done'] = "true"
        # In the future, include configuration for lirc as well

        # Generating default values for controller data
        controllerData = {
            "controllerName": aircon_model, # by default it should be mitsu_control
            "aircon_power": False,
            "aircon_temp": 25,
            "aircon_fanspeed": 2,
            "aircon_flap": 3,
            "aircon_eco_mode": False,
            "aircon_powerful_mode": False,
        }
        virtual_controller.replace_controller(VirtualController(controllerData))

        # Saving controller to database (might make a database object)
        write_to_database()

        # Saving config file
        write_to_config()

        if error is None:
            return redirect(url_for('controller.test_ir'))

    return render_template('setup/setup.html')

@bp.route('/success')
def success():
    return render_template('setup/success.html')

@bp.route('/is_setup')
def is_setup():
    response_json = {
        'is_setup': config.getboolean('settings', 'first_time_done')
    }
    response = Response(
        response = response_json,
        mimetype = 'application/json'
    )

@bp.route('/welcome')
def welcome():
    return render_template('welcome.html', get_ip=get_ip, get_hostname=get_hostname)

def get_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # doesn't even have to be reachable
        s.connect(('10.255.255.255', 1))
        IP = s.getsockname()[0]
    except Exception:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

def get_hostname():
    return socket.getfqdn()