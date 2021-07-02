from flask import (
    Blueprint, url_for, request, abort, Response
)
from virtualcontroller.VirtualController import VirtualController
from config import config
from database import virtual_controller

bp = Blueprint('setup', __name__, url_prefix='/api')

@bp.route('/aircon_data', methods=["GET", "POST"])
def aircon_data():
    if request.method == 'POST':
        if not request.json:
            abort(400)
        else:
            virtual_controller.update_aircon_data(request.json)
            virtual_controller.send_updated_data_ir()
    response = Response(
        response = virtual_controller.get_aircon_data(),
        mimetype = 'application/json'
    )
    return response