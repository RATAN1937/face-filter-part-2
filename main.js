
function preload()
{
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized')
}

function draw() 
{
}

function onclick(){
    save('myFilterImage.png');
}


function gotPoses(results)
