(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  Function.prototype.inherits = function(superclass) {
    function Surrogate() {};
    Surrogate.prototype = superclass.prototype;
    this.prototype = new Surrogate();
  };
  
  Bullet.RADIUS = 2;
  Bullet.COLOR = "red";
  
  var Bullet = Asteroids.Bullet = function(dx, dy) {
    Asteroids.MovingObject.call(this, Bullet.RADIUS, Bullet.COLOR);
    
    this.pos = [(Asteroids.Ship.pos[0]), (Asteroids.Ship.pos[1])];
    this.vel = [(dx + Asteroids.Ship.vel[0]), (dy + Asteroids.Ship.vel[1])];
  }
  
  
})(this);
  