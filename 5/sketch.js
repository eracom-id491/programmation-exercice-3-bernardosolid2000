function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent("canvas");
  background(255);
}

function draw() {
  let x = 10;
  fill(0);
  for (let x = 10; x < width; x = x + 30) {
    ellipse(x, height / 2, 10, 10);
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}
