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
const groups = [[]];

readInterface
  .on("line", (line) => {
    if (groups[groups.length - 1].length < 3) {
      groups[groups.length - 1].push(line.split(""));
    } else {
      groups.push([line.split("")]);
    }
  })
  .on("close", () => {
    groups.forEach((group) => {
      const duplicateItem = group[0].filter(
        (value) => group[1].includes(value) && group[2].includes(value)
      );
      points += pointsPerLetter[duplicateItem.pop()];
    });
    console.log(points);
    console.log(">> end of file");
  });
