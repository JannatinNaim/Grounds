from typing import List


class User:
    def __init__(self, name: str):
        self.name = name

    def greet(self):
        print(f"I'm {self.name}.")


class Users:
    def __init__(self, names: List[str]):
        self.users: List[User] = []

        for name in names:
            self.users.append(
                User(name)
            )

    def list(self):
        for user in self.users:
            print(user.name)


names = ["A", "B", "C"]
users = Users(names)

# for name in names:
#     users.append(User(name))

for user in users.users:
    user.greet()
