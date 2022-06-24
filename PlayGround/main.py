def sum(a, b):
    a = [char for char in a]
    b = [char for char in b]

    a.reverse()
    b.reverse()

    sum = ""
    carry = 0
    for i in range(len(a)):
        a_char = int(a[i])
        b_char = int(b[i])

        a_sum_b = a_char + b_char + carry
        a_sum_b = str(a_sum_b)

        if len(a_sum_b) > 1:
            sum = str(a_sum_b[1]) + sum
            carry = int(a_sum_b[0])
        else:
            sum = str(a_sum_b) + sum
            carry = 0

    if carry != 0:
        sum = str(carry) + sum

    return sum


a = "89347098237450982734"
b = "79283475092384750293"
c = sum(a, b)
# 168,630,573,329,835,733,027
print(c)
