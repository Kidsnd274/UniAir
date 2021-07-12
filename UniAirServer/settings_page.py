from flask import (
    Blueprint, render_template, url_for, request, redirect
)
from database import virtual_controller
from setup_page import get_ip, get_hostname
from config import config

bp = Blueprint('settings', __name__, url_prefix='/settings')

@bp.route('/')
def settings():
    return render_template('settings/settings.html')