def sum_of_n_nums(start: int, n: int) -> int:
    if n == start:
        return start
    return sum_of_n_nums(start, n - 1) + n


x = sum_of_n_nums(100, 101)


def string_to_int(num: int) -> str:
    return str(num)


y = string_to_int(123)
