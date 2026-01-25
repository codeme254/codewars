// capital letter A has an ascii of 65
// capital letter Z has an ascii of 90
// small letter a has an ascii of 97
// small letter z has an ascii of 122
// T -> G, Y -> L, A -> N, E -> R

function rot13Character(character) {
  const asciiValue = character.charCodeAt(0);
  const UPPERCASE_A_ASCII = 65;
  const UPPERCASE_Z_ASCII = 90;
  const LOWERCASE_A_ASCII = 97;
  const LOWERCASE_Z_ASCII = 122;
  if (
    asciiValue < UPPERCASE_A_ASCII ||
    (asciiValue > UPPERCASE_Z_ASCII && asciiValue < LOWERCASE_A_ASCII) ||
    asciiValue > LOWERCASE_Z_ASCII
  ) {
    return character;
  }
  let letterZAscii, letterBeforeAAscii, rot13Code;
  // determine if we are operating on uppercase or lowercase
  if (asciiValue > 96) {
    // lowercase
    letterZAscii = 122;
    letterBeforeAAscii = 96;
  } else {
    // uppercase
    letterZAscii = 90;
    letterBeforeAAscii = 64;
  }

  rot13Code = asciiValue + 13;
  if (rot13Code > letterZAscii) {
    const overflow = rot13Code - letterZAscii;
    rot13Code = letterBeforeAAscii + overflow;
    return String.fromCharCode(rot13Code);
  }
  return String.fromCharCode(rot13Code);
}

function rot13(message) {
  let rot13String = "";
  for (let i = 0; i < message.length; i++) {
    rot13String += rot13Character(message[i]);
  }
  return rot13String;
}

console.log(rot13("Test"));
console.log(rot13("Grfg"));
console.log(rot13("Test123"));
