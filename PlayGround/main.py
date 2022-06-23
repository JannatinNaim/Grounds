def bubbleSort(a):
    for i in range(len(a)):
        s = True
        for j in range(len(a) - i - 1):
            if a[j] > a[j + 1]:
                a[j], a[j+1] = a[j+1], a[j]
                s = True
        if not s:
            break


x = [2, 1, 3]
bubbleSort(x)
print(x)
