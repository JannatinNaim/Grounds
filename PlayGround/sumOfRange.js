function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function range(start, end, step = 1) {
  const rangeArray = [];

  if (step > 0) for (let i = start; i <= end; i += step) rangeArray.push(i);
  else for (let i = start; i >= end; i += step) rangeArray.push(i);

  return rangeArray;
}

const result = sum(range(1, 10));
console.log(result);

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(4));
