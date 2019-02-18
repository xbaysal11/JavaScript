var n = prompt("", "");

const sumTo = n => {
  return n ? n - sumTo(n - 1) : 1;
};

console.log(sumTo(n));
