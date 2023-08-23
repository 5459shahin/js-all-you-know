// function sum(a, b, c) {
//     return a + b + c
// }

// const result = sum(5, 5, 5)
// console.log(result)



// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// const result = sum(5)
// const result2 = result(5)
// const result3 = result2(10)
// console.log(result3)

/* 
function sendAutoMail(to) {
    return function (subject) {
        return function (body) {
            console.log(`Sending Email ${to} This Subject ${subject} With This 
             Massage ${body}`)
        }
    }
}


const step1 = sendAutoMail('shahin@gmail.com')

const step2 = step1('test email test')

const step3 = step2('this is from hero alom')
       
 */

const sendMail = (to) => (subject) => (body) =>
  console.log(`Sending Email ${to} This Subject ${subject} With This 
             Massage ${body}`);

console.log(
  sendMail("shahin@gmail.com")("test email test")("this is from hero alom")
);           