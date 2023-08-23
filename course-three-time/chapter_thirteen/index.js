/* ============================================================================
        Inheritance in Javascript
        Prototype and Prototypical Inheritance in Javascript
   ================================================================== 
*/

// Inheritance

// function Person(name) {
//     this.name = name
// }

// var p1 = new Person('Km Shahin')
// console.log(p1)

var person = {
    name: 'Km shahin'
}
// console.log(person)

// for (var i in person) {
//     console.log(i)
// }

// console.log(Object.keys(person))

/* ============================================================================
        
        Property Descriptor in Javascript
   ================================================================== 
*/

// // var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// // console.log(descriptor)

// // let baseObj = Object.getPrototypeOf(person)
// // let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// // console.log(descriptor)

// Object.defineProperty(person, 'name', {
//     enumerable: false,
//     writable: false,
//     configurable: false,
//     value: 'shahin ahmed'
// })


// function Person(name) {
//     this.name = name
// }

// Person.prototype.PI = 3.1414

// var p1 = new Person('Km shahin')
// var p2 = new Person('shahin')
// console.log(Object.getPrototypeOf(p1))
// console.log(Person.prototype)

// console.log(p1)
// console.log(p2)


function Square(width) {
    this.width = width

    this.getWidth = function () {
        console.log('Width is = ' + this.width)
        // this.draw()
    }


}

Square.prototype = {
    draw: function () {
        this.getWidth()
        console.log('Draw')
    },
    toString: function () {
        return 'My width is = ' + this.width
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5)

console.log(Object.keys(sqr1))
console.log(Object.keys(sqr2))

for (var i in sqr1) {
    console.log(i)
}
 



