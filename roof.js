class roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
    
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(0,0);
     //translate(groundPos.x, groundPos.y);
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      //rect(0,0,this.w, this.h);
      pop();
    }
  };

 