class Snake{
  constructor(){
    this.x=Math.floor(wn.col/2);
    this.y=Math.floor(wn.row/2);
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

    //checks if newPos is out of boundry
    if (world.cells[newPos.y]!=undefined){
      if (world.cells[newPos.y][newPos.x]!=undefined){
          this.x=newPos.x;
          this.y=newPos.y;
      }else{failState=true}
    }else{failState=true}
  }

  update(){
    world.cells[this.y][this.x]="snakeBody";
    this.body.push({
      x : this.x,
      y : this.y,
      spawnFrame : frame
    });

    //removes outdated body cells
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
