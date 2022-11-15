// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Golf 2022"
// console.log(cohort.split(""))

// // a) Your answer:   'G', 'o', 'l',
//   'f', ' ', '2',
//   '0', '2', '2'


// // b) Verify and explain: 
// The ".split" method is able to convert a string into an array with new substrings. In our variable we have a string, The string has 8 characters. (when we log our code to we return out index value, ".length" we come back with a lenth of nine, due to the space betweeen golf and 2022) The letters are spaced out in individual characters because we are. 1, splitting the charaters in the arrat and we are passing within dot split a peramtere "" quotations which will give us a return with each charater with in our sting a quatitions when spaced out.   








// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined 
// The answer is awkwrdly correct, because the function is missing a return. It does not have a output a value. When we see undefined in our console its a good idea to look back and see if we have a return in our function! 






// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain:The answer was correct. Here we see an arrow function in which the word return is not written because the code is on one line. The .map method is applied to the array. It takes an argument of a function and maps over the array by iterating oveer each value and multiplying it by two.





// --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: The, ".filter" is a method which takes an argument of a function, is a Boolean. As it goes through the array, it creates a new array including only the values. When we input these values into the conditional statement, we return to a Boolean statement  of true. In this code, the coditional statement provided used a modulo operation as well as a bang operator. Indicating that the remainder of the value divided by 2 does not equal to 0, in other words, it is an odd number.








// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: "Javascript"
// b) Verify and explain: This is because myCodingSkills is an object. Utilizing dot notation we are able to get access within the object to languages. We are then able to access Javascript utilizing, index [0] reaching the first value in the array of languages.


// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name,
//     this.cohort = "Foxtrot",
//     this.year = 2022
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)
//output: Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }
// a) Your answer: name George,cohort Foxtrot,year 2022
// b) Verify and explain: This is because of the new object made utilizing the new keyword and the Learn keyword with the variable learnStudent. Creating the George name along with the following values indicated by the class Learn. Which are cohort, Foxtrot and year, 2022.
