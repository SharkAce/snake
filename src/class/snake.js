class Snake{
  constructor(world){
    this.x=Math.floor(wn.col/2);
    this.y=Math.floor(wn.row/2);
    this.size=0;
    this.body=[];
    this.brain=makeDann();
    this.directionQueue = [];
    this.direction = undefined;
    this.state = 'alive';
    this.world = new World(wn)
  }

  moveHead(direction){
    let newPos={x:this.x,y:this.y}
    switch(direction){
      case "up":
        newPos.y-=1;
        break;
      case "down":
        newPos.y+=1;
        break;
      case "left":
        newPos.x-=1;
        break;
      case "right":
        newPos.x+=1;
        break;
    }
    if (this.boundary(newPos)){
     this.state = 'dead';
    }else{
      this.x=newPos.x;
      this.y=newPos.y;
    }
  }
  boundary (newPos) {
    let bool = true
    if (this.world.cells[newPos.y]!=undefined){
      if (this.world.cells[newPos.y][newPos.x]!=undefined){
        bool = false
      }
    }
    return bool
  }
  think() {
    let output = this.brain.feed(concatCells(this.world.cells));
    // console.log(output)

    let biggestValue = output.indexOf(Math.max.apply(1, output));

    switch (biggestValue) {
      case 0:
        break;
      case 1:
        this.directionQueue.push('up');
        break;
      case 2:
        this.directionQueue.push('down');
        break;
      case 3:
        this.directionQueue.push('right');
        break;
      case 4:
        this.directionQueue.push('left');
        break;

    }

    this.directionQueue.push();

  }
  bodyCollision(){
    let bool=false
    for (let data of this.body){
      if (
        data.x == this.x &&
        data.y == this.y
      ){bool=true}
    }
    return bool
  }
  changeDirection() {
      if (this.directionQueue[0]!=undefined){
        if (!(
          (this.direction=="up"&&this.directionQueue[0]=="down")||
          (this.direction=="down"&&this.directionQueue[0]=="up")||
          (this.direction=="left"&&this.directionQueue[0]=="right")||
          (this.direction=="right"&&this.directionQueue[0]=="left")
        )||this.size==0){
          this.direction = this.directionQueue[0];
        }
        this.directionQueue.splice(0,1)
      }
    }
  update(){
    if(this.state=="dead"){
      this.world.cells[this.y][this.x]=0;
    }else{
      this.world.cells[apple.y][apple.x]=1
      this.world.cells[this.y][this.x]=-0.9;
      this.body.push({
        x : this.x,
        y : this.y,
        spawnFrame : frame
      });

      //removes outdated body cells
      if (this.body[0].spawnFrame<=frame-this.size){
        this.world.cells[this.body[0].y][this.body[0].x]=0;
        this.body.splice(this.body.indexOf(this.body[0]),1);
      }

      this.moveHead(this.direction)

      if (this.world.cells[this.y][this.x]==1){
        newApple();
        this.size++;
      }
      this.world.cells[this.y][this.x]=-1;
    }
  }
}
