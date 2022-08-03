import timeit


def fib(n):
    if n == 0:
        return 0

    if n == 1:
        return 1

    return fib(n - 1) + fib(n - 2)


start = timeit.default_timer()
print(fib(32))
stop = timeit.default_timer()

print("Fib Function Took: ", stop - start)


fib_list = [0, 1]


def better_fib(n):
    if len(fib_list) - 1 >= n:
        return fib_list[n]

    fib_list.append(better_fib(n - 1) + better_fib(n - 2))

    return fib_list[n]


start = timeit.default_timer()
better_fib(32)
stop = timeit.default_timer()

print("Improved Function Took: ", stop - start)


def another_fib(n):
    another_fib_list = []

    for i in range(n + 1):
        another_fib_list.append(0)

    another_fib_list[1] = 1

    for i in range(2, n + 1):
        another_fib_list[i] = another_fib_list[i - 1] + another_fib_list[i - 2]

    return another_fib_list[n]


start = timeit.default_timer()
another_fib(32)
stop = timeit.default_timer()

print("Another Function Took: ", stop - start)


def fib_arr(n):
    numbers = [0, 1]

    for i in range(n - 1):
        x = numbers[-1]
        y = numbers[-2]
        numbers.append(x + y)

    # i = 0
    # while i < n - 1:
    #     x = numbers[-1]
    #     y = numbers[-2]
    #     numbers.append(x + y)
    #     i += 1

    return numbers[-1]


start = timeit.default_timer()
fib_arr(32)
stop = timeit.default_timer()

print("Arr Function Took: ", stop - start)
