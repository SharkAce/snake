function makeGrid(r,c,v){
  let grid = []
  for (let i=0; i<r; i++){
    grid.push([])
    for (let j=0; j<c; j++){
      grid[i].push(v)
    }
  }
  return grid
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reset(){
  direction = undefined
  failState = false
  world = new World(wn,options)
  snake = new Snake()
  world.newApple()
}

//this is only one of the two ways failState can be triggered
//see funtion moveHead in "src/class/snake.js" for the other way
function updateFailState(){
  let bool=false
  for (let data of snake.body){
      if (
        data.x == snake.x &&
        data.y == snake.y
      ){bool=true}
  }
  if (bool){failState=true}
}
