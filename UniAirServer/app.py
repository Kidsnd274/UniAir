from flask import Flask, render_template, url_for, request, abort
from virtualcontroller import VirtualController
from datetime import datetime

app = Flask(__name__)
virtual_controller = VirtualController()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/test-ir', methods=["POST"])
def test_ir():
    virtual_controller.test_ir()
    return render_template('index.html')

# API Calls
@app.route('/api/toggle-power')
def toggle_power():
    virtual_controller.toggle_power()
    return app.response_class(status = 200)

@app.route('/api/aircon_data', methods=["GET", "POST"])
def get_aircon_data():
    if request.method == 'POST':
        if not request.json:
            abort(400)
        else:
            virtual_controller.update_aircon_data(request.json)
    response = app.response_class(
        response = virtual_controller.get_aircon_data(),
        mimetype = 'application/json'
    )
    return response

    # data = jsonify(
    #     date_and_time = datetime.now().isoformat(), # ISO 8601 format, find function to decode this format for JS
    #     aircon_power = virtual_controller.aircon_power,
    #     aircon_temp = virtual_controller.aircon_temp,
    #     aircon_fanspeed = virtual_controller.aircon_fanspeed    
    # )

if __name__ == "__main__":
    app.run(debug = True, host = '0.0.0.0')
