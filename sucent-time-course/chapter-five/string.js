// String in Javascript


/* var str = 'Something' // This is String Literal
var str2 = String('Something')// This is String Constructor

console.log(str2) */

/* 
var n = 10
var str =  String(n)
console.log(str)
 */

/* ************************************************************ 
                Escape Notation

1. \b	Backspace
2. \f	Form Feed
3. \n	New Line
4. \r	Carriage Return
5. \t	Horizontal Tabulator
6. \v	Vertical Tabulator
 ************************************************************ */
/* 
var str = 'This is a \'String\''
var str1 = 'This is a \n String' // New Line
var str2 = 'This is a \t String' // Space ba Tap 
var str3 = 'This is a \\ String' // Use to  backslash
var str4 = 'This is a \f String' 
console.log (str)
console.log (str1)
console.log (str2)
console.log (str3)
console.log (str4)
 */

/* ************************************************************ 
    String Comparison 
 ************************************************************  */

// var a = 'aaaaaZ'
// var b = "aaaaaz";
// console.log(a > b )

// console.log('a' > 'Z')

// console.log('001' == 1)

var a = 'I am'
var b = "Km Shahin"

var c = a.concat(' ', b)
// console.log(c)

// var d = c.substr(5)
// console.log(d)

// console.log(c.startsWith('I am'))
// console.log(c.endsWith('Shahin8897'))
// console.log(c.toUpperCase())
// console.log(c.toLowerCase())
// console.log('     fjgdjrgrkgkk    '.trim())
// console.log(c.split(' '))

var str = 'Some km Shahin Khan'
// var str2 = str.charAt(11);
// console.log(typeof str2)

/*
var length = 0
 
while (true) {
    if (str.charAt(length) == '') {
        break
    } else {
        length++
    }
}
console.log(length)
 */

console.log(str.length)

