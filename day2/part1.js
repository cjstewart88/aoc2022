const readline = require("readline");
const fs = require("fs");
const path = require("path");
const root = path.dirname(require.main.filename);

const readInterface = readline.createInterface({
  input: fs.createReadStream(root + "/input.txt"),
  output: process.stdout,
  console: false,
});

/*
  points for
    win: 6
    draw: 3
    lose: 0

  points for
    rock: 1
    paper: 2
    scissors: 3

  A & X: rock
  B & Y: paper
  C & Z: scissors
*/

let points = 0;

const symbolPointMap = {
  A: 1,
  X: 1,
  B: 2,
  Y: 2,
  C: 3,
  Z: 3,
};

readInterface
  .on("line", (line) => {
    const match = line.split(" ");
    const opp = match[0];
    const you = match[1];

    points += symbolPointMap[you];

    if (
      (opp === "A" && you === "Y") ||
      (opp === "B" && you === "Z") ||
      (opp === "C" && you === "X")
    ) {
      points += 6;
    } else if (
      (opp === "A" && you === "X") ||
      (opp === "B" && you === "Y") ||
      (opp === "C" && you === "Z")
    ) {
      points += 3;
    }
  })
  .on("close", () => {
    console.log(points);
    console.log(">> end of file");
  });
