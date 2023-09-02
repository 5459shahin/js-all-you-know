// Chapter Five
// String in Javascript

// What is String?
/* 
var str = ' Something' // This is a String retaral
var str2 = String('Something') // This is a String Constructor
console.log(str2)
 */

/* 
var n = 10
var str = n + ''
var str1 = n.toString()
var str2 = String(n)
// var str = n.toString()
console.log(str2)

 */


// *** Escape Notation
/* 
var str = 'This is a \'String'
var str2 = 'This is a \nString'
var str3 = 'This is a\tString'
var str4 = 'This is a \\String'
console.log(str)
console.log(str2)
console.log(str3)
console.log(str4)

 */

// **** String Comparison //

/* 
var a = ' abc'
var b = 'bcd'

console.log(a === b) //false
console.log(a > b) //false
console.log(a < b) // true

console.log( 'a' > 'Z')

 */


// console.log('001' == 1)


var a = 'I am'
var a = 'I am'
var a = 'I am'
var b = 'Shahin'

var c = a.concat(' ',b)
// console.log(c)
// var d = c.substring(5)
// console.log(d)

// console.log(c.charAt(0))
// console.log(c.startsWith('I am'))

/* 
console.log(c.endsWith('Shahin'))

console.log(c.toUpperCase())
console.log(b.toLowerCase())
console.log('     fdgmrtm    '.trim())
console.log(c.split(' '))

 */
/* 

var str = 'Some string'

var length = 0
while (true) {
    if (str.charAt(length) == '') {
        break
    } else {
        length++
    }
}
console.log(length)
console.log(str.length) 
*/


var str = 'my name is Shahin khan'
var length = 0

while (true) {
    if (str.charAt(length) == '') {
        break 
    } else {
        length++
    }
}
console.log(length)
