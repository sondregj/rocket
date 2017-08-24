// Sondre Gjellestad

var gameVersion = "0.1";

var hud, menu;

function preload() {
  monospace = loadFont('assets/monospace.ttf');
  bgsfx = loadSound("assets/backgroundSound.mp3");
  hitFx = loadSound('assets/hit.mp3');
  laserSound = loadSound("assets/laser.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  frameRate(60);
  background(0);
  textFont(monospace);

  // Global arrays
  particles = [];
  players = [];
  rockets = [];
  lasers = [];

  state = 0;

  bgsfxReverb = new p5.Reverb();
  bgsfxReverb.process(bgsfx);
  bgsfxReverb.amp(40, 1);
  bgsfx.loop();

  for (var i = 0; i < 50; i++) {
    particles[i] = new Particle();
  }

  menu = new Menu();
}

function draw() {
  background(0, 75);

  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].render();
    particles[i].edges();
  }

  if (state == 0) {
    menu.render();

  } else if (state == 1) {

    players[0].update();
    if (players[1].aiPlayer == true) {
      players[1].ai();
    } else {
      players[1].update();
    }

    for (var i = 0; i < lasers.length; i++) {
      lasers[i].update();
      lasers[i].render();
      lasers[i].hit();
      if (lasers[i].bounds()) {
        lasers.splice(i, 1);
      }
    }

    for (var i = 0; i < players.length; i++) {
      players[i].rocket.edges();
      players[i].rocket.update();
      players[i].rocket.render();
    }

    hud.update();
    hud.render();
    //print(lasers.length);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (state && countdownDone) {
    for (var i = 0; i < players.length; i++) {
      if (players[i].rocket.laserLoad < 100) {
        if (keyCode == 40) {
          lasers.push(new Laser(players[0].rocket.pos, players[0].rocket.rotation, 1));
          players[0].rocket.laserLoad += 2.5;
        }
        if (keyCode == 83 && players[1].aiPlayer == 0) {
          lasers.push(new Laser(players[1].rocket.pos, players[1].rocket.rotation, 2));
          players[1].rocket.laserLoad += 2.5;
        }
      }
    }
  }
}

function mouseClicked() {
  if (state == 0) {
    if (mouseX > 3 * width / 8 - 25 && mouseX < 4 * width / 8 - 25) {
      if (mouseY > height / 2 && mouseY < 3 / 5 * height) {
        menu.newGame(1);
      }
    }
    if (mouseX > width / 2 + 25 && mouseX < 5 / 8 * width + 25) {
      if (mouseY > height / 2 && mouseY < 3 / 5 * height) {
        menu.newGame(2);
      }
    }
  } else if (state == 1) {

  }
  return false;
}
