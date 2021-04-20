class Paper{
    constructor(x,y,r){
       var options={
       'isStatic':false,
       'restitution':0.3,
       'friction':0.5,
       'density':1.2
    }
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body)
    this.radius=r

  }
   
   display(){
    var pos=this.body.position
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("green");
      circle(pos.x,pos.y,this.radius)
      pop();

   }

    


}