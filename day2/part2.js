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

  A: rock
  B: paper
  C: scissors

  X: lose
  Y: draw
  Z: win
*/

let points = 0;

const symbolPointMap = {
  A: 1,
  B: 2,
  C: 3,
};

const instructionMap = {
  X: "lose",
  Y: "draw",
  Z: "win",
};

const toWinMap = {
  A: "B",
  B: "C",
  C: "A",
};

const toLoseMap = {
  A: "C",
  B: "A",
  C: "B",
};

readInterface
  .on("line", (line) => {
    const match = line.split(" ");

    const instruction = instructionMap[match[1]];
    if (instruction === "lose") {
      match[1] = toLoseMap[match[0]];
    } else if (instruction === "draw") {
      match[1] = match[0];
    } else if (instruction === "win") {
      match[1] = toWinMap[match[0]];
    }

    const opp = match[0];
    const you = match[1];

    points += symbolPointMap[match[1]];

    if (
      (opp === "A" && you === "B") ||
      (opp === "B" && you === "C") ||
      (opp === "C" && you === "A")
    ) {
      points += 6;
    } else if (opp === you || opp === you || opp === you) {
      points += 3;
    }
  })
  .on("close", () => {
    console.log(points);
    console.log(">> end of file");
  });
