let block = document.getElementById("block");

function moveBlock() {
  let currentLeft = parseInt(block.style.left) || 0; 
  let maxLeft = document.documentElement.scrollWidth - block.offsetWidth; 
  if (currentLeft < maxLeft) { 
    block.style.left = currentLeft + 10 + "px"; 
    requestAnimationFrame(moveBlock); 
  }
}

moveBlock();
