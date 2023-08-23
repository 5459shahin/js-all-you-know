var personas = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'D',
        age: 26
    },
    {
        name: 'C',
        age: 21
    }
]

var arr = [4, 8, 1, 6, 7, 9, 4, 3, 5, 6, 8, 2, 1, 7, 1] 

// arr.sort()
// console.log(arr)

// personas.sort()
// console.log(personas);

arr.sort(function (a, b) {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})

console.log(arr)

personas.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
});

console.log(personas);

var result = arr.every(function (value) {
    return value % 2 === 0
})
console.log(result)

var result1 = arr.every(function (value) {
    return value % 2 === 1
})
console.log(result1)

var result2 = arr.every(function (value) {
    return value>= 0
})
console.log(result2)

var result3 = arr.some(function (value) {
    return value % 2 === 1
})
console.log(result3)

var result4 = arr.some(function (value) {
    return value < 0
})
console.log(result4)

