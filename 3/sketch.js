function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  for(i=0; i<130; i++){
    for(j=0; j<130; j++){
      
      fill (0);
      stroke(random(255));
      ellipse(i*25, j*25, i+2);
    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}