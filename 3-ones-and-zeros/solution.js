const binaryArrayToNumber = (arr) => {
  let result = 0;
  let currentPower = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    result += Math.pow(2, currentPower) * arr[i];
    currentPower += 1;
  }
  return result;
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // 5
