// Closur is when a function is able to remember and access it's lexical scope even when that function executing outstde it's lexical scope

// able to remember and access it's lexical scope even
// when that function executing outstde it's lexical scope

// function test() {
//     var msg = 'I am Learing lexical Scope and Closure'

//     function sayMsg() {
//         console.log(msg)
//     }
//     sayMsg()
// }


/* function test() {
  var msg = "I am Learing lexical Scope and Closure"

  return function () {
    console.log(msg);
  }
  
}
var sayMsg = test();
sayMsg() */

for (var i = 1; i <= 5; i++) {
    (function (n) {
       setTimeout(function () {
         console.log(n);
       }, 1000 * n);
   })(i)
}