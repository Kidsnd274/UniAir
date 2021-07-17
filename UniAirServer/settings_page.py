from json import detect_encoding
from flask import (
    Blueprint, render_template, url_for, redirect
)
from flask_login import login_required
try:
    from .database import read_from_database, write_to_database, delete_database
    from .setup_page import get_ip, get_hostname
    from .config import config, write_to_config, delete_config
except:
    pass
try:
    from database import read_from_database, write_to_database, delete_database
    from setup_page import get_ip, get_hostname
    from config import config, write_to_config, delete_config
except:
    pass

bp = Blueprint('settings', __name__, url_prefix='/settings')

@bp.route('/')
@login_required
def settings():
    if config.getboolean('settings', 'first_time_done') is False:
        return redirect(url_for('setup_page.welcome'))
    return render_template('settings/settings.html', get_ip=get_ip, get_hostname=get_hostname)

def update_settings():
    if config.getboolean('settings', 'first_time_done') is False:
        return redirect(url_for('setup_page.welcome'))
    # Update settings
    # blah blah
    write_to_config() # Update settings
    # Reload settings
    write_to_database()
    read_from_database() # Reload controller with new lircd

@bp.route('/reset_settings', methods=['POST'])
@login_required
def reset_settings():
    print("LOG: Nuking Settings...")
    # Nuking settings.ini and database.db
    config['settings']['first_time_done'] = "false"
    delete_database()
    delete_config()
    print("LOG: Settings nuked. Bye bye")
    return redirect(url_for('auth.logout'))
