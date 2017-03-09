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
    } else if (this.playerId == 2) {
      if (keyIsDown(87)) {
        this.rocket.acc(this.rocket.accSpeed.copy());
      }
      if (keyIsDown(65)) {
        this.rocket.setRotation(-0.08);
      }
      if (keyIsDown(68)) {
        this.rocket.setRotation(0.08);
      }
    }
  }

  this.ai = function() {}
}
