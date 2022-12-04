const path = require("path");
const fs = require("fs");
var data = fs.readFileSync(path.dirname(require.main.filename) + "/input.txt", "utf8").split(/\n/)

data.forEach((line, i) => {
  return data[i] = line.replace('\r', '')
})
data = data.filter(n => n)

count = 0

data.forEach((pair) => {
  const ranges = pair.split(',')
  const rangeOne = ranges[0].split('-').map((n) => Number(n))
  const rangeTwo = ranges[1].split('-').map((n) => Number(n))

  if (rangeOne[0] >= rangeTwo[0] && rangeOne[1] <= rangeTwo[1] ||
    rangeTwo[0] >= rangeOne[0] && rangeTwo[1] <= rangeOne[1]) {
    count += 1
  }
})

console.log(count)
