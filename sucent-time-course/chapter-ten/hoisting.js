var a = 100
// newPrint(a)

print(10)

var newPrint = print
newPrint(45)

function print(a) {
    console.log(a)
}

print(a)

// Creational Phase
// a = undefined
// newPrint undefined
// print = ref

// executional Phase
// a = 100
// newPrint = ref