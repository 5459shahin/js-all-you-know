// Inheritane

// function Person(name) {
//     this.name = name
// }
// var p1 = new Person('shahin')
// console.log(p1)

// var person = {
//     name: 'shahin'
// }

// console.log(person)


// for (var i in person) {
//     console.log(i)
// }

// console.log(Object.keys(person))

// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor)

// let baseObj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor)

// Object.defineProperty(person, 'name', {
//     enumerable: false,
//     writable: false,
//     cofigurable: false,
//     value: 'km shahin khan'
// })



function Person (name) {
  this.name = name
};

Person.prototype.PI = 3.1414

var p1 = new Person('km shahin')
var p2 = new Person(' shahin Khan')

// console.log(Object.getPrototypeOf(p1));
// console.log(Person.prototype)

// console.log(p1)
// console.log(p2)


function Square(width) {
  this.width = width
  this.getWidth = function () {
    console.log('Width is  ' + this.width)
    // this.draw()
  }
}

Square.prototype = {
  draw: function () {
    this.getWidth()
    console.log("Draw");
  },
  toString: function () {
    return 'My width is = '+ this.width
  }
};

var sqr1 = new Square(10)
var sqr2 = new Square(5)

// console.log(Object.keys(sqr1))

for (var i in sqr1) {
  console.log(i)
}
