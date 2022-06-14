console.log("Soup!");

let id: number = 7;
let company: string = "Rixo Tech";
let isPublished: boolean = true;
let x: any = "Soup";
x = 1;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = ["asdf", 1];

let person: [number, string, boolean] = [1, "asdf", true];

let employee: [number, string][];
employee = [
  [1, "a"],
  [2, "b"],
  [3, "c"],
  [4, "d"],
];

let pid: string | number = 22;
pid = "22";

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);
console.log(Direction1.Down);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Down);

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Ow",
};

let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

function add(x: number, y: number): number {
  return x + y;
}
console.log(add(123, 123));

function log(message: string | number): void {
  console.log(message);
}

log("asdf");

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "asdf",
  age: 17,
};

user1.age = 5;

interface MathFunc {
  (x: number, y: number): number;
}

const addFunc: MathFunc = (x: number, y: number): number => x + y;
const subFunc: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered.`;
  }
}

const person1 = new Person(123, "a");
const person2 = new Person(133, "b");

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "asdf", "f");

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArr = getArray<number>([1, 3, 4, 6]);
let strArr = getArray<string>(["a", "b", "c", "d"]);
