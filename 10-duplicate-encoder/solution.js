function duplicateEncode(word) {
  const lookup = {};
  let currentChar;
  let finalStr = "";
  for (let i = 0; i < word.length; i++) {
    currentChar = word[i].toLowerCase();
    if (lookup[currentChar]) {
      lookup[currentChar] += 1;
    } else {
      lookup[currentChar] = 1;
    }
  }

  for (let i = 0; i < word.length; i++) {
    currentChar = word[i].toLowerCase();
    finalStr += lookup[currentChar] == 1 ? "(" : ")";
  }
  return finalStr;
}
console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
