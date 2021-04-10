import copy 

class Element():

    work_time = [] # may be always instead time
    #status = 1 2 3
    #human = true/false
    #name = ""

    def __init__(self, power, avg_power, work_time, status, human, name):
        self.avg_power = avg_power
        self.power = power
        self.work_time = copy.deepcopy(work_time)
        self.status = status
        self.human = human
        self.name = name
        
    def get_power(self):
        return self.power
