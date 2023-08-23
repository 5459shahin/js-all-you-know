/* 
function extend(parent, child) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Shape(color) {
    this.color = color
}

Shape.prototype.common = function () {
    console.log("I am a Common Method");
};

extend(Shape, Square)

function Square(width, color) {
    Shape.call(this, color);
    this.width = width
}

Square.prototype.draw = function () {
    console.log("Drawing");  
};

Square.prototype.common = function () {
  console.log("I am Calling From Square and I have Overridden");
};


Shape.prototype.test = function () {
    console.log('Test')
}

var shape = new Shape()
var sqr = new Square(45, 'Green')

// shape -> Shape -> Object
// sqr -> Square -> Object
// sqr -> Square -> Shape -> Object


function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}
 
extend( Shape, Circle)

var circle = new Circle(10, 'red')


Circle.prototype.common = function () {
    // Shape.prototype.common.call(this)
    console.log('I am Calling From Circle and I have Overridden')
}

var c = new Circle(4, 'Black')
var s = new Shape('Pirple')

var shapes = [s, c, sqr]

for (var i of shapes) {
    i.common()
}
 */

var outPut = console.log.bind()

function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

var canWalk = {
    walk: function () {
        console.log('Walking....')
    }
}

var canEat = {
    eat: function(){
       console.log('Eating.....')
    }
}

var canSwim = {
    swim: function () {
        outPut('Swimming.....')
    }
}

// var person = Object.assign({}, canWalk, canEat)
// person.name = 'Km Shahin'

function Person(name) {
  this.name = name;
}

// Object.assign(Person.prototype, canWalk, canEat);
mixin(Person.prototype, canWalk, canEat);

var person = new Person('Km Shahin')
outPut(person)

function goldFish(name) {
    this.name = name
}
mixin(goldFish.prototype, canEat, canSwim)

var fish = new goldFish('bla bla bla....')
outPut(fish)
