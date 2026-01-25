function arrayDiff(a, b) {
  const result = [];
  a.forEach((element) => b.includes(element) || result.push(element));
  return result;
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2], [1]));
