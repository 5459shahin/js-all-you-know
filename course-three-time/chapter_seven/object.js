// Chapter Seven: Object in Javascript

/* 
Student 1:
Math: 80
chemistry: 75
Physics: 86
Higher Math: 90
[80, 75, 86, 90]
*/


// Object Literal VS Constructor

/*  Object Literal */
// var obj = {}
// obj.x = 10
// console.log(typeof obj)
// console.log( obj)
/* 
var point = {
    x: 10,
    y: 20
}

// point.y = 30
point.z = 30

console.log(point)

var obj = Object()
obj.a = 10
console.log(obj)


var obj2 = new Object()
obj2.b = 20
console.log(obj2)
 */

var point = {
    x: 10,
    y: 20,
    z: 15
}

/* 
console.log(point.x)
console.log(point.y)
console.log(point.z)
console.log(point.x + point.z)

console.log(point['x'] + point['y'])

var show = 'z'

console.log(point[show])

 */

point.x = 45
point.a = 16
console.log(point)
console.log(point.d)

point['y'] = 100

var prop = 'z'
point[prop] = 55;
console.log(point)

point.a = undefined
console.log(point)

delete point.a
console.log(point)