// Execution Context


function a() {
    b()
    console.log('Im a Function A')
}

function b() {
    d()
    console.log('Im a Function B')
}

function c() {
    
    console.log('Im a Function C')
}

function d() {
    c()
    console.log('Im a Function D')
}
var x = 100
a()

console.log('I am Global')



// Execution of C Context
// Execution of D Context
//Execution of B Context
//Execution of A function
// Execution of global context



// Creational Phase
// Executional Phase