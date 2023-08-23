// Nested loop

var n = 5

for (var i = 1; i <= n; i++) {
    // console.log(i)
    var result = ' '
    for (var j = 1; j <= i; j++) {
        // console.log(j)
        result += ' j' + ' '
        
    }
    console.log(result);
}
 
var n = 10

for (i = 1; i <= n; i++) {
    var result = ' '
    for (var j = 1; j <= n; j++){
        result += ' *'
    }
    console.log(result)
}