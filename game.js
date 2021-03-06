(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(ctx) {
    this.ctx = ctx;
    this.addAsteroids(10);
    this.ship = new Asteroids.Ship(5, "blue");
  };
  
  Game.DIM_X = 800;
  Game.DIM_Y = 600;
  
  Game.prototype.addAsteroids = function(numAsteroids) {
    var game = this;
    this.asteroids = [];
    for (var i = 0; i < numAsteroids; i++) {
      game.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X,                 Game.DIM_Y));
    }
  }
  
  Game.prototype.draw = function() {
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    
    this.ship.draw(this.ctx);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    }
  }
  
  // var movingObjects = this.asteroids.concat(this.ship).concat...
  
  Game.prototype.step = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
    this.ship.move();
    this.bindKeyHandler();

    this.draw();
    this.checkCollisions();
  }

  Game.prototype.start = function() {
    // var game = this;
    // this.clock = window.setInterval(function () {
//       game.step();
//     }, 30);
    this.clock = setInterval(this.step.bind(this), 30);
  };
  
  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      if (this.ship.isCollideWith(this.asteroids[i])) {
        // alert("Game over!");
        this.stop();
      }
    } 
  };
  
  Game.prototype.stop = function() {
    clearInterval(this.clock);
  }
  
  Game.prototype.fireBulletUp = function () {}
  
  Game.prototype.bindKeyHandler = function () {
    var game = this;
    var pow = 0.3
    // key('w', function() { game.ship.power([0,-0.2]) });
  //   key('a', function() { game.ship.power([-0.2,0]) });
  //   key('s', function() { game.ship.power([0,0.2]) });
  //   key('d', function() { game.ship.power([0.2,0]) });
  
    if (key.isPressed('w')) { game.ship.power([0,-pow]); }
    if (key.isPressed('a')) { game.ship.power([-pow,0]); }
    if (key.isPressed('s')) { game.ship.power([0,pow]); }
    if (key.isPressed('d')) { game.ship.power([pow,0]); }
    
    if (key.isPressed('i')) { game.ship.fireBulletUp; }
    if (key.isPressed('k')) { game.ship.fireBulletDown; }
    if (key.isPressed('j')) { game.ship.fireBulletLeft; }
    if (key.isPressed('l')) { game.ship.fireBulletRight; }
    
    // if (key.isPressed('space')) { game.ship.bomb(); }    
  }
  
})(this);