function Bird() //kinda like a mother fucking constructor
{

	this.x=width/2;
	this.y = height/2;

	this.gravity=0.6;
	this.velocity = 0;

	this.lift=-11;


	this.show=function()
	{
		fill(255);
		ellipse(this.x,this.y,26,26);
	}

	this.up=function()
	{
		this.velocity+=this.lift;
	}

	this.update=function()
	{

		this.velocity+=this.gravity;
	//air resistance
	    this.velocity*=0.9;
		this.y+=this.velocity;


	if (this.y>height){
		this.y=height;
		this.velocity=0;
	}

	if (this.y<0){
		this.y=0;
		this.velocity=0;
	}

	}



}