// Insert and Remove Element 
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// insert 9 to Index 3
// arr[3] = 9 // replace element
// arr.push(9) // add a last element
// arr.unshift(9) // add first element

// arr.splice(3, 0, 9, 10)

// arr[3] = undefined
// arr.pop() // remove last element
// arr.shift()// remove first Element
// arr.splice(3, 1)
arr.splice(3, 1 , 44)

console.log(arr)
