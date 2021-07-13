from flask import (
    Blueprint, request, abort, Response
)
from virtualcontroller.VirtualController import VirtualController
from config import config
from database import virtual_controller, write_to_database

bp = Blueprint('setup', __name__, url_prefix='/api')

@bp.route('/aircon_data', methods=["GET", "POST"])
def aircon_data():
    if config.getboolean('settings', 'first_time_done') is False:
        return "Server not setup yet!", 400
    if request.method == 'POST':
        if not request.json:
            abort(400)
        else:
            virtual_controller.controller.update_aircon_data(request.json)
            virtual_controller.controller.send_updated_data_ir()
            write_to_database()
    response = Response(
        response = virtual_controller.controller.get_aircon_data(),
        mimetype = 'application/json'
    )
    return response