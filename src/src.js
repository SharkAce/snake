let update = {
  elements:()=>{
    options.grid = document.getElementById("grid").checked||undefined,
    options.outline = document.getElementById("outline").checked||undefined
  },
  direction:()=>{
    if (directionQueue[0]!=undefined){
      if (!(
        (direction=="up"&&directionQueue[0]=="down")||
        (direction=="down"&&directionQueue[0]=="up")||
        (direction=="left"&&directionQueue[0]=="right")||
        (direction=="right"&&directionQueue[0]=="left")
      )||snake.size==0){
        direction = directionQueue[0]
      }
      directionQueue.splice(0,1)
    }
  },
}
function keyPressed(){
  if (key == "w" || key == "k" || keyCode == UP_ARROW){directionQueue.push("up")}
  else if (key == "s" || key == "j" || keyCode == DOWN_ARROW){directionQueue.push("down")}
  else if (key == "a" || key == "h" || keyCode == LEFT_ARROW){directionQueue.push("left")}
  else if (key == "d" || key == "l" || keyCode == RIGHT_ARROW){directionQueue.push("right")}
  else if (key == "Enter"){reset()}
}

let collisions = {
  boundary:(newPos,snake)=>{
    if (world.cells[newPos.y]!=undefined){
      if (world.cells[newPos.y][newPos.x]!=undefined){
        return false
      }
    }
    return true
  },
  body:()=>{
    let bool=false
    for (let data of snake.body){
      if (
        data.x == snake.x &&
        data.y == snake.y
      ){bool=true}
    }
    return bool
  }
}

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
    x: 1440,
    y: 900,
    row: 20*options.size*0.25,
    col: 32*options.size*0.25
  }
  apple=undefined
  direction=undefined
  directionQueue = []
  failState = false
  world = new World(wn)
  snake = new Snake()
  world.newApple()
}


function drawGrid(){
  stroke(1)
  for (let i=0; i<wn.x; i+=world.cellSize){
    line(i,0,i,wn.y)
    line(0,i,wn.x,i)
  }
}

function failScreen(){
  fill(50)
  noStroke()
  text(`Score: ${snake.size}`,wn.x/2,wn.y/2)
}

function colorPalette(state){
  switch (state) {
    case "apple" :
      fill(230,10,10);
      break;
    case "snakeHead":
      fill(50);
      break;
    case "snakeBody":
      fill(70);
      break;
    default:
      fill(backgroundColor)
  }
}
