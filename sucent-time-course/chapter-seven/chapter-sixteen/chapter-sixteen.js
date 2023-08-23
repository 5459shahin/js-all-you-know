// function changeToInt(v) {
//     let result = Number.parseInt(v);
//     if (!result) {
//         return "Please Provide a value which is able to convert in INt"
        
        
//     }
//     return result
// }

// let result = changeToInt('85.96');
// console.log(result)

// function makeWords(text) {
//     try {
//         let str = text.trim()
//         let words = str.split(' ')
//         return words
//     } catch (e) {
//         // console.dir(e.message)
//         console.dir('Please Provide a Valid TExt')
//     }

//     // let str = text.trim()
//     // let words = str.split(' ')

//     // return words
// }

// let words = makeWords(86)
// console.log(words)

class CustomError extends Error {
    constructor(msg) {
        super(msg)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
    }
}

try {
    console.log('Im line 1')
    throw new CustomError('I am Your Error')
    console.log('Im line 2')
    console.log('Im line 3')
} catch (e) {
    console.dir(e)
    console.log('This is A custom Error message')
} finally {
    console.log('Im finally block')
}