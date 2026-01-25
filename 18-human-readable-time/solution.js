function humanReadable(seconds) {
  let hours, minutes;
  hours = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, 0);

  seconds = seconds - hours * 3600;

  minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, 0);

  seconds = (seconds - minutes * 60).toString().padStart(2, 0);

  return `${hours}:${minutes}:${seconds}`;
}

console.log(humanReadable(45296));
console.log(humanReadable(60));
console.log(humanReadable(359999));
console.log(humanReadable(90));
console.log(humanReadable(86400));
console.log(humanReadable(0));
