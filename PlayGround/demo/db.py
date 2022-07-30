import sqlite3

db = sqlite3.connect('db.db')
mem_db = sqlite3.connect(':memory:')

db_cursor = db.cursor()

# db_cursor.execute(
#     """
#         CREATE TABLE customers (
#             first_name DATATYPE TEXT,
#             last_name DATATYPE TEXT,
#             email DATATYPE TEXT,
#             phone DATATYPE INTEGER
#         )
#     """
# )

# db_cursor.execute(
#     """
#         INSERT INTO customers VALUES (
#             'Khorshed',
#             'Alam',
#             'khorshedalam@gmail.com',
#             4884
#         )
#     """
# )

# customers = [
#     (
#         'A',
#         'A',
#         'a@mail.com',
#         1
#     ),
#     (
#         'B',
#         'B',
#         'b@mail.com',
#         1
#     ),
#     (
#         'C',
#         'C',
#         'c@mail.com',
#         1
#     ),
# ]

# db_cursor.executemany("INSERT INTO customers VALUES (?,?,?,?)", customers)

# db_cursor.execute("SELECT * FROM customers")
# print(db_cursor.fetchone())
# print(db_cursor.fetchmany(2))
# print(db_cursor.fetchall())

# items = db_cursor.fetchall()
# for item in items:
#     first_name, last_name, email, phone = item
#     print(first_name, last_name)

# db_cursor.execute("SELECT rowid, * FROM customers WHERE last_name LIKE '%n'")
# items = db_cursor.fetchall()
# for item in items:
#     print(item)

# db_cursor.execute(
#     """
#         UPDATE customers SET first_name="E" WHERE first_name="Ender"
#     """
# )
# db_cursor.execute(
#     """
#         UPDATE customers SET first_name="Jannatin" WHERE rowid=1
#     """
# )

# db_cursor.execute(
#     """
#         DELETE FROM customers WHERE rowid=6
#     """
# )

# db_cursor.execute("SELECT rowid, * FROM customers ORDER BY rowid DESC")
# db_cursor.execute("SELECT rowid, * FROM customers ORDER BY last_name")
# items = db_cursor.fetchall()
# for item in items:
#     print(item)

# db_cursor.execute(
#     """
#         SELECT rowid, * FROM customers WHERE last_name LIKE '%un' AND rowid=3
#     """
# )
# db_cursor.execute(
#     """
#         SELECT rowid, * FROM customers WHERE last_name LIKE '%un' OR rowid=2
#     """
# )
# items = db_cursor.fetchall()
# for item in items:
#     print(item)

# db_cursor.execute("SELECT rowid, * FROM customers LIMIT 3")
# items = db_cursor.fetchall()
# for item in items:
#     print(item)

# db_cursor.execute("DROP TABLE customers")
# db_cursor.execute("SELECT rowid, * FROM customers")
# items = db_cursor.fetchall()
# for item in items:
#     print(item)

db.commit()
db.close()
