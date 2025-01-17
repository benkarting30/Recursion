let size
function setup(){
    createCanvas(400, 400, WEBGL)
    size = width/2
}

function draw(){
    background(220)
    orbitControl()

    for (let i = -1; i<2; i++){
        let s =size/3
        box(s)
    }

    noFill()
    box(size)
}
