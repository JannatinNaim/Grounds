# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers = [i for i in range(1, 10)]

even = [i for i in numbers if i % 2 == 0]
odd = [i for i in numbers if i % 2 != 0]
even_greater_than_6 = [i for i in numbers if i % 2 == 0 and i > 6]
odd_greater_than_3_and_even_greater_than_6 = [
    i for i in numbers
    if (i % 2 != 0 and i > 3) or (i % 2 == 0 and i > 6)
]

print(even, odd)
print(odd_greater_than_3_and_even_greater_than_6)
