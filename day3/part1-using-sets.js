const path = require("path");
const fs = require("fs");
var data = fs.readFileSync(path.dirname(require.main.filename) + "/input.txt", "utf8").split(/\n/);

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

let points = 0;
for (let i = 0; i < data.length; i++) {
  const line = data[i];
  const median = line.length / 2;
  const bag = line.replace(/\n/, "");
  const c1 = new Set(bag.slice(0, median));
  const c2 = new Set(bag.slice(median, bag.length));

  c1.forEach((i) => {
    if (c2.has(i)) {
      points += alphabet.indexOf(i) + 1;
    }
  });
}

console.log(points);
