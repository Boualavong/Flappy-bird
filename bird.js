function Bird() //kinda like a mother fucking constructor
{
//Starting position, since i'm nice, i won't be bitching here to make you loose
	this.x=width/2;
	this.y = height/2;
//to make the bird to fall, it's used in update
	this.gravity=0.6;
	this.velocity = 0;
//to make it jump
	this.lift=-11;

//Design of the bird
	this.show=function()
	{
		fill(255);
		ellipse(this.x,this.y,26,26);
	}
//to make it jump, make it sweat
	this.up=function()
	{
		this.velocity+=this.lift;
	}

	this.update=function()
	{
//To male the bird falling down and rolling with Adele
		this.velocity+=this.gravity;
	//air resistance
	    this.velocity*=0.9;
		this.y+=this.velocity;

//To make it look like shit falling down
	if (this.y>height){
		this.y=height;
		this.velocity=0;
	}
//It's a fatty bird, so it cannot go higher than the mother fucking screen
//common sense got dammit
	if (this.y<0){
		this.y=0;
		this.velocity=0;
	}

	}



}