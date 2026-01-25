function moveZeros(arr) {
  const others = [];
  const zeros = [];

  arr.forEach((element) => {
    if (element === 0) zeros.push(element);
    else others.push(element);
  });
  return others.concat(zeros);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
