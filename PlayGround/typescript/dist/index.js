"use strict";
console.log("Soup!");
let id = 7;
let company = "Rixo Tech";
let isPublished = true;
let x = "Soup";
x = 1;
let ids = [1, 2, 3, 4, 5];
let arr = ["asdf", 1];
let person = [1, "asdf", true];
let employee;
employee = [
    [1, "a"],
    [2, "b"],
    [3, "c"],
    [4, "d"],
];
let pid = 22;
pid = "22";
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
const user = {
    id: 1,
    name: "Ow",
};
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
function add(x, y) {
    return x + y;
}
console.log(add(123, 123));
function log(message) {
    console.log(message);
}
log("asdf");
const user1 = {
    id: 1,
    name: "asdf",
    age: 17,
};
user1.age = 5;
const addFunc = (x, y) => x + y;
const subFunc = (x, y) => x - y;
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "asdf", "f");
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 3, 4, 6]);
let strArr = getArray(["a", "b", "c", "d"]);
