const greaterThan = (n) => (m) => m > n;
console.log(greaterThan(10)(100));

const noisy =
  (func) =>
  (...args) =>
    func(args);
console.log(noisy(greaterThan)(10)(100));

const unless = (test, then) => {
  if (!test) then();
};

const repeat = (n, action) => {
  for (let i = 0; i < n; i++) action(i);
};

repeat(5, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
