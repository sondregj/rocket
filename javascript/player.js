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
    var enemy = players[0].rocket.pos.copy();
    var a = atan2(this.rocket.pos.y - enemy.y, this.rocket.pos.x - enemy.x) + PI;
    console.log(a);
  }

  this.shoot = function() {
    if (players[i].rocket.laserLoad < 100) {
      lasers.push(new Laser(players[1].rocket.pos, players[1].rocket.rotation, 2));
      players[1].rocket.laserLoad += 2.5;
    }
  }
}
