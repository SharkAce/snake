class World{
  constructor(wn, options){
    this.cellSize = wn.y/options.row;
    this.wn = wn;
    this.options = options;
    this.cells = makeGrid(
      options.row,
      options.col,
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
    for (let i=0; i<this.options.row; i++){
      for (let j=0; j<this.options.col; j++){
        if (world.cells[i][j]!=0){
          this.color(world.cells[i][j])
          square(j*this.cellSize,i*world.cellSize,world.cellSize)
        }
      }
    }
  }
  newApple(){
    //removes the old one
    for (let i=0; i<this.options.row; i++){
      for (let j=0; j<this.options.col; j++){
        if (this.cells[i][j]=="apple"){
          this.cells[i][j]==0
        }
      }
    }
    while(true){
      let i=getRandomInt(0,options.row-1)
      let j=getRandomInt(0,options.col-1)
      if (this.cells[i][j]==0){
        this.cells[i][j]="apple"
        break
      }
    }
  }
}
