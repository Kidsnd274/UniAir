from flask import (
    Blueprint, render_template, url_for, redirect
)
from flask_login import login_required
try:
    from .database import read_from_database, write_to_database
    from .setup_page import get_ip, get_hostname
    from .config import config, write_to_config
except:
    pass
try:
    from database import read_from_database, write_to_database
    from setup_page import get_ip, get_hostname
    from config import config, write_to_config
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

