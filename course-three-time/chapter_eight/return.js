function addAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

var result = addAll(1, 2, 3)
console.log(result)


// function person(name, email) {
//     return {
//         name: name,
//         email: email
//     }
// }

// var name = person("Km Shahin", "shahin@gmail.com");

// console.log(name)


function person(name) {
    return function (email) {
       console.log(`Sending name ${name} And Sending Email ${email}`)
    }
}

var name = person("Km Shahin");
var email = name('shahin@gmail.com')





/* var person = (name) => (email) => { name: name; email: email}
console.log (person)
var name = person("Km Shahin");
var email = name("shahin@gmail.com");
console.log(email) */