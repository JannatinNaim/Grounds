// function min(a, b) {
//   return a - b > 0 ? b : a;
// }

// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10

// function isEven(n) {
//   if (n === 0) return true;
//   else if (n === 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → false
// console.log(isEven(-2));
// // → true

// function countBs(string) {
//   return countChar(string, "B")
// }

// function countChar(string, char) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) string[i] === char && count++;
//   return count;
// }

// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4
