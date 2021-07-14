from functools import wraps
from flask import Blueprint, flash, request, redirect, url_for, render_template, abort, current_app, jsonify
from flask_login import login_user, logout_user, login_required, current_user, UserMixin
from werkzeug.security import check_password_hash
import datetime
import jwt
try:
    from .config import config
except:
    pass
try:
    from config import config
except:
    pass

bp = Blueprint("auth", __name__, url_prefix="/auth")

@bp.route('/login', methods=['GET', 'POST'])
def login():
    if config.getboolean('settings', 'first_time_done') is False:
        return redirect(url_for('setup_page.welcome'))
    if current_user.is_authenticated:
        return redirect(url_for('index'))

    if request.method == 'POST':
        error = None
        password = request.form['password']
        if password is None:
            error = "Password required"
        elif not check_password_hash(config.get('settings', 'password'), password):
            error = "Incorrect password"
        
        if error is None:
            login_user_authenticated()
            return redirect(url_for('index'))
        
        flash(error)
    return render_template('auth.html')

@bp.route('/logout')
@login_required
def logout():
    """Clear the current session, including the stored user id."""
    logout_user()
    return redirect(url_for('index'))

@bp.route('/get_token', methods=['POST'])
def get_token():
    if config.getboolean('settings', 'first_time_done') is False:
        return abort(403, description="Server not setup!")

    error = None
    print(request.json)
    password = request.json['password']
    if not request:
        abort(400)
    if password is None:
        error = "Password required"
    elif not check_password_hash(config.get('settings', 'password'), password):
        return "Incorrect password", 401
    
    if error is None:
        token = jwt.encode({
            'user': 'USER',
        }, current_app.config['SECRET_KEY'])
        return jsonify({
            'token': token.decode('UTF-8')
        })
    
    return error

def token_required(f):
    @wraps(f)
    def _verify(*args, **kwargs):
        auth_headers = request.headers.get('Authorization', '').split()

        invalid_msg = {
            'message': 'Invalid token. Get a new one',
            'authenticated': False,
        }

        if len(auth_headers) != 2:
            return jsonify(invalid_msg), 401

        try:
            token = auth_headers[1]
            data = jwt.decode(token, current_app.config['SECRET_KEY'])
            return f(*args, **kwargs)
        except (jwt.InvalidTokenError, Exception) as e:
            print(e)
            return jsonify(invalid_msg), 401
    return _verify


def login_user_authenticated():
    """ONLY USE THIS WHEN AUTHENTICATED"""
    user = User()
    user.id = "USER"
    login_user(user)

def generate_secret_key():
    import os
    print("LOG: Generating 16 digit SECRET KEY")
    return os.urandom(16)

class User(UserMixin):
    pass