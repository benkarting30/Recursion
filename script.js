let size
function setup(){
    CreateCanvas(400, 400, WEBGL)
    size = width/2
}

function draw(){
    background(220)
    Box(size)
}
