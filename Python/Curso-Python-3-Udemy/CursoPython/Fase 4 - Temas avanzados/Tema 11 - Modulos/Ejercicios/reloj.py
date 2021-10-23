import datetime
import os
import time

while True:
    dt = datetime.datetime.now()
    print("La hora es: {}:{}:{}".format(dt.hour, dt.minute, dt.second))
    time.sleep(1)
    os.system('clear')