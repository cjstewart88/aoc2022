const path = require("path");
const fs = require("fs");
var data = fs.readFileSync(path.dirname(require.main.filename) + "/input.txt", "utf8").split(/\n/).filter((l) => l)

const map = []
let maxX = 0;
let maxY = 0;
data.forEach((instruction) => {
  instruction = instruction.split(' ')
  const direction = instruction[0]
  const moves = Number(instruction[1])
  if (direction === 'U' || direction === 'D') {
    if (moves > maxY) {
      maxY = moves
    }
  } else {
    if (moves > maxX) {
      maxX = moves
    }
  }
})

for (let i = 0; i <= maxY; i++) {
  map.push(Array.from({length: maxX+1}, () => '.'))
}

map[map.length-1][0] = 'H'

let hpos = [0, map.length-1]
let tpos = [0, map.length-1]
data = ['R 4', 'U 4']
data.forEach((instruction) => {
  instruction = instruction.split(' ')
  const direction = instruction[0]
  const moves = Number(instruction[1])

  switch (direction) {
    case 'U':
      for (let i = 0; i < moves; i++) {
        map[i][hpos[0]] ='#'

        if (i === moves-1) {
          map[i+1][hpos[0]] ='H'
          map[i][hpos[0]] ='Y'
        }
      }
      break;
    case 'D':
      break;
    case 'R':
      for (let i = 0; i < moves; i++) {
        map[hpos[1]][i] ='#'

        if (i === moves-1) {
          hpos = [hpos[1], i+1]
          map[hpos[1]][i+1] ='H'
          map[hpos[1]][i] ='Y'
        }
      }
      break;
    case 'L':
      break;
  }
})

console.log(map)
