let size
function setup(){
    createCanvas(400, 400, WEBGL)
    size = width/2
}

function draw(){
    background(220)
    orbitControl()
    let s =size/3
    for (let i = -1; i<2; i++){
        for (let j=-1; j<2; j++){
            for(let k=-1; k<2; k++){
                let x = i*s
                let y = 0
                push()
                translate(x,y)
                box(s)
                pop()               
            }
        }
    }

    noFill()
    box(size)
}
