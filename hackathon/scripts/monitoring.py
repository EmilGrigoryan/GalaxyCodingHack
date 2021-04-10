from scripts.controller import *
import copy
import time
from datetime import datetime, timedelta
from time import struct_time
from scripts.element import *


def off_unnecessary(controllers):
    for con in controllers:
        if con.get_power() > 0:
            for el in con.elements:
                current_time = str(datetime.now())[11:13]
                if el.work_time[0] == "always":
                    continue
                else:
                    if current_time not in el.work_time and el.human is False:
                        print(("log: power off in ---> " + str(el.name) + "; before: " + str(el.power)), end='')
                        el.power = 0
                        print(" after: " + str(el.power))
                        con.count_power()


def reduce_power(controllers):
    for con in controllers:
        if con.get_power() > 0:
            for el in con.elements:
                if el.work_time[0] == "always":
                    continue
                else:
                    if el.human is False and el.power > el.avg_power:
                        print("log: reduce power in ---> " + str(el.name) + " before: " + str(el.power), end='')
                        el.power = el.avg_power
                        print("; after: " + str(el.power))
                        con.count_power()


def on_by_time(controllers):
    for con in controllers:
        for el in con.elements:
            current_time = str(datetime.now())[11:13]
            if (el.human is True or current_time in el.work_time) and el.power == 0:
                print("log: power on in ---> " + str(el.name) + " before: " + str(el.power), end='')
                el.power = el.avg_power
                print("; after: " + str(el.power))
                con.count_power()


def scan(controller):
    while True:
        if controller.mode == "off_unnecessary":
            off_unnecessary(controller.controllers)
        elif controller.mode == "reduce_power":
            reduce_power(controller.controllers)
        on_by_time(controller.controllers)
        break
    pass


def start(mode="off_unnecessary"):

    lights = [copy.deepcopy(Element(2, 3, ["13", "15", "19"], 1, False, "light 1")),
              copy.deepcopy(Element(4, 3, ["13", "15", "19"], 1, False, "light 2")),
              copy.deepcopy(Element(2, 3, ["13", "15", "19"], 1, True, "light 3"))]

    ventils = [copy.deepcopy(Element(3, 5, ["10", "12", "19"], 1, True, "ventil 1")),
               copy.deepcopy(Element(8, 5, ["10", "12", "19"], 1, False, "ventil 2")),
               copy.deepcopy(Element(0, 5, ["10", "12", "22"], 1, False, "ventil 3"))]

    elen_pc = Element(8, 10, ["always"], 1, True, "lab pc")

    light = Light_controller(1, lights)
    ventils = Ventil_controller(1, ventils)
    pc = Lab_PC_controller(1, [elen_pc])

    main_controller = MainController(light)
    main_controller.add_controller(ventils)
    main_controller.add_controller(pc)
    main_controller.mode = mode


    scan(main_controller)

    result = {
        "name": "Main Controller",
        "Numbers of sub controllers": main_controller.get_number_of_controllers(), 
        "General power": main_controller.get_general_power(), 
        "Mode": main_controller.mode, 
        "controllers": [
        {
        "name": "Lab PC controller",
        "power": light.power, 
        "status": light.status, 
        "number of elements": light.get_number_of_elements()
        },
            {
        "name": "Ventil controller",
        "power": ventils.power, 
        "status": ventils.status,
        "number of elements": ventils.get_number_of_elements() 
        },
        {
        "name": "Light controller",
        "power": pc.power, 
        "status": pc.status, 
        "number of elements": pc.get_number_of_elements()
        }
        ]
    }


    return result


