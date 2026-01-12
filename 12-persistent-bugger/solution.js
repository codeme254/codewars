function persistence(num) {
  let p = 0;
  while (num > 9) {
    num = multiplyDigits(num);
    p += 1;
  }
  return p;
}

function multiplyDigits(num) {
  if (num === 0) return num;
  let product = 1;
  let right;
  while (num) {
    right = num % 10;
    product *= right;
    num = parseInt(num / 10);
  }

  return product;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
