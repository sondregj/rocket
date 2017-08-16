function Hud() {
  this.scl = 10;
  this.textSize = 30;
  this.edgeOffset = 50;

  this.update = function() {}

  this.render = function() {
    fill(230, 0, 70);
    noStroke();


    if (players[0].rocket.hitUp == true || players[1].rocket.hitUp == true) {
      beginShape();
      vertex(0, 0);
      vertex(width, 0);
      vertex(width - this.edgeOffset, this.edgeOffset);
      vertex(this.edgeOffset, this.edgeOffset);
      endShape();
    }
    if (players[0].rocket.hitLeft == true || players[1].rocket.hitLeft == true) {
      beginShape();
      vertex(0, 0);
      vertex(0, height);
      vertex(this.edgeOffset, height - this.edgeOffset);
      vertex(this.edgeOffset, this.edgeOffset);
      endShape();
    }
    if (players[0].rocket.hitRight == true || players[1].rocket.hitRight == true) {
      beginShape();
      vertex(width, 0);
      vertex(width, height);
      vertex(width - this.edgeOffset, height - this.edgeOffset);
      vertex(width - this.edgeOffset, this.edgeOffset);
      endShape();
    }
    if (players[0].rocket.hitDown == true || players[1].rocket.hitDown == true) {
      beginShape();
      vertex(0, height);
      vertex(width, height);
      vertex(width - this.edgeOffset, height - this.edgeOffset);
      vertex(this.edgeOffset, height - this.edgeOffset);
      endShape();
    }

    textSize(this.textSize);

    fill(230, 30, 80, 150);
    textAlign(LEFT);
    text("speed " + players[0].rocket.speed, 2 * this.edgeOffset, 2 * this.edgeOffset);
    text("heading " + floor(players[0].rocket.heading) + "degrees°", 2 * this.edgeOffset, 2 * this.edgeOffset + this.textSize * 1.5);
    text("load " + floor(players[0].rocket.laserLoad) + "%", 2 * this.edgeOffset, 2 * this.edgeOffset + this.textSize * 3);
    text("health " + players[0].rocket.health + "hp", 2 * this.edgeOffset, 2 * this.edgeOffset + this.textSize * 4.5);
    text("$" + players[0].rocket.money, 2 * this.edgeOffset, 2 * this.edgeOffset + this.textSize * 7);


    fill(80, 30, 230, 150);
    textAlign(LEFT);
    text("speed " + players[1].rocket.speed, width - (8 * this.edgeOffset), 2 * this.edgeOffset);
    text("heading " + floor(players[1].rocket.heading) + "degrees°", width - (8 * this.edgeOffset), 2 * this.edgeOffset + this.textSize * 1.5);
    text("load " + floor(players[1].rocket.laserLoad) + "%", width - (8 * this.edgeOffset), 2 * this.edgeOffset + this.textSize * 3);
    text("health " + players[1].rocket.health + "hp", width - (8 * this.edgeOffset), 2 * this.edgeOffset + this.textSize * 4.5);
    text("$" + players[1].rocket.money, width - (8 * this.edgeOffset), 2 * this.edgeOffset + this.textSize * 7);
  }
}
