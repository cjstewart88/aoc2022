const path = require("path");
const fs = require("fs");
var data = fs.readFileSync(path.dirname(require.main.filename) + "/input.txt", "utf8").split(/\n/).filter((l) => l)

let fileSystem = { size: 0 }

let refHistory = []
let currentRef = {}
const parseCmd = (cmd, input) => {
  if (cmd === 'ls') return

  if (cmd === 'cd') {
    if (input === '/') {
      currentRef = fileSystem
      refHistory.push(currentRef)
    } else if (input === '..') {
      refHistory.pop()
      currentRef = refHistory[refHistory.length-1]
    } else {
      refHistory.push(currentRef)
      currentRef = currentRef[input]
    }
  }
}

const parseOutput = (parts) => {
  if (parts[0] === 'dir') {
    currentRef[parts[1]] = { size: 0 }
  } else {
    currentRef.size += Number(parts[0])
    currentRef[parts[1]] = Number(parts[0])
  }
}

data.forEach((line, i) => {
  const parts = line.split(' ')
  if (parts[0] === '$') {
    parseCmd(parts[1], parts[2])
  } else {
    parseOutput(parts)
  }
})

fileSystem = { '/': fileSystem }

// giving up can't figure out traversal of fileSystem

// console.log(fileSystem)
console.log(fileSystem)
// 104756 wrong
// 278254 wrong
