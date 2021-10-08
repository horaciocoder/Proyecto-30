class Block{
    constructor(x, y, width, height) {
        var options = {
             density: 1,
             friction: 1,
             restitution: 0.7    
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        this.image = loadImage("block.png");
        World.add(world, this.body);
      }
      display(){
        push();
        if (this.body.speed >= 3) {
          World.remove(world, this.body);
          this.visibility -= 5;
          tint(255, this.visibility);
          image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        }
        else {
          var angle = this.body.angle;
          var pos= this.body.position;
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0,0,this.width, this.height);
          pop();
        }
      }
}
