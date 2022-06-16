function add(a = "", b = "") {
  let sum = "";
  let largerIndex = a.length - b.length > 0 ? a.length : b.length;

  let carryDigit = 0;
  for (let i = 0; i < largerIndex; i++) {
    const aLastDigit = Number(a[a.length - 1 - i]) || 0;
    const bLastDigit = Number(b[b.length - 1 - i]) || 0;

    const singleDigitSum = String(aLastDigit + bLastDigit + carryDigit);

    if (singleDigitSum.length > 1) {
      sum = singleDigitSum[1] + sum;
      carryDigit = Number(singleDigitSum[0]);
    } else {
      sum = singleDigitSum + sum;
      carryDigit = 0;
    }
  }

  if (carryDigit) sum = carryDigit + sum;

  return sum;
}
