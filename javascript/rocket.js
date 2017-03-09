function Rocket(playerId) {
  this.pos = createVector(playerId * width / 3, height / 2);
  this.vel = createVector(0, 0);
  this.rotation = 10000 * PI;
  this.accSpeed = createVector(0, -0.5);
  this.speed = 0;
  this.heading = 0;
  this.maxSpeed = 10;
  this.points = 5;
  this.health = 100;
  this.r = 40;

  this.laserLoad = 0;
  this.bounce = 0.4;

  this.hitUp = false;
  this.hitLeft = false;
  this.hitRight = false;
  this.hitDown = false;


  this.acc = function(force) {
    var acc = force;
    acc.rotate(this.rotation);
    if (this.speed <= this.maxSpeed) {
      this.vel.add(acc);
    }
  }

  this.update = function() {
    this.pos.add(this.vel);
    this.vel.mult(0.99);
    this.speed = floor(sqrt(pow(this.vel.x, 2) + pow(this.vel.y, 2)) * 10) / 10;
    this.heading = degrees(this.rotation) % 360;

    // Trenger fiks
    if (this.laserLoad > 0) {
      this.laserLoad -= 0.04;
    } else {
      this.laserLoad = 0;
    }
    if (this.laserLoad >= 101) {
      this.laserLoad = 100;
    };
  }

  this.render = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rotation);
    //stroke(100);
    //strokeWeight(1);
    //line(0,-40,0,-200);
    strokeWeight(8);
    if (playerId == 1) {
      stroke(220, 0, 80);
    } else if (playerId == 2) {
      stroke(80, 0, 220);
    }
    fill(0);
    triangle(0, -40, 20, 20, -20, 20);
    //ellipse(0, 0, this.r * 2, this.r * 2);
    pop();
  }

  this.edges = function() {
    if (this.pos.x < hud.edgeOffset) {
      this.pos.x = hud.edgeOffset;
      this.vel.x *= -this.bounce;
      this.hitLeft = true;
      hitFx.play();
    } else {
      this.hitLeft = false;
    }
    if (this.pos.x > width - hud.edgeOffset) {
      this.pos.x = width - hud.edgeOffset;
      this.vel.x *= -this.bounce;
      this.hitRight = true;
      hitFx.play();
    } else {
      this.hitRight = false;
    }
    if (this.pos.y < hud.edgeOffset) {
      this.pos.y = hud.edgeOffset;
      this.vel.y *= -this.bounce;
      this.hitUp = true;
      hitFx.play();
    } else {
      this.hitUp = false;
    }
    if (this.pos.y > height - hud.edgeOffset) {
      this.pos.y = height - hud.edgeOffset;
      this.vel.y *= -this.bounce;
      this.hitDown = true;
      hitFx.play();
    } else {
      this.hitDown = false;
    }
  }

  this.setRotation = function(a) {
    this.rotation += a;
  }
}
