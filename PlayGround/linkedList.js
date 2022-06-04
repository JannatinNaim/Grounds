const arrayToList = (arr) => {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    const value = arr[i];
    list = {
      value,
      rest: list,
    };
  }

  return list;
};

console.log(arrayToList([1, 2, 3]));

const listToArray = (list) => {
  let arr = [];

  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }

  return arr;
};

console.log(listToArray(arrayToList([1, 2, 3])));

const prepend = (list, value) => {
  return {
    value,
    rest: list,
  };
};

console.log(prepend(arrayToList([1, 2]), 3));

const nth = (list, n) => {
  for (let node = list, i = 0; node; node = node.rest, i++) {
    if (i === n) return node.value;
  }
};

console.log(nth(arrayToList([1, 2, 3]), 2));
