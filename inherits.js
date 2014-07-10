function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

function Dog(name, coatColor) {
  Animal.call(this, name);
  this.coatColor = coatColor;
}

// // Set Dog.prototype to a new object whose
// // __proto__ points to Animal.prototype.
// Dog.prototype = Object.create(Animal.prototype);
//
// Dog.prototype.bark = function () {
//   console.log("Bark!");
// };





function Surrogate() {}

Surrogate.prototype = Animal.prototype
Dog.prototype = new Surrogate()

Function.prototype.inherits = function(superclass) {
  function Surrogate() {};

  Surrogate.prototype = superclass.prototype;
  this.prototype = new Surrogate();
}

