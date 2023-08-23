// **** Chapter Eight: Function in Javascript

// What is Function
// Input Output Processing
/* 
var date = new Date()
date.getFullYear()
console.log(date) 
*/

function functionName() {
    console.log('I am Function')
}

functionName();

function  add () {
    var a = 10
    var b = 20
    console.log(a + b)
}



function sub() {
    var a = 50
    var b = 20
    console.log(a - b)
}

add()
add()
add()
add()
sub()

for (var i = 0; i < 10; i++) {
    functionName()
}