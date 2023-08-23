function sample(a, b, cb) {
    var c = a + b //13
    var d = a - b // -3

    var result = cb(c , d)
    return result
}

function sum(a, b) {
    return a + b
}

var result = sample(5, 8, sum)
console.log(result)

var result2 = sample(5, 8, function (c, d) {
    return c - d
});

console.log(result2)

var result3 = sample(5, 8, function (c, d) {
    return c * d
})

console.log(result3)