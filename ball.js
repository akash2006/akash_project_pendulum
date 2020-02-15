class Ball{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);
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