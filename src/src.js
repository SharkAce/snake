let update = {
  elements:()=>{
    options.grid = document.getElementById("grid").checked||undefined,
    options.outline = document.getElementById("outline").checked||undefined
  },
}



function concatCells(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i]);
  }
  return newArr;
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
  // direction="undefined";
  // directionQueue = [];

  options.nn.generation++
  newApple();
}


function drawGrid(){
  stroke(1)
  for (let i=0; i<wn.x; i+=globalCellSize){
    line(i,0,i,wn.y)
    line(0,i,wn.x,i)
  }
}



function colorPalette(state){
  switch (state) {
    case 1:
      fill(230,10,10);
      break;
    case -1:
      fill(50);
      break;
    case -0.9:
      fill(70);
      break;
    default:
      fill(options.backgroundColor)
  }
}

function makeDann(){
  let nn = new Dann(wn.row*wn.col, 5);
  nn.addHiddenLayer(16, 'tanH');
  nn.outputActivation('sigmoid');
  nn.makeWeights();
  return nn;
}

function newApple(){
  //removes the old ones
  if (apple!=undefined){
    for (let data of snakes){
    data.snake.world.cells[apple.y][apple.x]=0
    }
  }

  apple={
    x:getRandomInt(0,wn.col-1),
    y:getRandomInt(0,wn.row-1)
  }
}
