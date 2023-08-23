var addition = function(a, b) {
    return a + b
}


setTimeout(function () {
    console.log('I will Call After 5 second')
}, 5000)

var another = addition
console.log(another(7, 8))