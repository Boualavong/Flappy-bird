//p5.js
var bird;
var pipes= [];

function setup()
{
	createCanvas (400,600);
	bird=new Bird();
	pipes.push(new Pipe());
}
function draw ()
{
	background(0);
	bird.show();
	bird.update();

	//to make many pipes
	if (frameCount %70==0)//every forty frapes
	{
	pipes.push(new Pipe());
	}

	for(var i=0;i<pipes.length;i++)
	{
	pipes[i].show();
	pipes[i].update();
	
	if(pipes[i].hits(bird)){console.log("YOU DIED");}
}
}
//to play with the keyboard
function keyPressed(){
	if (key==' ')
	{
		//just checking
		console.log("SPACE");
		bird.up();
	}
}