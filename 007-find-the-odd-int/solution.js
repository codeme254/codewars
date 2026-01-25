function findOdd(A) {
  const table = {};
  A.forEach((number) => {
    if (table.hasOwnProperty(number)) {
        table[number] += 1;
    } else {
        table[number] = 1;
    }
  })

  for (const k in table) {
    if (table[k] % 2 !== 0) return parseInt(k);
  }
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
console.log(findOdd([0,1,0,1,0]))