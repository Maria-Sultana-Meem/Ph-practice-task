//! Write a function to convert temperature from Celsius to Fahrenheit.

// function celToFer(cel){
// const ferenhite= (cel * 9/5) + 32;
// return ferenhite

// };
// console.log(celToFer(50));


// !You are given an array of numbers. Count how many times the a number is repeated in the array.

// const numbers = [5,6,11,12,98, 5];

// function findNumber(numbers){
//  const newArr =[]
// for (const num of numbers) {
//      if (num===5) {
//         newArr.push(num)
//      }     
// }

// return newArr.length


// }
// console.log(findNumber(numbers));

// !Write a function to count the number of vowels in a string.

// const vowels = 'i am a web developer'
// function findVowel(vowels){
//           const vowelArr = []
//     for (const vowel of vowels) {
//         if (vowel==='a' || vowel==='e' || vowel==='i' || vowel==='o' || vowel==='u') {
//             vowelArr.push(vowel)
//         }
        
//     }
//     return vowelArr.length
// }
// console.log(findVowel(vowels));

/*
function findVowel(str){
    const vowels = "aeiou";
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(findVowel('i am a web developer'))
*/

// !Write a function to find the longest word in a given string.

// const str = 'I am learning Programming to become a programmer';
// function bigWord (words){
        
//     const word = words.split(' ')
//     let longestWord = ''
//     for (const big of word) {
//         if (big.length> longestWord.length) {
//             long = big
//         }
         
// }
// return longestWord
// }
// console.log(bigWord(str));


// !Generate a random number between 10 to 20.

const num = Math.floor(Math.random()*11+10)
console.log(num);


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(10, 20));


