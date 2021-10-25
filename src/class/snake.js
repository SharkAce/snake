class Snake{
  constructor(){
    this.x=Math.floor(options.col/2);
    this.y=Math.floor(options.row/2);
    this.size=0;
    this.body=[];
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
    if(
      newPos.x>=0 &&
      newPos.y>=0 &&
      newPos.x<options.col &&
      newPos.y<options.row
    ){
      this.x=newPos.x;
      this.y=newPos.y;
    }else{
      failState=true;
    }
  }
  update(){
    world.cells[this.y][this.x]="snakeBody";

    this.body.push({
      x : this.x,
      y : this.y,
      spawnFrame : frame
    });

    if (this.body[0].spawnFrame<=frame-this.size){
      world.cells[this.body[0].y][this.body[0].x]=0;
      this.body.splice(this.body.indexOf(this.body[0]),1);
    }

    this.moveHead(direction)
    if (world.cells[this.y][this.x]=="apple"){
      world.newApple();
      this.size++;
    }
    world.cells[this.y][this.x]="snakeHead";
  }
}
