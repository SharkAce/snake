let options = {
  speed: 20,
  size: 3,
  backgroundColor: 80,
  nn: {
    population: 80,
    generation: 0
  },
}
let wn = {
  x: 1120,
  y: 700,
  row: 20*options.size*0.25,
  col: 32*options.size*0.25
}


let
  frame = 0,
  appleFrame = 0,
  directionQueue = [],
  snakes,
  apple,
  globalCellSize=wn.y/wn.row

newPopulation();
newGen();


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
  // update.direction()
  update.elements()

    for (let i = 0; i < snakes.length; i++) {
       if (snakes[i].world.snake.state !== 'dead') {

        snakes[i].world.snake.think();
        snakes[i].world.snake.changeDirection();
        if (snakes[i].world.snake.bodyCollision()){
          snakes[i].world.snake.state = 'dead';
       }
     }
    snakes[i].world.snake.update();
    snakes[i].world.render();
  }
  frame++
  appleFrame++
  if (appleFrame>(wn.row+wn.col)*2){newGen()}
}
