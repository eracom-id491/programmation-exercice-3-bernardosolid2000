let angle=0;
function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(0);
}

function draw() {
  background(0);

  for (let i = 50; i < mouseX; i += 50){
    for (let j= 50; j < mouseY; j += 50){
      fill(255);
      stroke(0);
      strokeWeight(2);

      let d = dist(mouseX, mouseY, i + width/2, j+height/2);

      let r= d/5;
      push();
      translate(i, j);
      rotate(-angle);
      ellipse(0, 0, r+20, r);
      pop();

      push();
      translate(i, j);
      rotate(angle);
      ellipse(0, 0, r, r+20);
      pop();

      angle+=0.0003;
    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}