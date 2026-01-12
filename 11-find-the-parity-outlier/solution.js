function findOutlier(integers) {
  let oddCount = 0,
    evenCount = 0;
  let currentOddNumber, currentEvenNumber;
  integers.forEach((integer) => {
    if (integer % 2 === 0) {
      evenCount += 1;
      currentEvenNumber = integer;
    } else {
      oddCount += 1;
      currentOddNumber = integer;
    }
  });
  if (oddCount === 1) return currentOddNumber;
  return currentEvenNumber;
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
