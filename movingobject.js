(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var MovingObject = Asteroids.MovingObject = function(radius, color) {
    this.pos = [0, 0];
    this.vel = [0, 0];
    this.radius = radius;
    this.color = color;
  }
  
  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.pos[0] > Asteroids.Game.DIM_X) {
      this.pos[0] = this.pos[0] % Asteroids.Game.DIM_X;
    } else if (this.pos[0] < 0) {
      this.pos[0] += Asteroids.Game.DIM_X;
    }
      
    if (this.pos[1] > Asteroids.Game.DIM_Y) {
      this.pos[1] = Math.abs(this.pos[1] % Asteroids.Game.DIM_Y);
    } else if (this.pos[1] < 0) {
      this.pos[1] += Asteroids.Game.DIM_Y;
    }
  }
 
  
  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI
    );
    ctx.fill();
  };
  
  MovingObject.prototype.isCollideWith = function(otherObject) {
    var distance = Math.sqrt(
      
                  Math.pow((this.pos[0] - otherObject.pos[0]), 2) +
                   Math.pow((this.pos[1] - otherObject.pos[1]), 2));

    return (this.radius + otherObject.radius) > distance;
  };
})(this);