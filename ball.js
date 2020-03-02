class Ball{
    constructor(x,y,radius){
        var options ={
            'frictionAir':0.004
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x,pos.y,this.body.radius);
    }
}