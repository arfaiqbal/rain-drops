var drops = [];

function setup()
{
    createCanvas(1500,600);
    frameRate(15);
    
    for(var i=0;i<100;i++)
    {
        drops.push(new Drop());
    }
}

function draw()
{

    background(0,100);
    for(var i=0;i<drops.length;i++)
    {
        drops[i].draw();
        drops[i].update();
    }
}
