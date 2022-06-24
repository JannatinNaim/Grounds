dividend = 105
divisor = 25
remainder = dividend % divisor
gcd = remainder

while remainder:
    divisor = remainder
    gcd = remainder
    remainder = dividend % divisor

print(gcd)
