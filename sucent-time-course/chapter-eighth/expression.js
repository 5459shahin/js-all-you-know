var addition = function (a, b) { // This is function Expression
    return a + b
}

console.log(addition(10, 40));

setTimeout(function () { // This is anonimus function
    console.log(('I Will Call After 5 Second'))
}, 5000)

var another = addition;

console.log(another(7, 8))