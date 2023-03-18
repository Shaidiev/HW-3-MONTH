let childTriangleMove = document.querySelector('#childTriangle')
let positionY = 0
let positionX = 0
let positionA = 0


const moveBlock = () => {
    if(positionY <= 300){
    positionY+=16
    childTriangleMove.style.left = `${positionY}px`
    childTriangleMove.style.top = `${positionY}px`
    
} else if(positionX <= 300){
    positionX+=16
    childTriangleMove.style.left = `${300 - positionX}px`
} else if(positionA <= 300){
    positionA+=16
    childTriangleMove.style.top = `${300 - positionA}px`
}else{
    positionY = 0
    positionX = 0
    positionA = 0
}
setTimeout(moveBlock, 20)
}

moveBlock()

