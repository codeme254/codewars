function convertToBinary(num) {
  // Convert the number to a binary string and pad with leading zeros to ensure it's 32 bits
  return num.toString(2).padStart(32, "0");
}

function toDecimal(binaryString) {
  // takes a string representation of a binary number and returns the decimal equivalent
  // let placeValue = 0;
  // let decimal = 0;
  // for (let i = binaryString.length - 1; i >= 0; i--) {
  //     decimal += Math.pow(2, placeValue) * binaryString[i]
  //     placeValue += 1;
  // }
  // return decimal;

  return parseInt(binaryString, 2);
}

function int32ToIp(int32) {
  const binary = convertToBinary(int32);
  let count = 0;
  let current8BitBinary = "";
  let ip = "";

  for (let i = 0; i < binary.length; i++) {
    current8BitBinary += binary[i];
    count += 1;
    if (count === 8) {
      ip += `${toDecimal(current8BitBinary)}.`;
      count = 0;
      current8BitBinary = "";
    }
  }
  // At this point, ip is something like: 0.0.0.0.
  // Get rid of the extra period
  return ip.slice(0, -1);
}

console.log(int32ToIp(2149583361));
console.log(int32ToIp(32));
console.log(int32ToIp(0));
