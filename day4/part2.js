const path = require("path");
const fs = require("fs");

var data = fs.readFileSync(path.dirname(require.main.filename) + "/input.txt", "utf8")
  .split(/\n/)
  .map((d) => {
    let ranges = d.split(',')
    ranges = ranges.map((r) => {
      const startEnd = r.split('-').map((n) => Number(n))
      a = Array.from({ length: startEnd[1]+1 - startEnd[0]}, (_, i) => startEnd[1])
      a = a.map((a, i) => a - i ).reverse()
      return a
    })
    return ranges
  })

count = 0

data.forEach((ranges) => {
  if (ranges[0].some((n) => ranges[1].includes(n))) {
    count++
  }
})

console.log(count)
