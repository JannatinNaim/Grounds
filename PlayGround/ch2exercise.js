const size = 7;

function triangle(size) {
  let string = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      string += "#";
    }
    string += "\n";
  }

  return string;
}

console.log(triangle(size));

function reverseTriangle(size) {
  let string = "";

  for (let i = 0; i < size; i++) {
    for (let j = i; j < size; j++) {
      string += "#";
    }
    string += "\n";
  }

  return string;
}

console.log(reverseTriangle(size));

function fizzBuzz() {
  const output = [];

  for (let n = 1; n <= 100; n++) {
    let string = "";
    if (n % 3 === 0) string += "Fizz";
    if (n % 5 === 0) string += "Buzz";
    output.push(string ? string : n);
  }

  return output;
}

console.log(fizzBuzz());

function fizzBuzzTill(start, end) {
  const output = [];

  for (let n = start; n <= end; n++) {
    let string = "";
    if (n % 3 === 0) string += "Fizz";
    if (n % 5 === 0) string += "Buzz";
    output.push(string ? string : n);
  }

  return output;
}

console.log(fizzBuzzTill(size, size ** 2));

function checkbox(size) {
  let string = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i % 2 === 0 && j % 2 !== 0) string += "#";
      else if (i % 2 !== 0 && j % 2 === 0) string += "#";
      else string += " ";
    }
    string += "\n";
  }

  return string;
}

console.log(checkbox(size));
