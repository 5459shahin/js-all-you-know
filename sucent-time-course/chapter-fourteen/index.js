function extend(Parent, child) {
    child.prototype = Object.create(Shape.prototype);
    child.prototype.constructor = child;

}


function Shape(color) {
    this.color = color
}

Shape.prototype.common = function () {

    console.log("I an Common Method");
  }


function Square(width, color) {
  Shape.call(this, color)
  this.width = width;
}

extend(Shape, Square)

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

Square.prototype.draw = function () {
    console.log("Drawing");
  {}
}

Square.prototype.common = function () {
  console.log("i am calling frim square and i Have Overridden");
};





/*
 Circle.prototype = {
    common: function () {
        console.log("I an Common Method");
    }
}
 */

// var s1 = new Square(45)

// var shape = new Shape()
var sqr = new Square(45, 'green')
 

function circle(radius, color) {
    Shape.call(this, color)
    this.redius = radius
}

extend(Shape, circle)

circle.prototype.common = function () {
    // Shape.prototype.common.call(this)
    console.log('i am calling frim circle and i Have Overridden')
}

// var c = new circle(4, 'Black')

// var s = new Shape('Pirple')

// var shaps = [s, c, sqr]

// for (var i of shaps) {
//     i.common()
// }


function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

var canWalk = {
    walk: function () {
        console.log('Walking....')
    }
}

var canEat = {
    eat: function () {
        console.log('Eating....')
    }
}

var canSwim = {
    Swim: function () {
        console.log('Swiming......')
    }
}

// var person = Object.assign({}, canWalk, canEat)
// person.name = 'km shahin'

function Person(name) {
    this.name = name
}
// Object.assign(Person.prototype, canWalk, canEat)
mixin(Person.prototype, canWalk, canEat)

var person = new Person('Km Shahin ')
console.log(person)

function GoldFish(name) {
    this.name = name
}
mixin(GoldFish.prototype, canEat, canSwim, canWalk)

var fish = new GoldFish('bla bala bla...')
console.log(fish)

