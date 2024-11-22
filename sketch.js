let size = 10;
let cols;
let rows;
let margin = 70;
let boxes = [];
let scl = 50;
let speed = 0.05;

function setup() {
  createCanvas(600, 600, WEBGL);
  cols = (width - margin * 2) / size;
  rows = (height - margin * 2) / size;

  for (let i = 0; i < cols; i++) {
    boxes[i] = [];
    for (let j = 0; j < rows; j++) {
      let x = -width / 2 + margin + size / 2 + i * size;
      let y = -height / 2 + margin + size / 2 + j * size;
      let z = 0;
      let distance = dist(x, y, 0, 0);
      let angle = map(distance, 0, width / 2, 0, TWO_PI * 2);

      boxes[i][j] = new Box(x, y, z, angle, scl, speed);
    }
  }
}

function draw() {
  background(0);
  orbitControl();
  // let m = map(mouseX, 0, width, 0, TWO_PI);
  rotateX(Math.PI / 5);
  rotateY(Math.PI / 9);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // boxes[i][j].angle = m;
      boxes[i][j].draw();
      boxes[i][j].update();
    }
  }
}

function windowResized() {
  resizeCanvas(600, 600);
}
