function scramble(str1, str2) {
  const charsCount = {};
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in charsCount) {
      charsCount[str1[i]] += 1;
    } else {
      charsCount[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!(str2[i] in charsCount)) return false;
    if (str2[i] in charsCount) {
      if (charsCount[str2[i]] == 0) return false;
      charsCount[str2[i]] -= 1;
    }
  }
  return true;
}

console.log(scramble("wworrlllddr", "world"));
console.log(scramble("katas", "steak"));
