function Player(id, aiPlayer) {
  this.aiPlayer = aiPlayer;
  this.playerId = id;
  this.money = 0;
  this.rocket = new Rocket(this.playerId);

  //this.buy = function() {}

  this.update = function() {
    if (this.playerId == 1) {
      if (keyIsDown(UP_ARROW)) {
        this.rocket.acc(this.rocket.accSpeed.copy());
      }
      if (keyIsDown(LEFT_ARROW)) {
        this.rocket.setRotation(-0.08);
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.rocket.setRotation(0.08);
      }
    } else if (this.playerId == 2 && this.aiPlayer == 0) {
      if (keyIsDown(87)) {
        this.rocket.acc(this.rocket.accSpeed.copy());
      }
      if (keyIsDown(65)) {
        this.rocket.setRotation(-0.08);
      }
      if (keyIsDown(68)) {
        this.rocket.setRotation(0.08);
      }
    } else {
      this.ai();
    }
  }

  this.ai = function() {
    var angleThreshold = PI / 2;

    var enemy = players[0].rocket.pos.copy();
    var a = atan2(enemy.y - this.rocket.pos.y, enemy.x - this.rocket.pos.x) + 1.5 * PI;
    //console.log(a);
    if ((a - players[1].rocket.rotation) % (2 * PI) == PI) {

      this.rocket.acc(this.rocket.accSpeed.copy());
    }
    //console.log((a - players[1].rocket.rotation) % (2 * PI));
    /*
        if ((a - players[1].rocket.rotation) % (2 * PI) < PI - angleThreshold) {
          //console.log("True");
        } else if ((a - players[1].rocket.rotation) % (2 * PI) > PI + angleThreshold) {
          //console.log("true");
        }
        */

    // Finne ut om skip sikter på det andre, hvis ja; skyte og akselerere, +-45 synsfelt
    //this.rocket.acc(this.rocket.accSpeed.copy());


    // Hvis skip ikke
  }

  this.shoot = function() {
    if (players[i].rocket.laserLoad < 100) {
      lasers.push(new Laser(players[1].rocket.pos, players[1].rocket.rotation, 2));
      players[1].rocket.laserLoad += 2.5;
    }
  }
}
