/* ============================================================================
                Factory Pattern in javascript
    ================================================================== */
/* 
/* 
  var rect = {
    width: 100,
    height: 50,

    draw: function () {
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this)
    },
    
    printProperties: function () {
        console.log("My Width " + this.width);
        console.log("My Height " + this.height);
    } 
  }
*/
// rect.draw()

// rect.height = 100
// rect.draw()

/* 
  function myFunc() {
    console.log(this)
    rect.printProperties()
  }
  new myFunc();

  var another = {
    width: 47,
    height: 56,

    print: rect.printProperties
  }
  console.log(another.print)
  another.print()
*/


var createRect = function (width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("I am a rectangle");
      this.printProperties();
    },

    printProperties: function () {
      console.log("My Width " + this.width);
      console.log("My Height " + this.height);
    },
  };
};

// var rect1 = createRect(10, 8);
// rect1.draw();

// var rect2 = createRect(40, 30);
// rect2.draw();
 
/* ============================================================================
                Constructor Pattern in javascript
    ================================================================== */

/* 
  var Rectangle = function (width, height) {
    this.width = width
    this.height = height

    this.draw = function () {
      console.log("I am a rectangle");
      this.printProperties();
    }

    this.printProperties = function () {
      console.log("My Width " + this.width);
      console.log("My Height " + this.height);
    }
  }
*/

// var rect3 = new Rectangle(10, 8)
// rect3.draw()


/* ============================================================================
                New Keyword in javascript
   ================================================================== */

function myNew(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))

    return obj
}

// var rect4 = myNew(Rectangle, 45, 30)
// rect4.draw()


// var str = new String('str')
// console.log( 'My String is ' + str)



/* ============================================================================
            Function Are Object in javascript
   ================================================================== */

function test() {
    console.log('something')
}

// test();
// console.log(test.name, test.length)

var Rect = new Function('width', 'height',
    `this.width = width
    this.height = height

    this.draw = function () {
      console.log("I am a rectangle");
      this.printProperties();
    }

    this.printProperties = function () {
      console.log("My Width " + this.width);
      console.log("My Height " + this.height);
    }`
)

// var rect5 = new Rect(4, 5)
// console.log(rect5)

/* ============================================================================
           Bind, Call, Apply  in javascript
   ================================================================== */

function myFunc(c, d) {
    console.log(this)
    console.log(this.a + this.b + c + d)
}

// Call, Apply and Bind
// myFunc.call({a: 40, b: 25}, 10, 5)
// myFunc.apply({ a: 400, b: 250 }, [10, 5])

// myFunc.apply({})
// myFunc();

// var test = myFunc.bind({ a: 7, b: 3 });
// test(5, 7)


/* ============================================================================
           Pass By Value vs Pass By Reference  in javascript
           Call By Value vs Call By Reference  in javascript
   ================================================================== */
/* 

var n = 10
function change(n) {
    n = n + 100
    console.log(n )
}
change(n)
console.log(n)

var obj = {
    a: 10,
    b: 20
}

function changeMe(obj) {
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj)
}

changeMe(obj)

console.log(obj)
 */

 /* ============================================================================
          Abstraction in Javascript
   ================================================================== 
 */

   
var Rectangle = function (width, height) {
  
  var position = {
    x: 56,
    y: -100
  }
  
    this.width = width;
    this.height = height;

  var printProperties = function () {
    console.log("My Width " + this.width);
    console.log("My Height " + this.height);
  }.bind(this)
  
  // this.getPosition = function(){
  //   return position
  // }
  
  this.draw = function () {
    console.log("I am a rectangle");
    printProperties();
    console.log('Position: x= ' + position.x + position.y)
  }

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
rect7.draw()
rect7.position = {
  x: 456,
  y: 123
}
console.log(rect7.position);


 

