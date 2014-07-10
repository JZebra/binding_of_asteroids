"use strict";

var sum = function(){
  var argSum = 0;
  for (var i = 0; i < arguments.length; i++) {
    argSum += arguments[i];
  }
  return argSum;
};

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));


Function.prototype.myBind = function(obj) {
  var that = this;
  var args = Array.prototype.slice.call(arguments);
  args = args.slice(1);
  return function(){
    var boundArgs = Array.prototype.slice.call(arguments);
    args = args.concat(boundArgs);
    return that.apply(obj, args);
  };
};

// function times(num, fun) {
//   for (var i = 0; i < num; i++) {
//     fun(); // call is made "function-style"
//   }
// }
//
var cat = {
  age: 5,

  ageOneYear: function () {
    this.age += 1;
  }
};
//
// // Function argument is different:
// console.log(cat.age);
// times(10, cat.ageOneYear.myBind(cat));
//
// console.log(cat.age);



// equivalent to `obj.myFunction(1, 2, 3)`
// console.log(myBoundFunction(3));


var myFunction = function (num1, num2, num3) {
  return num1 + num2 - num3;
};

var myBoundFunction = myFunction.myBind(cat, 1);


console.log(myBoundFunction(2, 3));

// var myBoundFunction = function(myObj) {
//   console.log(myObj);
//   sum.myBind(myObj, 1, 2);
// };

var curriedSum = function(numArgs){
  var numbers = [];
  var numArgs = numArgs;
  var sum = 0;
  var _curriedSum = function(num){
    numbers.push(num);
    if (numbers.length === numArgs) {
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }else{
      return _curriedSum;    
    }
  };
  return _curriedSum;
};


var curriedFunction = function(actualFunction, numArgs){
  var numbers = [];
  var numArgs = numArgs;
  var _curriedFunction = function(num){
    numbers.push(num);
    if (numbers.length === numArgs) {
      return actualFunction.apply(this, numbers);
    }else{
      return _curriedFunction;    
    }
  };
  return _curriedFunction;
};



var c = curriedSum(2);
console.log("curried sum here");
console.log(c(1)(2));

var sum = curriedSum(4);
console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function(numArgs){
  var numbers = [];
  var actualFunction = this;
  var numArgs = numArgs;
  var _curry = function(num){
    numbers.push(num);
    if (numbers.length === numArgs) {
      return actualFunction.apply(this, numbers);
    }else{
      return _curry;    
    }
  };
  return _curry;
}

var x = myFunction.curry(3)(100)(1000)(1)
console.log(x)

