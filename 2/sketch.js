let x = 0;
let y = 0;
let spacing = 40;

function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

  
function draw() {
  stroke (0);
  fill(0);
  if (random(1)<0.5){
    line(x, y, x+spacing, y+spacing);
  }
  else{
    line(x, y+spacing, x+spacing, y);
  }
  
  x= x + spacing;
  if(x > width){
    x = 0;
    y = y+ spacing;
  }
}


function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}