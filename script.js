let size
function setup(){
    createCanvas(400, 400, WEBGL)
    size = width/2
}

function draw(){
    background(220)
    orbitControl()
    let s =size/3
    FileList(255)
    for (let i = -1; i<2; i++){
        for (let j=-1; j<2; j++){
            for(let k=-1; k<2; k++){
                let x = i*s
                let y = j*s
                let z = k*s
                if ((i==0&&j==0) ||
                (i==0 && k==0) ||
                (j==0 && k==0)){

                }else{
                    push()
                    translate(x,y,z)
                    box(s)
                    pop() 
                }              
            }
        }
    }

    noFill()
    box(size)
}
