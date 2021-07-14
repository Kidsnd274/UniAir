from flask import (
    Blueprint, render_template, url_for, request, redirect
)
from flask_login import login_required
try:
    from .database import virtual_controller
    from .setup_page import get_ip, get_hostname
    from .config import config
except:
    pass
try:
    from database import virtual_controller
    from setup_page import get_ip, get_hostname
    from config import config
except:
    pass

bp = Blueprint('controller', __name__, url_prefix='/controller')

@bp.route('/')
@login_required
def main_page():
    return redirect(url_for('controller.status'))

@bp.route('/test_ir', methods=['GET', 'POST'])
@login_required
def test_ir():
    if config.getboolean('settings', 'first_time_done') is False:
        return redirect(url_for('setup_page.welcome'))
    if request.method == 'POST':
        virtual_controller.controller.test_ir()
    return render_template('controller/test_ir.html')

@bp.route('/status', methods=['GET', 'POST'])
@login_required
def status():
    if config.getboolean('settings', 'first_time_done') is False:
        return redirect(url_for('setup_page.welcome'))
    if request.method == 'POST':
        virtual_controller.controller.test_ir()
    return render_template('controller/status.html', get_ip=get_ip, get_hostname=get_hostname)