let options = {
  speed: 12,
  size: 3,
  backgroundColor: 80,
},
  failState = false,
  frame = 0,
  directionQueue = [],
  apple,
  wn

reset()

function setup(){
  let canvas = createCanvas(wn.x,wn.y)
  canvas.parent('canvas')
  pixelDensity(1)
  textAlign(CENTER)
  textSize(50)
  noStroke()
}

function draw(){
  background(options.backgroundColor)
  frameRate(options.speed)
  update.direction()
  update.elements()
  if (collisions.body()){failState=true}

  if (!failState){
    snake.update()
    world.render()
    frame++
  }else{
    failScreen()
  }
}
