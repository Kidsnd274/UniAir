import socket
import lirc

class VirtualController():
    """Main virtual controller handling IR commands with LIRC and web server"""

    def __init__(self):
        self.aircon_power = False
        self.aircon_temp = 26
        self.aircon_fanspeed = 2
        self.client = lirc.Client(
            connection = lirc.LircdConnection(
                address = "/var/run/lirc/lircd-tx", # Use /var/run/lirc/lircd for default lirc installations
                socket = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM),
                timeout = 5.0
            )
        )

    def send_once(self, controller, command):
        self.client.send_once(controller, command)

    def test_ir(self):
        self.client.send_once("mitsubishi_kh18a", "SWITCH_OFF")
        print("DEBUG: Sent IR Test, SWITCH_OFF from mitsubishi_kh18a")

if __name__ == "__main__":
    print("Please run main webserver app.py!")
    print("DEBUG: Runnnig IR test...")
    TestController = VirtualController()
    TestController.send_once("mitsubishi_kh18a", "SWITCH_OFF")
    print("DEBUG: Sent IR Test, sent SWITCH_OFF from mitsubishi_kh18a")