class Ball {

constructor(x,y,radius){


var options={
isStatic:false,
restituation:0.3,
friction:0.5,
 density:1.2
}
this.body=Bodies.circle(x,y,radius,options);
this.image=loadImage("paper.png");
World.add(world,this.body)
this.radius=radius

}
 display(){

imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
}

}
