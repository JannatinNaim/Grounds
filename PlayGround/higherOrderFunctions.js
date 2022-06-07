const filter = (array, condition) => {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    condition(array[i]) && filteredArray.push(array[i]);
  }
  return filteredArray;
};

const customFilterStart = performance.now();
const filteredArr = filter([1, 2, 3, 4, 5], (item) => item > 2);
const customFilterEnd = performance.now();

const customFilterTime = customFilterStart - customFilterEnd;
console.log("Custom filter ended in " + customFilterEnd);

const genericFilterStart = performance.now();
const genericFilteredArray = [1, 2, 3, 4, 5].filter((item) => item > 2);
const genericFilterEnd = performance.now();

const genericFilterTime = genericFilterStart - genericFilterEnd;
console.log("Generic filter ended in " + genericFilterEnd);

const map = (array, mapper) => {
  const mappedArray = [];
  for (const element of array) {
    mappedArray.push(mapper(element));
  }
  return mappedArray;
};

const mappedArr = map([1, 2, 3, 4, 5], (item) => item * 2);
console.log(mappedArr);

const reduce = (array, reducer, initial = 0) => {
  let current = initial;
  for (let item of array) {
    current = reducer(item, current);
  }
  return current;
};

const reducedArray = reduce([1, 2, 3, 4, 5], (item, current) => item + current, 0);
console.log(reducedArray);

console.log([1, 2, 3, 4, 5].reduce((a, b) => a + b));

[5, 9, 22, 4, 10].reduce((a, b) => {
  console.log(a, b);
  return a - b > b ? a : b;
});
