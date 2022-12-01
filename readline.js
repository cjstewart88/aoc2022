const readline = require("readline");
const fs = require("fs");
const path = require("path");
const root = path.dirname(require.main.filename);

const readInterface = readline.createInterface({
  input: fs.createReadStream(root + "/input.txt"),
  output: process.stdout,
  console: false,
});

readInterface
  .on("line", (line) => {
    console.log(line);
  })
  .on("close", () => {
    console.log(">> end of file");
  });
