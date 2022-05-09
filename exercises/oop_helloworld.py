# create your class here
class Car: 
    #instance attributes
    def __init__(self,model,speed):
        self.model = model
        self.speed = speed

    # gets the model
    def getModel(self):
        return self.model
    # sets the speed
    def setSpeed(self,theSpeed):
        self.speed = theSpeed


if __name__ == '__main__':
    bmw = Car('BMW', 30.3)
    print(bmw.getModel(), bmw.speed)
    bmw.setSpeed(65)
    print(bmw.getModel(), bmw.speed)