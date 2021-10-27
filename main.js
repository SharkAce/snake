let options = {
  speed: 4,
  size: 2,
  backgroundColor: 80,
  nn: {
    population: 30,
    generation: 0
  },
}
let wn = {
  x: 1120,
  y: 700,
  row: 20*options.size*0.25,
  col: 32*options.size*0.25
}

let snakes = [];

for (let i = 0; i < options.nn.population; i++) {
  snakes.push({
    snake: new Snake(),
    id: i,
    score: 0
  });
}

let
  frame = 0,
  directionQueue = [],
  apple
  globalCellSize=wn.y/wn.row


reset();


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
       if (snakes[i].snake.state !== 'dead') {

        snakes[i].snake.think();
        snakes[i].snake.changeDirection();
        if (snakes[i].snake.bodyCollision()){
          snakes[i].snake.state = 'dead';
       }
     }
    snakes[i].snake.update();
    snakes[i].snake.world.render();
    frame++
  }
}
