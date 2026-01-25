function countBits(n) {
  let bits = 0;
  let currentBit = 0;

  while (n > 1) {
    currentBit = n % 2;
    if (currentBit == 1) bits += 1;
    n = parseInt(n / 2)
  }
  if (n == 1) bits += 1;
  return bits;
}

console.log(countBits(1234))
console.log(countBits(0))
console.log(countBits(4))
console.log(countBits(7))
console.log(countBits(9))
console.log(countBits(10))