const path = require("path");
const fs = require("fs");
var data = fs.readFileSync(path.dirname(require.main.filename) + "/input.txt", "utf8").split(/\n/).filter((l) => l)

data = data.map((d) => {
  d = d.split('').map((c) => Number(c))
  return d
})

let count = 0

// count all the trees on the edges, no dupes though
count += data[0].length * 2 - 2
count += data.length * 2 - 2

// test inner trees
data.forEach((row, i) => {
  if (i === 0 || i === data.length-1) {
    return
  }

  row.forEach((t, i2) => {
    if (i2 === 0 || i2 === data.length-1) {
      return
    }

    let treeVisbleFromTop = true
    for (let topCheckIndex = 0; topCheckIndex < i; topCheckIndex += 1) {
      if (t <= data[topCheckIndex][i2]) {
        treeVisbleFromTop = false
      }
    }

    let treeVisbleFromLeft = true
    for (let leftCheckIndex = 0; leftCheckIndex < i2; leftCheckIndex += 1) {
      if (t <= data[i][leftCheckIndex]) {
        treeVisbleFromLeft = false
      }
    }

    let treeVisbleFromRight = true
    for (let rightCheckIndex = i2+1; rightCheckIndex < row.length; rightCheckIndex += 1) {
      if (t <= data[i][rightCheckIndex]) {
        treeVisbleFromRight = false
      }
    }

    let treeVisbleFromBottom = true
    for (let bottomCheckIndex = i+1; bottomCheckIndex < data.length; bottomCheckIndex += 1) {
      if (t <= data[bottomCheckIndex][i2]) {
        treeVisbleFromBottom = false
      }
    }

    if (treeVisbleFromTop || treeVisbleFromLeft || treeVisbleFromRight || treeVisbleFromBottom) {
      count += 1
    }
  })
})

console.log(count)
