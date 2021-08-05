class ControllerHolder():
    """Just a class to hold the virtual controller"""
    def __init__(self, new_controller):
        self.controller = new_controller

    def replace_controller(self, new_controller):
        self.controller = new_controller