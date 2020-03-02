class String {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:150
        }
        this.pointB = pointB;
        this.string = Constraint.create(options);
        World.add(world,this.string);
    }
    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        stroke("black");
        strokeWeight(7);
        line(pointB.x,pointB.y,pointA.x,pointA.y);
    }
}
