let array = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];

function removeZeros(array = []) {
  let end = array.length;
  for (let i = 0; i < end; i++) {
    let current = array[i];

    if (current === 0 || current === "0" || !current) {
      for (j = i; j < array.length; j++) array[j] = array[j + 1];
      array[array.length - 1] = current;
      i--;
      end--;
    }
  }

  return array;
}

console.log(removeZeros(array));
