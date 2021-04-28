function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent("canvas");
  background(255);
}

function draw() {
  let x = 10;
  fill(0);

  
  for (let x = 10; x < width; x = x + 60) {
    for (let y = 10; y < height; y = y + 30) {
    
    fill(0);
    rect(x+7.5, y, 5, 20);
    rect(x, y+5, 20,5);
   
    fill(random(mouseX));
    rect(x+35, y, 5, 25);
    rect(x-32.5, y+15, 20,5);
    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}
