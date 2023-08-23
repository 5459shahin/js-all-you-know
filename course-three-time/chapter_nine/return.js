/*
 function greet(msg) {
    function greetings(name) {
        return msg + ', ' + name + ' !'
    }
    return greetings
}

var gm = greet('Good Morning')
var gn = greet('Good Night')
var hello = greet('Hello')
var msg = gm('KM Shahin')
console.log(gn('Twinkle Cats'))
console.log(msg)
console.log(hello("Shegufa Taranjom"));
 */

// function base(b) {
//     return function(n) {
//         var result = 1
//         for (var i = 0; i < b; i++){
//             result *= n
//         }
//         return result
//     }
// }

// var base10 = base(10)
// console.log(base10(2))

// var base5 = base(5)

// console.log(base5(2))
// console.log(base5(3))
// console.log(base5(5))


// function greet(msg) {
//     function greetings(name) {
//         return msg + ', ' + name + '!'
//     }
//     return greetings
// }

// var gm = greet('Good Morning')
// var result = gm('Km Shahin')
// console.log(result)

// var hello = greet('Hello')
// var gn = greet('Good night')

// console.log(hello('segufa taranjom'))
// console.log(gn("Twinkle Cats"));

function base(b) {
    return function(n) {
        var result = 1 
        for (var i = 0; i < b; i++){
             result *= n  
        }
        return result
    }
}

var base10 = base(10)
console.log(base10(2))

var base5 = base(5)
console.log(base5(2))
console.log(base5(3))
console.log(base5(5))


