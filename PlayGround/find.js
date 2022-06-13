function find(target) {
  function recurseFind(current, history) {
    if (current === target) return history;
    if (current > target) return null;

    return recurseFind(current * 3, `(${history}) * 3`) || recurseFind(current + 5, `(${history}) + 5`);
  }

  return recurseFind(1, "1");
}

console.log(find(13));
// 1 * 3 + 5 + 5 = 13

console.log(find(27));
// 1 * 3 * 3 * 3 = 27

console.log(find(16));
// 1 + 5 + 5 + 5 = 16
