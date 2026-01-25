function getMiddle(s) {
  let left = 0;
  let right = s.length - 1;

  while(left <= right) {
    if (left == right) return s[left]
    left += 1;
    right -= 1;
  }
  return `${s[right]}${s[left]}`
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("middle"))
console.log(getMiddle("A"))