var n = prompt("", "");

const sumTo = n => {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
};

console.log(sumTo(n));
