class Bottle
{
  constructor(x, y, w,h) 
  {
    let options = {
        'restitution':0,
        'friction':5.0,
        'density':1.0
      };
    
    this.body = Bodies.rectangle(x, y, w, h,options);
    this.w = w;
    this.h = h;
    this.image= loadImage("./assets/bottle.png")
    this.broken_image= loadImage("./assets/brokenbottle.png")
    //this.bottleSound = loadSound("./assets/glassBreaking.mp3")
    this.visibility =255
    World.add(world, this.body);
   
  }
 
  show() {
    if(this.body.speed<3){
    push();
    imageMode(CENTER);
    //console.log(this.body.speed)
    image(this.image,this.body.position.x,this.body.position.y, this.w, this.h);
    pop();
    }
    else{
      World.remove(world, this.body)
      push()
      this.visibility= this.visibility-5
      tint(255,this.visibility )
      image(this.broken_image, this.body.position.x,this.body.position.y,this.w,this.h)
      //this.bottleSound.play()
      pop()
    }
  }

}