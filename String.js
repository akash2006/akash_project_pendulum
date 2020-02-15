class String {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:150
        }
        
        this.string = Constraint.create(options);
        World.add(world,this.string);
    }
    display(){
        var pointA = this.string.bodyA.position;
        var pointB = pointB;
        
        strokeWeight(7);
        line(pointB.x,pointB.y,pointA.x,pointA.y);
    }
}