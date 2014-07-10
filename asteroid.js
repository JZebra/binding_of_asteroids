(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  Function.prototype.inherits = function(superclass) {
    function Surrogate() {};
    Surrogate.prototype = superclass.prototype;
    this.prototype = new Surrogate();
  };
  

  var Asteroid = Asteroids.Asteroid = function(radius, color) {
    Asteroids.MovingObject.call(this, radius, color);
  };
  
  Asteroid.inherits(Asteroids.MovingObject);
  Asteroid.COLOR = "darkgray";
  Asteroid.RADII = [20, 10, 5];
  
  Asteroid.randomAsteroid = function(dimX, dimY) {
    asteroid = new Asteroid(Asteroid.RADII[0], Asteroid.COLOR);
    asteroid.pos[0] = (Math.random() > 0.5) ? dimX : 0;
    asteroid.pos[1] = (Math.random() > 0.5) ? dimY : 0;
    asteroid.vel[0] = (Math.random() * 10) - 5;
    asteroid.vel[1] = (Math.random() * 10) - 5;
    
    return asteroid;
  };
  
})(this);
