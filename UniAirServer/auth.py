from flask import Blueprint, flash, request, redirect, url_for, render_template
from flask_login import login_user, logout_user, login_required, current_user, UserMixin
from werkzeug.security import check_password_hash
from config import config

bp = Blueprint("auth", __name__, url_prefix="/auth")

@bp.route('/login', methods=('GET', 'POST'))
def login():
    if config.getboolean('settings', 'first_time_done') is False:
        return redirect(url_for('setup_page.welcome'))
    if current_user.is_authenticated:
        return redirect(url_for('index'))

    if request.method == 'POST':
        error = None
        secret_key = request.form['secret_key']
        if secret_key is None:
            error = "Secret Key required"
        elif not check_password_hash(config.get('settings', 'secret_key'), secret_key):
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

def login_user_authenticated():
    """ONLY USE THIS WHEN AUTHENTICATED"""
    user = User()
    user.id = "USER"
    login_user(user)

class User(UserMixin):
    pass