const arrayToList = (arr) => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list,
    };
  }
  return list;
};

const listToArray = (list) => {
  let arr = [];

  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }

  // let node = list;
  // while (node) {
  //   arr.push(node.value);
  //   node = node.rest;
  // }

  return arr;
};

const prepend = (element, list) => {
  return {
    value: element,
    rest: list,
  };
};

// const nth = (list, position) => {
//   for (let node = list, i = 0; node; node = node.rest, i++) {
//     if (i === position) return node.value;
//   }
// };

// const nth = (list, n) => {
//   if (!list) return undefined;
//   else if (n === 0) return list.value;
//   else return nth(list.rest, n - 1);
// };
