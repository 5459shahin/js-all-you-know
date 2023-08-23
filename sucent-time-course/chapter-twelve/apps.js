// var rect = {
//     width: 100,
//     height: 50,

//     draw: function () {
//         console.log('I am a rectangle')
//         this.pintProperties()
//         console.log(this)

//     },

//     pintProperties: function () {
//         console.log("My Width is = " + this.width);
//         console.log("My Height is = " + this.height);
//     }
// }

// rect.draw()

// rect.height = 100

// rect.draw()

// function myFunc() {
//     console.log(this)
//     rect.pintProperties()
// }

// new myFunc()

// var another = {
//     width: 47,
//     height: 56,
//     print: rect.pintProperties
// }
// console.log(another.print)
// another.print()


// var createRect = function (width, height) {
//     return {
//       width: width,
//       height: height,

//       draw: function () {
//         console.log("I am a rectangle");
//         this.pintProperties();
//         console.log(this);
//       },

//       pintProperties: function () {
//         console.log("My Width is = " + this.width);
//         console.log("My Height is = " + this.height);
//       },
//     };
// }

// var rect1 = createRect(10, 8);
// rect1.draw()

// var rect2 = createRect(40, 30)
// rect2.draw()


// constructor patten

// var Rectangle = function(width, height) {
    // this.width = width
    // this.height = height

    // this.draw = function() {
    //     console.log("I am a rectangle")
    //     this.pintProperties()
    //     console.log(this)
    // }

    // this.pintProperties = function () {
    //     console.log("My Width is = " + this.width);
    //     console.log("My Height is = " + this.height);
    // }
// }

// var rect3 = new Rectangle(20, 30)
// rect3.draw()


// function myNew(constructor) {
//     var obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     var argsArray = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj, argsArray.slice(1))
//     return obj
// }

// var rect4 = myNew(Rectangle, 54, 30)
// rect4.draw()

// var str = new String('str')
// console.log('My String is ' + str)

/* 
function test() {
    console.log('something')
}
console.log(test.name, test.length)

var Rect = new Function(
  "width",
  "height",
  ` this.width = width
    this.height = height

    this.draw = function() {
        console.log("I am a rectangle")
        this.pintProperties()
        console.log(this)
    }

    this.pintProperties = function () {
        console.log("My Width is = " + this.width);
        console.log("My Height is = " + this.height);
    }`
);

var rect5 = new Rect(4, 5)
console.log(rect5)
 */
function myFunc(c, d) {
    console.log(this)
    console.log(this.a + this.b + c + d)
}

// // Call, Apply
// myFunc.call({a: 40, b: 25}, 10, 5)
// myFunc.apply({a: 400, b: 250}, [10, 5])
// myFunc.apply({})
// myFunc()

// var testBind = myFunc.bind({ a: 7, b: 3 }, 5, 5)
// testBind(5, 7)

/* ************************************************************ 
        1. Pass by Value vs Pass by Reference
        2. Call by Value vs Call by Reference
 ************************************************************ */

var n = 10

function change(n) {
    n = n + 100
    console.log(n)
}
change(n)

console.log(n)

var obj = {
    a: 10,
    b: 20
}

function changeMe() {
     obj.a + 100
     obj.b + 100
    console.log(obj)
}

changeMe(obj)
console.log(obj)


var Rectangle = function(width, height) {
    this.width = width
    this.height = height
    var position = {
        x: 56,
        y: -100
    }

    var pintProperties = function () {
        console.log("My Width is = " + this.width);
        console.log("My Height is = " + this.height);
    }.bind(this)

    // this.getPosition = function () {
    //     return position
    // }

    this.draw = function () {
        var name = "Km Shahin";
        console.log("I am a rectangle");
        pintProperties();
        console.log('Position: x = ' +' y=' + position.y);
    };

    Object.defineProperty(this, 'position', {
        get: function () {
            return position
        },
        set: function (value) {
            position = value
        }
    })
}

var rect7 = new Rectangle(45, 30)
rect7.draw(47, 56)
rect7.position = {
    x: 456,
    y: -123
}
console.log(rect7.position);
