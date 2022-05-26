class Ball {
    constructor(x, y) {
      var options={
        restitution:0, 
        density:2
      }
      this.r = 30;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("./assets/ball.png");
      World.add(world,this.body)
    }
    show(){
      var pos =  this.body.position
      // Body.setPosition(this.body, {x: mouseX, y:mouseY})
      push()
      imageMode(CENTER)
      image(this.image, pos.x, pos.y, 60, 60)
      pop()
    }

}    