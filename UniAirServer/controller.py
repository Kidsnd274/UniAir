from flask import (
    Blueprint, render_template, url_for, request, abort
)
from database import virtual_controller
from setup_page import get_ip, get_hostname

bp = Blueprint('controller', __name__, url_prefix='/controller')

@bp.route('/')
def main_page():
    pass

@bp.route('/test_ir', methods=['GET', 'POST'])
def test_ir():
    if request.method == 'POST':
        virtual_controller.controller.test_ir()
    return render_template('controller/test_ir.html')

@bp.route('/status', methods=['GET', 'POST'])
def status():
    if request.method == 'POST':
        virtual_controller.controller.test_ir()
    return render_template('controller/status.html', get_ip=get_ip, get_hostname=get_hostname)