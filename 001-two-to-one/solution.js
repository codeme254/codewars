"use strict";

// function longest(s1, s2) {
//     return [...new Set(s1 + s2)].sort().join("")
// }

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("")

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));