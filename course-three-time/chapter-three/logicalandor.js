var name = ''


/* 
var name = ''
if (name.length === 0) {
  name = "Km Shahin";
} else {
  name = "name";
}

console.log(name);
 */

// short hand 
// jodi name variable ar moddhe data thake tahole sei data output dibe. r jodi data na thake tahole alternive hisebe fullName ar || sing r pore je Data thakbe sei Data output dibe.
var fullName = name || 'km Shahin'
console.log(fullName)


var isOk = true

/*
if (isOk) {
    console.log('Everything is Ok')
}
 */

isOk && console.log('Everything is OK') // short hand