/*class rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA:body1,
			bodyB:body2,
			stiffness : 1,
			angularStiffness : 1,
            pointB:{x:this.offsetX , y:this.offsetY}
            
        }
        this.rope = Constraint.create(options);
       
        World.add(world, this.rope);
    }

    display(){

        var pointA = this.rope.bodyA.position;                          
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);
		stroke("white");
       
        var Anchor1X=pointA.x
		var Anchor1Y=pointA.y

		var Anchor2X=pointB.x+this.offsetX
		var Anchor2Y=pointB.y+this.offsetY

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        
	}}*/
	
	class Sling{
		constructor(bodyA, pointB){
			var options={
				bodyA: bodyA,
				pointB: pointB,
				stiffness: 1,
				angularStiffness: 1,
				length: 220
			};
			this.pointB = pointB;
			this.pointX = bodyA.x;
			this.pointY = bodyA.y - 250;
			this.sling = Constraint.create(options);
			World.add(world, this.sling);
		}
		display(){
			if(this.sling.bodyA) {
				var pointA = this.sling.bodyA.position;
				var pointB = this.pointB;
				push();
				strokeWeight(3.5);
				stroke("#fff");
				line(pointB.x, pointB.y, pointA.x, pointA.y);
				pop();
			}
		}
	}