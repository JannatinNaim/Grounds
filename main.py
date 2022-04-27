from operator import index
import os
import random


base_directory = "photos"
entries = os.listdir(base_directory)
random_numbers = []

for entry in entries:
    random_number = random.randint(11111111, 99999999)

    if random_number not in random_numbers and str(random_number) not in entries:
        random_numbers.append(random_number)

for i in range(len(random_numbers)):
    file = base_directory + '/' + entries[i]
    new_file = base_directory + '/' + str(random_numbers[i]) + '.jpg'
    os.rename(file, new_file)
