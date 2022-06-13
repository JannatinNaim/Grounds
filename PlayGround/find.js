function find(number, start) {
  function finder(current, history) {
    if (current === number) return history;
    if (current > number) return null;
    return finder(current + 5, `(${history} + 5)`) || finder(current * 3, `(${history} * 3)`);
  }

  return finder(start, start);
}

console.log(find(13, 8));
console.log(find(27, 3));
