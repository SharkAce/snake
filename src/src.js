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
    options.size = parseInt(document.getElementById("size").value || 3,10)
    options.speed = parseInt(document.getElementById("speed").value || 12,10)
  }
  wn = {
    x: 1120,
    y: 700,
    row: 20*options.size*0.25,
    col: 32*options.size*0.25
  }
  apple=undefined
  direction = undefined
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
  if (key == "w" && (direction!="down"||snake.size==0)){direction="up"}
  else if (key == "s" && (direction!="up"||snake.size==0)){direction="down"}
  else if (key == "a" && (direction!="right"||snake.size==0)){direction="left"}
  else if (key == "d" && (direction!="left"||snake.size==0)){direction="right"}
  else if (key == "Enter"){reset()}
}

function drawGrid(){
  for (let i=0; i<wn.x; i+=world.cellSize){
    line(i,0,i,wn.y)
    line(0,i,wn.x,i)
  }
}
