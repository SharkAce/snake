let options = {
  speed: 12,
  size: 3
}

let
  failState = false,
  frame = 0,
  direction,
  perFrameDirection,
  apple,
  wn

reset()

function setup(){
  let canvas = createCanvas(wn.x,wn.y)
  canvas.parent('canvas')
  textAlign(CENTER)
  textSize(50)
}

function draw(){
  background(80)
  frameRate(options.speed)

  updateFailState()

  if (!failState){
    perFrameDirection=direction
    snake.update()
    world.render()
    frame++
  }else{
    fill(50)
    text(`Score: ${snake.size}`,wn.x/2,wn.y/2)
  }
}
