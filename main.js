let options = {
  speed: 12,
  size: 3
}

let wn = {
  x: 1120,
  y: 700,
  row: 20*options.size*0.25,
  col: 32*options.size*0.25
}

let failState = false
let frame = 0
let direction
let apple
reset()

function setup(){
  let canvas = createCanvas(wn.x,wn.y)
  canvas.parent('canvas')
}

function draw(){
  background(80)
  frameRate(options.speed)

  updateFailState()

  if (!failState){
    snake.update()
    world.render()
    frame++
  }
}
