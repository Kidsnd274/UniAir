from flask import Flask, render_template, url_for, jsonify
from virtualcontroller import VirtualController

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

@app.route('/api/get_aircon_data', methods=["GET"])
def get_aircon_data():
    data = jsonify(
        aircon_power = virtual_controller.aircon_power,
        aircon_temp = virtual_controller.aircon_temp,
        aircon_fanspeed = virtual_controller.aircon_fanspeed    
    )
    # response = app.response_class(
    #     response = data,
    #     status = 200,
    #     mimetype = 'application/json'
    # )
    return data

if __name__ == "__main__":
    app.run(debug = True, host = '0.0.0.0')