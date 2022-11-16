// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]


// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// describe("divideBy3", () => {
//     it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
//         const object1 = { number: 15 }
//         const object1Output = "15 is divisible by three"
//         const object2 = { number: 0 }
//         const object2Output = "0 is divisible by three"
//         const object3 = { number: -7 }
//         const object3Output = "-7 is not divisible by three"
//         expect(divideBy3(object1)).toEqual(object1Output)
//         expect(divideBy3(object2)).toEqual(object2Output)
//         expect(divideBy3(object3)).toEqual(object3Output)
//     })
// })
    // ReferenceError: divideBy3 is not defined

// b) Create the function that makes the test pass.
//Use a conditional statement 
//    
//When looking at the problem I need to create a function called divideBy3
// Within the finer workings of the problem we will have one parameter that will equal object.
// When utilizing dot notation we can pass through each object values in the for loop (object.number) because we were given objects and not an arrays.
// I re-did this problem three times over a couple days and took took way too long to finish. This weekend I wanted to start new habits. I want look at the problem. Come up with a fesable solution. My bad habit is taking took long and double checking my self. when i feel like. I should find a solution and and run the code as soon as posible. Breaking and fix it as soon as I can. In this problem, However, upabove I used object, instead of object.number and could not understand why I kept getting back undefined.


// const divideBy3 = (object) => {
//     for (let i = 0; i < object.number; i++) {
//         if (object.number % 3 === 0){
//             return object.number + " is divisible by three"
//         } else if (object.number % 3 != 0) {
//             return object.number + " is not divisible by three"
//         // 
//         } else {
//             return "Error"
//         }  
//      }
// }
// divideBy3 › takes a object as an argument and decides if the number inside it is evenly divisible by three or not
// 46 |         const object3Output = "-7 is not divisible by three"
// 47 |         expect(divideBy3(object1)).toEqual(object1Output)
// > ● 48 |         expect(divideBy3(object2)).toEqual(object2Output)
//    |                                 ^
// 49 |         expect(divideBy3(object3)).toEqual(object3Output)
// 50 |     })
// 51 | })
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// I'm not sure why object2 and object3 are not passing if object.number % 3 !== 0 (the number is not divisible by 3). 




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.



// a) Create a test with expect statements for each of the variables provided.
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]


// describe("capitalized", () => {
//     it("takes in an array of words and returns an array with all the words capitalized", () => {
//         const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//         const randomNouns1Output = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//         const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//         const randomNouns2Output = ["Temperature", "Database", "Chopsticks", "Mango"]
//         expect(capitalized(randomNouns1)).toEqual(randomNouns1Output)
//         expect(capitalized(randomNouns2)).toEqual(randomNouns2Output)
//     })
// })

//  ReferenceError: capitalized is not defined

// b) Create the function that makes the test pass.


// Create a function called capitalized that takes in an array of words and returns an array with all the words capitalized
// One paramter - array
// I will Iterate the array by using .map() so that we can modify each value in the array 
// Use .toUpperCase() to uppercase all the strings in the array (.toUpperCase() can only be used in a string)
// Use .slice() to separate the value index 0 and value index one so start at index 1 and below, the letters will be lowercased
// We can use, .toLowerCase() to lower case the letters
// Return mapped array 

// const capitalized = (array) => {
//     return array.map(value => value[0].toUpperCase() + value.slice(1).toLowerCase()) 
// }

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total

//  ReferenceError: capitalized is not defined






// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// Expected output: 1
// const vowelTester2 = "academy"
// Expected output: 0
// const vowelTester3 = "challenges"
// Expected output: 2

// describe("firstVowel", () => {
//     it("takes in a string and logs the index of the first vowel", () => {
//         const vowelTester1 = "learn"
//         const vowelTester1Output = 1
//         const vowelTester2 = "academy"
//         const vowelTester2Output = 0
//         const vowelTester3 = "challenges"
//         const vowelTester3Output = 1
//         expect(vowelTester1).toEqual(vowelTester1Output)
//         expect(vowelTester2).toEqual(vowelTester2Output)
//         expect(vowelTester3).toEqual(vowelTester3Output)
//     })
// })

// b) Create the function that makes the test pass.
// Create a function called vowel 
// One parameter = string
// Using a forloop, 
// If there is a vowel in the string 
// Push string by using the method .indexof to find the position of the first vowels.
//  Return the index where the first vowel is located at

// const vowel = (string) => {
// let newString = []
//     for (let i = 0; i < string.length; i++){
//         if(string[i] == "a" || "e" || "i" || "o" || "u")
//             newString.push(string[i])
//         }
//             return newString.indexOf()
// }
// ● firstVowel › takes in a string and logs the index of the first vowel

// expect(received).toEqual(expected) // deep equality

// Expected: 1
// Received: "learn"

//   157 |         const vowelTester3 = "challenges"
//   158 |         const vowelTester3Output = 1
// > 159 |         expect(vowelTester1).toEqual(vowelTester1Output)
//       |                              ^
//   160 |         expect(vowelTester2).toEqual(vowelTester2Output)
//   161 |         expect(vowelTester3).toEqual(vowelTester3Output)
//   162 |     })

//   at Object.toEqual (code-challenges.test.js:159:30)
// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 2 passed, 4 total

    //  After running console.log to this function, I get a return of -1.