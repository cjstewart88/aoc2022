const path = require("path");
const fs = require("fs");
var data = fs.readFileSync(path.dirname(require.main.filename) + "/input.txt", "utf8").split(/\n/).filter((l) => l)

data = data.map((d) => {
  d = d.split('').map((c) => Number(c))
  return d
})

let topScenicScore = 0

// test inner trees
data.forEach((row, i) => {
  if (i === 0 || i === data.length-1) {
    return
  }

  row.forEach((t, i2) => {
    if (i2 === 0 || i2 === data.length-1) {
      return
    }

    let topCounter = 0
    for (let topCheckIndex = i-1; topCheckIndex >= 0; topCheckIndex -= 1) {
      topCounter += 1
      if (t <= data[topCheckIndex][i2]) {
        break;
      }
    }

    let leftCounter = 0
    for (let leftCheckIndex = i2-1; leftCheckIndex >= 0; leftCheckIndex -= 1) {
      leftCounter += 1
      if (t <= data[i][leftCheckIndex]) {
        break;
      }
    }

    let rightCounter = 0
    for (let rightCheckIndex = i2+1; rightCheckIndex <= row.length-1; rightCheckIndex += 1) {
      rightCounter += 1
      if (t <= data[i][rightCheckIndex]) {
        break;
      }
    }

    let bottomCounter = 0
    for (let bottomCheckIndex = i+1; bottomCheckIndex <= data.length-1; bottomCheckIndex += 1) {
      bottomCounter += 1
      if (t <= data[bottomCheckIndex][i2]) {
        break;
      }
    }

    let score = topCounter * leftCounter * rightCounter * bottomCounter
    if (score > topScenicScore) {
      topScenicScore = score
    }
  })
})

console.log(topScenicScore)
