# # TODO: index based sorting algorithm

# a = [2, 3, -1, -1, 8, -9, 10]

# sorted_a = []
# for i in range(len(a)):
#     x = min(a)

#     a.remove(x)
#     sorted_a.append(x)

# print(sorted_a)

# ==============================================

# [[0, 1], [2, 3], [7, 0], [8, 9]] if input is 0
# [[7, 0], [0, 1], [2, 3], [8, 9]] if input is 1

# index = int(input('enter the sorting index: '))
# index = 1
# items = [
#     [0, 1],
#     [7, 0],
#     [2, 3],
#     [8, 9]
# ]
# sorted_items = []

# items_index_elements = []
# items_index_elements_ref = []
# for element in items:
#     items_index_elements.append(element[index])
#     items_index_elements_ref.append(element[index])

# while len(items_index_elements):
#     min_element = min(items_index_elements)
#     min_element_index = items_index_elements_ref.index(min_element)
#     min_item = items[min_element_index]
#     sorted_items.append(min_item)
#     items_index_elements.remove(min_element)

# # print(sorted_items)


i = 1
x = [[0, 1], [7, 0], [2, 3], [8, 9]]

x_keys = [e[i] for e in x]
x_keys_ref = x_keys.copy()

sorted_x = []
while x_keys:
    x_min = min(x_keys)
    x_keys.remove(x_min)

    x_min_i = x_keys_ref.index(x_min)

    sorted_x.append(x[x_min_i])
