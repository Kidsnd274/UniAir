from flask import Flask, redirect, url_for
from flask.templating import render_template
from config import config
from database import read_from_database, virtual_controller

def create_app():
    """Create and configure an instance of the Flask Application"""

    config['settings'] = {
        'first_time_done': 'false',
        # 'secret_key': 'abc123',
        # 'database_file': './database.db',
    }
    config.read('settings.ini')
    # print(config.get('settings', 'first_time_done'))

    app = Flask(__name__, instance_relative_config=True)

    try:
        read_from_database()
    except FileNotFoundError:
        print("ERROR: Could not find database. Is this a first time setup?")

    import setup_page
    app.register_blueprint(setup_page.bp)

    import api
    import controller
    app.register_blueprint(api.bp)
    app.register_blueprint(controller.bp)

    @app.route("/")
    def index():
        if config.getboolean('settings', 'first_time_done') is False:
            return redirect(url_for('setup_page.welcome'))
        else:
            return redirect(url_for("controller.status"))

    return app

if __name__ == "__main__":
    create_app().run(debug = True, host = '0.0.0.0')