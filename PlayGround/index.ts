const words = [];
const users = [];

interface UserInterface {
  name: string;
  used_words: WordInterface[];
  is_alive: boolean;
}
interface WordInterface {
  word: string;
  user: UserInterface;
}

interface UsersInterface {
  users: UserInterface[];
  current_user: UserInterface | null;
  next_user: UserInterface | null;
  previous_user: UserInterface | null;
  current_index: number;
}
interface WordsInterface {
  used_words: WordInterface[];
  last_word: WordInterface;
  last_user: UserInterface;
}

class User implements UserInterface {
  name: string;
  used_words: WordInterface[];
  is_alive: boolean;

  constructor(name: string) {
    this.name = name;
    this.used_words = [];
    this.is_alive = true;
  }
}

class Word implements WordInterface {
  word: string;
  user: UserInterface;

  constructor(word: string, user: UserInterface) {
    this.word = word;
    this.user = user;
  }
}

class Users implements UsersInterface {
  users: UserInterface[];
  current_index: number;

  constructor() {
    this.users = [];
    this.current_index = 0;
  }

  roll_forward() {
    do {
      this.current_index = this.next_index;
    } while (!this.users[this.current_index].is_alive);
  }

  roll_backward() {
    do {
      this.current_index = this.previous_index;
    } while (!this.users[this.current_index].is_alive);
  }

  get current_user() {
    if (this.users_length == 0) return null;
    return this.users[this.current_index];
  }

  get next_user() {
    return this.users[this.next_index];
  }

  get previous_user() {
    return this.users[this.previous_index];
  }

  get users_length() {
    return this.users.length;
  }

  get next_index() {
    if (this.current_index - 1 === this.users_length) return 0;
    return this.users_length + 1;
  }

  get previous_index() {
    if (this.current_index === 0) return this.users_length - 1;
    return this.current_index - 1;
  }
}
