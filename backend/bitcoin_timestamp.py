class BitcoinTimestamp:
    # TODO: (5.2)
    def __init__(self, timestamp: str, price: float):
        self.timestamp = timestamp
        self.price = price
    
    # gets the timestamp
    def getTimestamp(self):
        return self.timestamp

    # sets the price
    def getPrice(self):
        return self.price
