function Particle() {
  this.pos = createVector(random(0, width),random(0, height));
  this.vel = createVector(random(-0.5,0.5),random(-0.5,0.5));

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render = function() {
    fill(255);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 1,1);
  }

  this.edges = function() {
    if (this.pos.x < 0) {this.pos.x = height;}
    if (this.pos.x > width) {this.pos.x = 0;}
    if (this.pos.y < 0) {this.pos.y = height;}
    if (this.pos.y > height) {this.pos.y = 0;}
  }
}
