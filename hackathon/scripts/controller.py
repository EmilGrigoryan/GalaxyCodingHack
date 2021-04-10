from scripts.element import *


class Controller:
    power = 0
    elements = []

    def count_power(self):
        self.power = 0
        for el in self.elements:
            self.power += el.power
        pass

    def get_number_of_elements(self):
        return len(self.elements)

    def __init__(self, status, elements):
        self.status = status
        self.elements.extend(copy.deepcopy(elements))
        self.count_power()

    def get_power(self):
        return self.power

    def get_status(self):
        return self.status

    def get_element(self, id):
        return self.elements[id]

    def get_elements(self):
        return self.elements

    def set_status(self, status):
        self.status = status
        pass

    def set_work_element(self, id, work):
        self.elements[id].set_working(work)
        pass


class Light_controller(Controller):
    power = 0
    status = 0
    elements = []

    def __init__(self, status, elements):
        super().__init__(status, elements)


class Ventil_controller(Controller):
    power = 0
    status = 0
    elements = []

    def __init__(self, status, elements):
        super().__init__(status, elements)


class Lab_PC_controller(Controller):
    power = 0
    status = 0
    elements = []

    def __init__(self, status, elements):
        super().__init__(status, elements)


class MainController:
    controllers = []
    general_power = 0

    def get_number_of_controllers(self):
        return len(self.controllers)

    def count_general_power(self):
        self.general_power = 0
        for con in self.controllers:
            self.general_power += con.get_power()
        pass

    def __init__(self, controller):
        self.controllers.append(copy.deepcopy(controller))
        self.mode = "reduce_power"
        self.count_general_power()
        pass

    def add_controller(self, controller):
        self.controllers.append(copy.deepcopy(controller))
        self.count_general_power()
        pass

    def get_general_power(self):
        self.count_general_power()
        return self.general_power
