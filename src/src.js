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

let getRandomInt =
(min,max)=>Math.floor(Math.random()*(max-min+1))+min

function reset(){
  if (frame!=0){
    options.size = parseInt(
      document.getElementById("size").value||options.size,10
    )
    options.speed = parseInt(
      document.getElementById("speed").value||options.speed,10
    )
  }
  wn = {
    x: 1120,
    y: 700,
    row: 20*options.size*0.25,
    col: 32*options.size*0.25
  }
  apple=undefined
  direction="undefined"
  directionQueue = []
  failState = false
  world = new World(wn)
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

function keyPressed(){
  if (key == "w"){directionQueue.push("up")}
  else if (key == "s"){directionQueue.push("down")}
  else if (key == "a"){directionQueue.push("left")}
  else if (key == "d"){directionQueue.push("right")}
  else if (key == "Enter"){reset()}
}

function drawGrid(){
  for (let i=0; i<wn.x; i+=world.cellSize){
    line(i,0,i,wn.y)
    line(0,i,wn.x,i)
  }
}

function updateDirection(){
  if (directionQueue[0]!=undefined){
    if (!(
      (direction=="up"&&directionQueue=="down")||
      (direction=="down"&&directionQueue=="up")||
      (direction=="left"&&directionQueue=="right")||
      (direction=="right"&&directionQueue=="left")
    )||snake.size==0){
      direction = directionQueue[0]
    }
    directionQueue.splice(0,1)
  }
}
