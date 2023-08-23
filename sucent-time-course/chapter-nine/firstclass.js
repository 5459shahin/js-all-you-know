// First class Function

function add(a, b) {
    return a + b
}
// * 1. A function can be Stored in a Variable
var sum = add
console.log(sum(4, 5))

// * 2. A function can be Stored in a Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5, 3))

// * 3. A function can be Stored in a Object
var obj = {
    sum: add
}
console.log(obj)
console.log(obj.sum(7, 9))

// * 4. We can Create function as Need
setTimeout(function () {
    console.log('I have created...')
}, 1000)

// * 5. We can Pass function as an Need
// * 6. We can return Function from Another Function

