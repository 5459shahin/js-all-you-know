//  For LOOpsd

// for (var i = 0; i < 100; i++) {
//     console.log((i+ 1) +' KM Shahin')
// }

/*  
for (initializer, condition, increment) {

}
 */

/*
 for (var i = 0; i <= 10; i++){
    console.log(i)
} 
*/


// for (var i = 0; i <= 100; i++){
//     if (i % 2 === 1) {
//       console.log(i);
//    }
// }

// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//     console.log(sum + ' + ' + i + ' = ' + (sum + i));
//     sum += i
// }

// console.log('result = ' + sum )


var sum = 0;
for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      // console.log(i)
      console.log(sum + " + " + i + " = " + (sum + i));
          sum += i
    }
}
console.log("result = " + sum);