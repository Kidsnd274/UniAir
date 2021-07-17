import json, socket
from flask import (
    Blueprint, flash, redirect, render_template, request, url_for, Response
)
from werkzeug.security import generate_password_hash
try:
    from .auth import login_user_authenticated
    from .config import config, write_to_config
    from .virtualcontroller.VirtualController import VirtualController
    from .database import write_to_database, virtual_controller, read_from_database
except:
    pass
try:
    from auth import login_user_authenticated
    from config import config, write_to_config
    from virtualcontroller.VirtualController import VirtualController
    from database import write_to_database, virtual_controller, read_from_database
except:
    pass

bp = Blueprint('setup_page', __name__, url_prefix='/setup')

@bp.route('/register', methods=('GET', 'POST'))
def register():
    if config.getboolean('settings', 'first_time_done') is True:
        return redirect(url_for('controller.status'))
    if request.method == 'POST':
        error = None
        aircon_model = request.form['aircon_model']
        lircd_address = request.form['lircd_address']
        password = request.form['password']

        if not aircon_model:
            error = "Aircon Model is required"
        elif not password:
            error = "Secret Key is required"

        config['settings']['aircon_model'] = aircon_model
        config['settings']['lircd_address'] = lircd_address
        config['settings']['first_time_done'] = "true"
        config['settings']['password'] = generate_password_hash(password)
        # Saving config file
        write_to_config()

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


        if error is None:
            login_user_authenticated()
            return redirect(url_for('auth.login'))
        
        flash(error)

    return render_template('setup/setup.html', lircd_default_address=config.get('settings', 'lircd_address'))

@bp.route('/is_setup')
def is_setup():
    response_json = {
        'is_setup': config.getboolean('settings', 'first_time_done')
    }
    response = Response(
        response = json.dumps(response_json),
        mimetype = 'application/json'
    )
    return response

@bp.route('/welcome')
def welcome():
    if config.getboolean('settings', 'first_time_done') is True:
        return redirect(url_for('controller.status'))
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