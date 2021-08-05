import socket
import lirc

client = lirc.Client(
  connection = lirc.LircdConnection(
    address = "/var/run/lirc/lircd-tx", # Use /var/run/lirc/lircd for default lirc installations
    socket = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM),
    timeout = 5.0
  )
)

client.send_once("mitsubishi_kh18a", "SWITCH_OFF")
print("Command sent")