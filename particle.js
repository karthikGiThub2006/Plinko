class Particle
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        this.color = color(random(0,255),random(0,255),random(0,255));
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			var angle = this.body.angle;		

			push()
			translate(paperpos.x, paperpos.y);
            rotate(angle);
            rectMode(CENTER)
			noStroke();
			fill(this.color);
			ellipseMode(RADIUS);
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

};