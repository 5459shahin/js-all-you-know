// For Loop

// for (var i = 90; i < 100; i++){
//     console.log((i + 1) + "Km Shahin Khan");
// }

var eventNumber = 0;
for (var i = 1; i <= 100; i++) {
    
    if (i % 2 === 0) {

        console.log(eventNumber + " + " + i + " = " + (eventNumber + i));
        eventNumber += i
    }
}

console.log("result " + eventNumber); 

/* var sum = 0;
for (var i = 1; i <= 10; i++) {
     console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum += i
   
}

console.log('result' + sum) */





