class tree{    
    constructor(x,y,w,h){
      var options = {
          isStatic: true
      }
       this.body = Bodies.rectangle(x,y,w,h,options)
       World.add(world,this.body)
       this.width = w 
       this.height = h
       
       this.image = loadImage("tree.png");
       
    }    
    display(){
        var p = this.body.position
        var a = this.body.angle
        push()
        translate(p.x,p.y)
        rotate(a)
        imageMode(CENTER);
        image(this.image,0, 0, this.width*25, this.height*50);
       
        pop()
    }
   }