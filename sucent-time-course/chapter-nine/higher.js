function add(a, b) {
    return a + b
    
}

function manipulate(a, b, func) {
    var c = a + b
    var d = a - b

    return function() {
        var m = func(a, b);
        console.log(m)
        return c*d*m
    }
    
}

var multiply = manipulate(3, 4, add)
console.log(multiply())
