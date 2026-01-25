function maskify(cc) {
  if (cc.length <= 4) return cc;
  let charactersToMask = cc.length - 4;
  let finalStr = "";
  for (let i = 0; i < cc.length; i++) {
    if (charactersToMask > 0) {
      finalStr += "#";
      charactersToMask -= 1;
    } else {
      finalStr += cc[i];
    }
  }
  return finalStr;
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
