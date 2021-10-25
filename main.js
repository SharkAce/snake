let speed = 10
let size = 4

let failState = false
let start = false
let direction
let frame = 0

let wn = {
  x: 1120,
  y: 700
}

let options = {
  row: 20*size*0.25,
  col: 32*size*0.25
}

reset()

function setup(){
  let canvas = createCanvas(wn.x,wn.y)
  canvas.parent('canvas')
}

function draw(){
  background(80)
  frameRate(speed)

  updateFailState()

  if (!failState){
    snake.update()
    world.render()
    frame++
    for (let i=0; i<wn.x; i+=world.cellSize){
      line(i,0,i,wn.y)
      line(0,i,wn.x,i)
    }
  }
}

function keyPressed(){
  if (key == "w" && (direction!="down"||snake.size==0)){direction="up"}
  else if (key == "s" && (direction!="up"||snake.size==0)){direction="down"}
  else if (key == "a" && (direction!="right"||snake.size==0)){direction="left"}
  else if (key == "d" && (direction!="left"||snake.size==0)){direction="right"}
}
