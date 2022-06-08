// const speak = function (line) {
//   console.log(`The ${this.type} rabbit says, "${line}"`);
// };

// let whiteRabbit = { type: "white", speak };
// let blackRabbit = { type: "black", speak };

// whiteRabbit.speak("ow");
// blackRabbit.speak("dayum");

// speak.call(whiteRabbit, "lel");

// function normalize() {
//   console.log(this.coords.map((n) => n / this.length));
// }
// normalize.call({ coords: [0, 2, 3], length: 5 });
// // → [0, 0.4, 0.6]

// const greet = function () {
//   console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
// };

// // const greet = () => {
// //   console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
// // };

// const person = {
//   name: "Jannatin Naim",
//   age: 17,
//   hobbies: ["Programming", "Watching movies", "Reading blogs"],
//   greet,
//   // greet: function () {
//   //   console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
//   // }
// };

// person.greet();

// // greet.call(person);

// const person = {
//   name: "aoeu htns",
//   greet: function () {
//     // this.name -> aoeu htns
//     // -> `this` is refering to the `person object`.
//     function sayHello() {
//       console.log("Hi! I'm " + this.name);
//       // `this` is not referring to the `person` object.
//     }
//     sayHello();
//   },
// };

// person.greet();

// let empty = {};
// console.log(empty.toString);
// console.log(empty.toString());

// console.log(Object.getPrototypeOf({}));

// function makeRabbit(type) {
//   let protoRabbit = {
//     speak(line) {
//       console.log(`The ${this.type} rabbit says, "${line}".`);
//     },
//   };

//   let rabbit = Object.create(protoRabbit);
//   rabbit.type = type;
//   return rabbit;
// }

// const rabbitA = makeRabbit("black");
// rabbitA.speak("dayum");

// function Rabbit(type) {
//   this.type = type;
//   this.greet = function () {
//     console.log(`Soup! I'm a ${this.type} rabbit.`);
//   };
// }
// Rabbit.prototype.speak = function (line) {
//   console.log(`The ${this.type} rabbit says, "${line}".`);
// };

// let weirdRabbit = new Rabbit("weird");
// weirdRabbit.speak("sheesh");
// weirdRabbit.greet();

// console.log(weirdRabbit);

// const toStringSymbol = Symbol("toString");
// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }

//   speak(line) {
//     console.log(`The ${this.type} rabbit says, "${line}".`);
//   }

//   [toStringSymbol]() {
//     return `a ${this.type} rabbit`;
//   }
// }

// const hungryRabbit = new Rabbit("hungry");
// hungryRabbit.speak("ouch");
// console.log(hungryRabbit.toString());
// console.log(hungryRabbit[toStringSymbol]());
// console.log(String(hungryRabbit));

// console.log({ a: 1 }.hasOwnProperty("a"));

// const stringIterator = "Ow"[Symbol.iterator]();
// console.log(stringIterator.next());
// console.log(stringIterator.next());
// console.log(stringIterator.next());

// class Matrix {
//   constructor(width, height, element = (x, y) => undefined) {
//     this.width = width;
//     this.height = height;
//     this.content = [];
//
//     for (let y = 0; y < height; y++) {
//       for (let x = 0; x < width; x++) {
//         this.content[y * this.width + x] = element(x, y);
//       }
//     }
//   }
//
//   get(x, y) {
//     return this.content[y * this.width + x];
//   }
//
//   set(x, y, value) {
//     this.content[y * this.width + x] = value;
//   }
//
//   [Symbol.iterator]() {
//     return new MatrixIterator(this);
//   }
// }
//
// class SymmetricMatrix extends Matrix {
//   constructor(size, element = (x, y) => undefined) {
//     super(size, size, (x, y) => {
//       if (x < y) return element(y, x);
//       else return element(x, y);
//     });
//   }
//
//   set(x, y, value) {
//     super.set(x, y, value);
//     if (x != y) super.set(y, x, value);
//   }
// }
//
// const smym = new SymmetricMatrix(5, (x, y) => `${x}${y}`);
// console.log(smym);
//
// class MatrixIterator {
//   constructor(matrix) {
//     this.x = 0;
//     this.y = 0;
//     this.matrix = matrix;
//   }
//
//   next() {
//     if (this.y === this.matrix.height) return { done: true };
//
//     let value = {
//       x: this.x,
//       y: this.y,
//       value: this.matrix.get(this.x, this.y),
//     };
//     this.x++;
//
//     if (this.x === this.matrix.width) {
//       this.x = 0;
//       this.y++;
//     }
//
//     return { value, done: false };
//   }
// }

// const matrix = new Matrix(2, 2, (x, y) => `v: ${x}:${y}`);
// // const matrix = new Matrix(4, 4, (x, y) => x * y);

// for (let { x, y, value } of matrix) {
//   console.log(x, y, value);
// }

// class Matrix {
//   constructor(height, width, element = () => undefined) {
//     this.height = height;
//     this.width = width;
//     this.content = [];

//     for (let y = 0; y < height; y++) {
//       for (let x = 0; x < width; x++) {
//         const coords = y * this.width + x;
//         this.content[coords] = element(x, y);
//       }
//     }
//   }

//   get(x, y) {
//     const coords = y * this.width + x;
//     return this.content[coords];
//   }

//   set(x, y, value) {
//     const coords = y * this.width + x;
//     this.content[coords] = value;
//   }

//   [Symbol.iterator]() {
//     return new MatrixIterator(this);
//   }
// }

// class MatrixIterator {
//   constructor(_matrix) {
//     this.x = 0;
//     this.y = 0;
//     this.matrix = _matrix;
//   }

//   next() {
//     if (this.y === this.matrix.height) return { done: true };

//     const value = {
//       x: this.x,
//       y: this.y,
//       value: this.matrix.get(this.x, this.y),
//     };

//     this.x += 1;
//     if (this.x === this.matrix.width) {
//       this.x = 0;
//       this.y += 1;
//     }

//     return { value, done: false };
//   }
// }

// const matrix = new Matrix(2, 2, (x, y) => x + ":" + y);
// for (let element of matrix) {
//   console.log(element);
// }

// class ObjectIterator {
//   constructor(_object) {
//     this.object = _object;
//     this.index = 0;
//   }

//   next() {
//     if (this.index === Object.keys(this.object).length) return { done: true };

//     const value = {
//       value: this.object[Object.keys(this.object)[this.index]],
//       done: false,
//     };
//     this.index++;

//     return value;
//   }
// }

// const object = {
//   name: "Jannatin Naim",
//   age: 17,
//   [Symbol.iterator]() {
//     return new ObjectIterator(this);
//   },
// };

// for (let i of object) {
//   console.log(i);
// }

// let varyingSize = {
//   get size() {
//     return Math.floor(Math.random() * 1000);
//   },
// };
//
// class Temperature {
//   constructor(celsius) {
//     this.celsius = celsius;
//   }
//
//   get fahrenheit() {
//     return this.celsius * 1.8 + 32;
//   }
//
//   set fahrenheit(value) {
//     this.celsius = (value - 32) / 1.8;
//   }
//
//   static fromFahrenheit(value) {
//     return new Temperature((value - 32) / 1.8);
//   }
// }
//
// const temp = Temperature.fromFahrenheit(0);
// console.log(temp.celsius);
// temp.celsius = 10;
// console.log(temp.celsius);
// console.log(temp.fahrenheit);
// temp.celsius = 0;
// console.log(temp.fahrenheit);

// Your code here.
// class Vec {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   plus(vector) {
//     return new Vec(this.x + vector.x, this.y + vector.y);
//   }
//
//   minus(vector) {
//     return new Vec(this.x - vector.x, this.y - vector.y);
//   }
//
//   get length() {
//     return Math.sqrt(this.x * this.x + this.y * this.y);
//   }
// }
//
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5

// class Group {
//   constructor(content = []) {
//     this.content = content;
//   }
//
//   static from(items) {
//     const content = [];
//     for (let item of items) {
//       if (!content.includes(item)) content.push(item);
//     }
//
//     return new Group(content);
//   }
//
//   has(item) {
//     return this.content.includes(item);
//   }
//
//   add(item) {
//     if (!this.content.includes(item)) this.content.push(item);
//   }
//
//   delete(item) {
//     this.content = this.content.filter((e) => e !== item);
//   }
//
//   [Symbol.iterator]() {
//     return new GroupIterator(this);
//   }
// }
//
// class GroupIterator {
//   constructor(group) {
//     this.index = 0;
//     this.group = group;
//   }
//
//   next() {
//     if (this.index >= this.group.content.length) return { done: true };
//
//     let value;
//     if (this.index < this.group.content.length) {
//       value = this.group.content[this.index];
//     }
//     this.index += 1;
//
//     return { value, done: false };
//   }
// }
//
// let group = Group.from([10, 20, 10]);
// console.log(group);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// // → false
//
// // Your code here (and the code from the previous exercise)
//
// for (let value of Group.from(["a", "b", "c"])) {
//   console.log(value);
// }
// // → a
// // → b
// // → c

// let map = {
//   one: true,
//   two: true,
//   hasOwnProperty: true,
// };
//
// console.log(Object.prototype.hasOwnProperty.call(map, "one"));
//
// // Fix this call
// // console.log(map.hasOwnProperty("one"));
// // → true
