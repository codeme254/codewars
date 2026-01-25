// This is a chatgpt solution
function chooseBestSum(t, k, ls) {
  let bestSum = -1;

  function backtrack(start, count, sum) {
    // If we've chosen k towns
    if (count === k) {
      if (sum <= t && sum > bestSum) {
        bestSum = sum;
      }
      return;
    }

    // Stop early if sum already exceeds limit
    if (sum > t) return;

    for (let i = start; i < ls.length; i++) {
      backtrack(i + 1, count + 1, sum + ls[i]);
    }
  }

  backtrack(0, 0, 0);

  return bestSum === -1 ? null : bestSum;
}

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));
console.log(chooseBestSum(163, 3, [50]));
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));
