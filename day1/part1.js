const readline = require("readline");
const fs = require("fs");
const path = require("path");
const root = path.dirname(require.main.filename);

const readInterface = readline.createInterface({
  input: fs.createReadStream(root + "/input.txt"),
  output: process.stdout,
  console: false,
});

const inventory = [];
let currentCount = 0;

readInterface
  .on("line", (line) => {
    if (line === "") {
      inventory.push(currentCount);
      currentCount = 0;
    } else {
      currentCount += Number(line);
    }
  })
  .on("close", () => {
    inventory.push(currentCount);
    console.log(Math.max(...inventory));
    console.log(">> end of file");
  });
