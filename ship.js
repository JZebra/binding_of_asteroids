(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  Function.prototype.inherits = function(superclass) {
    function Surrogate() {};
    Surrogate.prototype = superclass.prototype;
    this.prototype = new Surrogate();
  };
  
  var Ship = Asteroids.Ship = function(radius, color) {
    Asteroids.MovingObject.call(this, radius, color);
    this.pos = [(Asteroids.Game.DIM_X / 2), (Asteroids.Game.DIM_Y / 2)];
    this.vel = [0, 0];
  }
  
  Ship.inherits(Asteroids.MovingObject);
  // Ship.COLOR = "blue";
  // Ship.RADII = 5;
  
  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }
  
})(this);
  