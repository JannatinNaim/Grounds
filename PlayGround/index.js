var words = [];
var users = [];
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.used_words = [];
        this.is_alive = true;
    }
    return User;
}());
var Word = /** @class */ (function () {
    function Word(word, user) {
        this.word = word;
        this.user = user;
    }
    return Word;
}());
var Users = /** @class */ (function () {
    function Users() {
        this.users = [];
        this.current_index = 0;
    }
    Users.prototype.roll_forward = function () {
        do {
            this.current_index = this.next_index;
        } while (!this.users[this.current_index].is_alive);
    };
    Users.prototype.roll_backward = function () {
        do {
            this.current_index = this.previous_index;
        } while (!this.users[this.current_index].is_alive);
    };
    Object.defineProperty(Users.prototype, "current_user", {
        get: function () {
            if (this.users_length == 0)
                return null;
            return this.users[this.current_index];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "next_user", {
        get: function () {
            return this.users[this.next_index];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "previous_user", {
        get: function () {
            return this.users[this.previous_index];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "users_length", {
        get: function () {
            return this.users.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "next_index", {
        get: function () {
            if (this.current_index - 1 === this.users_length)
                return 0;
            return this.users_length + 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "previous_index", {
        get: function () {
            if (this.current_index === 0)
                return this.users_length - 1;
            return this.current_index - 1;
        },
        enumerable: false,
        configurable: true
    });
    return Users;
}());
var Words = /** @class */ (function () {
    function Words() {
        this.used_words = [];
    }
    return Words;
}());
