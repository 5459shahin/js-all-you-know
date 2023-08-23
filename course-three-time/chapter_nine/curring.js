function add(a, b, c,) {
    return a + b + c
}

// var sum = add(41, 52, 63)
// console.log(sum)

function currying(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

var result = currying(5)(10)(15)

console.log(result)
