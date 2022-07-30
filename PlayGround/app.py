import sqlite3


def show_all():
    db_connection = sqlite3.connect("app.db")
    db_cursor = db_connection.cursor()
    db_cursor.execute("SELECT rowid, * FROM customers")
    items = db_cursor.fetchall()

    for item in items:
        print(item)

    db_connection.commit()
    db_connection.close()


def add_one(first_name, last_name, email):
    db_connection = sqlite3.connect("app.db")
    db_cursor = db_connection.cursor()

    db_cursor.execute(
        "INSERT INTO customers VALUES (?,?,?)",
        (
            first_name,
            last_name,
            email
        )
    )

    db_connection.commit()
    db_connection.close()


def add_many(list):
    db_connection = sqlite3.connect("app.db")
    db_cursor = db_connection.cursor()

    db_cursor.executemany(
        "INSERT INTO customers VALUES (?,?,?)",
        (
            list
        )
    )

    db_connection.commit()
    db_connection.close()


def delete_one(id):
    db_connection = sqlite3.connect("app.db")
    db_cursor = db_connection.cursor()

    db_cursor.execute(
        "DELETE FROM customers WHERE rowid=(?)",
        (
            str(id)
        )
    )

    db_connection.commit()
    db_connection.close()


def email_lookup(email):
    db_connection = sqlite3.connect("app.db")
    db_cursor = db_connection.cursor()

    db_cursor.execute(
        "SELECT rowid, * FROM customers WHERE email=(?)",
        (
            email,
        )
    )

    db_connection.commit()
    db_connection.close()
