function openOrSenior(data) {
  const output = data.map((item) => {
    let age = item[0];
    let handicap = item[1];
    if (age >= 55 && handicap > 7) return "Senior";
    return "Open";
  });
  return output;
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ]),
);
