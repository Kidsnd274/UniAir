from flask import Flask
from config import config

def create_app():
    """Create and configure an instance of the Flask Application"""

    config['settings'] = {
        'first_time_done': 'false',
        # 'secret_key': 'abc123',
        # 'database_file': './database.db',
    }
    config.read('settings.ini')
    print(config.get('settings', 'first_time_done'))

    app = Flask(__name__, instance_relative_config=True)

    # if config.getboolean('settings', 'first_time_done') is False:
    import setup_page
    app.register_blueprint(setup_page.bp)

    import api
    import controller
    app.register_blueprint(api.bp)
    app.register_blueprint(controller.bp)

    @app.route("/")
    def default_page():
        return "Hello, World!"
    # app.add_url_rule("/", endpoint="index")

    return app

if __name__ == "__main__":
    create_app().run(debug = True, host = '0.0.0.0')