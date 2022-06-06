const greaterThan = (n) => (m) => m > n;
const greaterThan100 = greaterThan(100);
console.log(greaterThan100(1000));

const lessThan = (n) => (m) => m < n;
const lessThan20 = lessThan(20);
console.log(lessThan20(200));

const isEqualTo = (n) => (m) => m === n;
const isEqualTo100 = isEqualTo(100);
console.log(isEqualTo100(100));

const handover = (func) => {
  console.log("Function was handed over.");

  return (...args) => {
    console.log("Handed over function is being called.");
    return func(...args);
  };
};

const handoverGreaterThan = handover(greaterThan);
const handedOverGreaterThan10 = handoverGreaterThan(10);
console.log(handedOverGreaterThan10(100));

const handedOverConsoleLog = handover(console.log);
handedOverConsoleLog("monkey");
