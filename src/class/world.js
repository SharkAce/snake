class World{
  constructor(wn){
    this.cellSize = wn.y/wn.row;
    this.cells = makeGrid(
      wn.row,
      wn.col,
      "0"
      )
    }

  color(state){
    switch (state) {
      case "apple" :
        fill(230,10,10);
        break;
      case "snakeHead":
        fill(50);
        break;
      case "snakeBody":
        fill(150);
        break;
    }
  }

  render(){
    for (let i=0; i<wn.row; i++){
      for (let j=0; j<wn.col; j++){
        if (world.cells[i][j]!=0){
          this.color(world.cells[i][j])
          square(j*this.cellSize,i*world.cellSize,world.cellSize)
          if (document.getElementById("grid").checked){drawGrid()}
        }
      }
    }
  }

  newApple(){
    //removes the old apple
    if (apple != undefined){
      this.cells[apple.y][apple.x]=0
    }
    while(true){
      apple={
        x:getRandomInt(0,wn.col-1),
        y:getRandomInt(0,wn.row-1)
      }
      if (this.cells[apple.y][apple.x]==0){
        this.cells[apple.y][apple.x]="apple"
        break
      }
    }
  }
}
