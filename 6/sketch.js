function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
 background(255);
 strokeWeight(4);
 stroke (0);

 for (var x = 0; x <= width; x += 20){
   for (var y = 0; y <= height; y += 20){
    fill(random(255));
    ellipse (x, y, 15, 15);
   }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}