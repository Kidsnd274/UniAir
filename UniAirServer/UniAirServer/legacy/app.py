from flask import Flask, render_template, url_for, request, abort
from virtualcontroller.VirtualController import VirtualController

app = Flask(__name__)

controllerData = {
    "controllerName": "mitsu_control",
    "aircon_power": False,
    "aircon_temp": 100,
    "aircon_fanspeed": 2,
    "aircon_flap": 3,
    "aircon_eco_mode": False,
    "aircon_powerful_mode": False,
}
virtual_controller = VirtualController(controllerData)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/test-ir', methods=["POST"])
def test_ir():
    virtual_controller.test_ir()
    return render_template('index.html')

# API Calls
@app.route('/api/toggle_power')
def toggle_power():
    virtual_controller.toggle_power()
    response = app.response_class(
        response = virtual_controller.get_aircon_data(),
        mimetype = 'application/json'
    )
    return response

@app.route('/api/aircon_data', methods=["GET", "POST"])
def get_aircon_data():
    if request.method == 'POST':
        if not request.json:
            abort(400)
        else:
            virtual_controller.update_aircon_data(request.json)
            virtual_controller.send_updated_data_ir()
    response = app.response_class(
        response = virtual_controller.get_aircon_data(),
        mimetype = 'application/json'
    )
    return response

@app.route('/api/is_setup')
def is_setup():
    return True

    # data = jsonify(
    #     date_and_time = datetime.now().isoformat(), # ISO 8601 format, find function to decode this format for JS
    #     aircon_power = virtual_controller.aircon_power,
    #     aircon_temp = virtual_controller.aircon_temp,
    #     aircon_fanspeed = virtual_controller.aircon_fanspeed    
    # )

if __name__ == "__main__":
    app.run(debug = True, host = '0.0.0.0')
