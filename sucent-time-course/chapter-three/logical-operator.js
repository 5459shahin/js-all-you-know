/* ********************************************************* 
    Logical Operator
    ----------------
    1. &&  And Operator
    2. ||  Or Operator
    3. !   Not Operator

 ********************************************************* */

var a = 10
var b = 20
var c = 30
var d = 40  

if (a > b && c > d) {
    console.log('A is greater than B and C is greater than d')
} else {
    console.log('B is greater Than A And D is greater than c')
}

if (a > b || c > d) {
    console.log('A is greater than B Or C is greater than d')
} else {
    console.log('B is greater Than A Or D is greater than c')
}

var check = !!(a > b)
console.log(check)