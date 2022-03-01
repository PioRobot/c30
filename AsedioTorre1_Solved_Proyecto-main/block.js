class Block{
  constructor(x, y, width, height) {
      var options = {       
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("astronauta pixels uno.jpeg")
      this.visibility=225;
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      if (this.body.seed<3) {
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
      } else{
        World.remove(world,this.body);
        push();
      this.visibility=this.visibility-5;
        tint(255,this.visibility);
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
           pop();

      }
    }
}