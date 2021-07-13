from flask import Flask, redirect, url_for
from flask_login import LoginManager, current_user, UserMixin
from config import config
from database import read_from_database, virtual_controller
from auth import User

def create_app():
    """Create and configure an instance of the Flask Application"""

    # Default Settings
    config['settings'] = {
        'first_time_done': 'false',
        'lircd_address': '/var/run/lirc/lircd-tx', # Use /var/run/lirc/lircd for default lirc installations
        # 'secret_key': 'abc123',
        # 'database_file': './database.db',
    }
    config.read('settings.ini')
    # print(config.get('settings', 'first_time_done'))

    app = Flask(__name__, instance_relative_config=True)

    # Login Manager Stuff
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def user_loader(username):
        user = User()
        user.id = "USER"
        return user

    try:
        read_from_database()
    except FileNotFoundError:
        print("ERROR: Could not find database. Is this a first time setup?")

    import setup_page
    app.register_blueprint(setup_page.bp)

    import api
    import controller
    import settings_page
    import auth
    app.register_blueprint(api.bp)
    app.register_blueprint(controller.bp)
    app.register_blueprint(settings_page.bp)
    app.register_blueprint(auth.bp)

    @app.route("/")
    def index():
        if config.getboolean('settings', 'first_time_done') is False:
            return redirect(url_for('setup_page.welcome'))
        else:
            if current_user.is_authenticated:
                return redirect(url_for("controller.status"))
            else:
                return redirect(url_for("auth.login"))

    return app

if __name__ == "__main__":
    create_app().run(debug = True, host = '0.0.0.0')