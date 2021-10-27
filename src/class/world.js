

class World{
  constructor(wn){
    this.cellSize = wn.y/wn.row;
    this.cells = makeGrid(
      wn.row,
      wn.col,
      0
      )
    }

  render(){
    for (let i=0; i<wn.row; i++){
      for (let j=0; j<wn.col; j++){
        if (this.cells[i][j]!=0){
          options.outline?
            stroke(color(`black`)):
            stroke(color(options.backgroundColor))

          if (options.grid){
            drawGrid()
          }

          colorPalette(this.cells[i][j])
          let squareCurve = !(options.grid&&options.outline)?3:0
          square(
            j*this.cellSize,
            i*this.cellSize,
            this.cellSize,
            squareCurve
          )

          if (j==apple.x&&i==apple.y){

          }
        }
      }
    }
  }
}
