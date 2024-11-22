class Box {
  constructor(x, y, z, angle, scl, speed) {
    this.pos = createVector(x, y, z);
    this.angle = angle;
    this.scl = scl;
    this.speed = speed;
  }
  draw() {
    noStroke();
    let r = map(Math.sin(this.angle), -1, 1, 100, 255);
    let g = map(Math.sin(this.angle + 2), -1, 1, 100, 255);
    let b = map(Math.sin(this.angle + 4), -1, 1, 100, 255);

    fill(r, g, b);
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);

    box(size);
    pop();
  }
  update() {
    this.pos.z = this.scl * Math.sin(this.angle);

    this.angle += this.speed;
  }
}
