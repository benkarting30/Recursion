let size; let level = 3
function setup(){
    createCanvas(400, 400, WEBGL)
    size = width/2
}

function draw(){
    background(220)
    orbitControl()
    MengerSponge(size, level)
}

function MengerSponge(size, level){
    if(level == 0){
        box(size)

    } else {
        let s =size/3
        fill(255)
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
                        MengerSponge(s, level-1)
                        pop() 
                    }              
                }
            }
        }
    }
}