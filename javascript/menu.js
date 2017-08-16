function Menu() {
  this.scl = 15;

  this.newGame = function(a) {
    rockets = [];
    hud = undefined;
    lasers = [];
    players = [];

    players[0] = new Player(1, false);
    if (a == 2) {
      players[1] = new Player(2, false);
    } else {
      players[1] = new Player(2, true);
    }


    hud = new Hud();
    state = 1;
  }

  this.render = function() {
    var randomOffset = 0;
    textAlign(CENTER);
    textSize(10 * this.scl);

    noStroke();
    fill(255);
    text("shooter", width / 2 + random(-randomOffset, randomOffset), height * 1 / 3 + random(-randomOffset, randomOffset));


    fill(255, 10);
    if (mouseX > 3 * width / 8 - 25 && mouseX < 4 * width / 8 - 25) {
      if (mouseY > height / 2 && mouseY < 3 / 5 * height) {
        fill(255, 25);
      }
    }
    rect(3 * width / 8 - 25, height / 2, (width / 8), height / 10);
    fill(255, 10);
    if (mouseX > width / 2 + 25 && mouseX < 5 / 8 * width + 25) {
      if (mouseY > height / 2 && mouseY < 3 / 5 * height) {
        fill(255, 25);
      }
    }
    rect(width / 2 + 25, height / 2, (width / 8), height / 10);

    textSize(30);
    fill(255, 200);
    text("1 player", 3 * width / 8 - 25 + width / 16, height / 2 + height / 20);
    text("2 players", width / 2 + 25 + (width / 16), height / 2 + height / 20);
    text("v" + gameVersion, width / 2, 7 / 8 * height);
  }
}
