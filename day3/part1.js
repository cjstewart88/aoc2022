const readline = require("readline");
const fs = require("fs");
const path = require("path");
const root = path.dirname(require.main.filename);

const readInterface = readline.createInterface({
  input: fs.createReadStream(root + "/input.txt"),
  output: process.stdout,
  console: false,
});

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const pointsPerLetter = {};
alphabet.forEach((a, index) => {
  pointsPerLetter[a.toLocaleLowerCase()] = index + 1;
  pointsPerLetter[a] = index + 1 + 26;
});

let points = 0;
readInterface
  .on("line", (line) => {
    const median = line.length / 2;
    const bag = line.split("");
    const c1 = bag.slice(0, median);
    const c2 = bag.slice(median, bag.length);
    const duplicateItem = c1.filter((value) => c2.includes(value));
    points += pointsPerLetter[duplicateItem.pop()];
  })
  .on("close", () => {
    console.log(points);
    console.log(">> end of file");
  });
