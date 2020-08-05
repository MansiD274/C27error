class Rope{
    constructor(body1,body2,offsetX,offsetY){
        var options = {
            bodyA : body1,
            bodyB : body2,
            length:150,
            
            pointB:{x:this.offsetX, y:this.offsetY}
        } 
        this.offsetX=offsetX
		this.offsetY=offsetY
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }

    display() {
    stroke("black");
    line(this.body.bodyA.position.x,this.body.bodyA.position.y,
    this.body.bodyB.position.x+this.offsetX,
    this.body.bodyB.position.y+this.offsetY);
    }
}