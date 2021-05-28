from flask import Flask, render_template, url_for
from virtualcontroller import VirtualController

app = Flask(__name__)
virtual_controller = VirtualController()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/test-ir/', methods=["POST"])
def test_ir():
    virtual_controller.test_ir()
    return render_template('index.html')

#@app.route('/web-api')


if __name__ == "__main__":
    app.run(debug = True)