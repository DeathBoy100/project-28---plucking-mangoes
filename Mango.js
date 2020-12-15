class mango{    
    constructor(x,y,r){
      var options = {
          isStatic: true,
          friction: 1,
          restitution: 0
      }
       this.body = Bodies.circle(x,y,r,options)
       
       this.radius = r;
       this.image = loadImage("mango.png");
       World.add(world,this.body)
    }    
    display(){
        
        //fill("yellow");
        var p = this.body.position;
        var a = this.body.angle;
        //translate(this.body.position.x, this.body.position.y);
        //rotate(a);
        imageMode(CENTER);
        image(this.image,p.x, p.y, this.radius*2, this.radius*2);
        
    }
 }