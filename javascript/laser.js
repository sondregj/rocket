function Laser(spos, angle, rocket, id) {
  this.pos = createVector(spos.x, spos.y);
  this.vel = p5.Vector.fromAngle(angle - (PI / 2));
  this.vel.mult(15);
  this.done = false;
  this.id = id;
  this.firedFrom = rocket;
  this.lastPos;

  laserSound.play();



  this.update = function() {
    this.lastPos = this.pos.copy();
    this.pos.add(this.vel);
  }

  this.render = function() {
    push();
    stroke(255);
    strokeWeight(2);

    line(this.pos.x, this.pos.y, this.lastPos.x, this.lastPos.y)
    //point(this.pos.x, this.pos.y);
    pop();
  }

  this.del = function(i) {
    // remove from array
    lasers.splice(i, 1);
  }

  this.bounds = function() {
    if (this.pos.x < 0 || this.pos.x > width) {
      return true;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      return true;
    }
    return false;
  }


  this.hit = function() {
    if (this.firedFrom == 1) {
      if (this.done == false) {
        var d = dist(this.pos.x, this.pos.y, players[1].rocket.pos.x, players[1].rocket.pos.y);
        if (d < players[1].rocket.r) {
          if (players[1].rocket.health > 0) {
            players[1].rocket.health -= 5;
          }
          hitFx.play();
          players[0].rocket.money += 5;
          console.log(this.done);
          this.done = true;
          console.log(players[0].money);
          //this.del();
        }
      }
    }
    if (this.firedFrom == 2) {
      var d = dist(this.pos.x, this.pos.y, players[0].rocket.pos.x, players[0].rocket.pos.y);
      if (d < players[0].rocket.r && this.done == false) {
        if (players[0].rocket.health > 0) players[0].rocket.health -= 5;
        this.done = true;
        hitFx.play();
        players[1].money += 5;
        //this.del();
      }
    }
  }

  this.offscreen = function() {
    if (this.pos.x > width || this.pos.x < 0) {
      return true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      return true;
    }
    return false;
  }
}
