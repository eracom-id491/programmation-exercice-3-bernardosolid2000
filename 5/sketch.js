function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent("canvas");
  background(255);
}

function draw() {
  background(255);
fill(0);
  for (let i = 50; i < mouseX; i += 50){
    for (let j= 50; j < mouseY; j += 50){
      fill(0);
      stroke(255);
      strokeWeight(3);

      let d = dist(mouseX, mouseY, i + width/2, j+height/2);

      let r= d/5;
      rect(i, j, r-50, r-50);
      rect(i, j, r, r);
      
    }
  }
}


function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}
