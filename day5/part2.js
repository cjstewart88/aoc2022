const path = require("path");
const fs = require("fs");
var data = fs.readFileSync(path.dirname(require.main.filename) + "/input.txt", "utf8").split(/\n/).filter((l) => l)

const stacks = [
  ['T', 'D', 'W', 'Z', 'V', 'P'],
  ['L', 'S', 'W', 'V', 'F', 'J', 'D'],
  ['Z', 'M', 'L', 'S', 'V', 'T', 'B', 'H'],
  ['R', 'S', 'J'],
  ['C', 'Z', 'B', 'G', 'F', 'M', 'L', 'W'],
  ['Q','W','V','H','Z','R','G','B'],
  ['V','J','P','C','B','D','N'],
  ['P','T','B','Q'],
  ['H','G','Z','R','C']
]

data.forEach((line, i) => {
  const instructions = line.replace(/\r/,'').split(',').map((n) => parseInt(n))
  const removedItems = stacks[instructions[1]-1].splice(instructions[0] * -1)
  stacks[instructions[2]-1] = stacks[instructions[2]-1].concat(removedItems)
})

console.log(stacks.map((s) => s[s.length-1]).join(''))
