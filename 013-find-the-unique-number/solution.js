function findUniq(arr) {
  const lookup = {};
  let number;
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];
    if (lookup[number]) {
      lookup[number] += 1;
    } else {
      lookup[number] = 1;
    }
  }

  for (const num in lookup) {
    if (lookup[num] == 1) return num * 1;
  }
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([1, 0, 0, 0, 0]));
