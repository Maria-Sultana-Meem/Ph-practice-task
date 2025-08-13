// !Task 1 :
// Create a Function sum which take 2 value and return the sum of 2 number
// Create a Function multiply which take 2 value and return the sum of 2 number
// Suppose you have 2 numbers a , b print the sum of ( a + b) and ( a x b ) using sum and
// multiply function.
/*
 function sum(input1,input2){
       let result = input1 + input2;
       return result
 }
 function multiply(input1,input2){
       let result = input1 * input2;
       return result
 }
  const a = 4;
  const b =5;
  const finalResult = sum(a,b) + multiply (a,b);
  console.log(finalResult);
  */

//  !Task 2:
// Create a function sumOfArray which takes an array and returns the sum of that array. If the
// input is not an array and if any data not a number found in the array , it will return ‘Invalid’
  
/*
* my solution....
function sumOfArray(array){
    if (Array.isArray(array)===false || typeof array !== 'number') {
        return 'Invalid'
    }
    let sum = 0;
    for (const arr of array) {
        sum += arr
    }
    return sum
}
console.log(sumOfArray([3 , 5 , "eksho" , 3 ] ));
*/
 /*
 * another solution..........
function sumOfArray(arr) {
  let sum = 0;
  if (Array.isArray(arr) == false) {
    return "Invalid";
  }

  for (let num of arr) {
    if (typeof num !== "number") {
      return "Invalid";
    }
    sum = sum + num;
  }

  return sum;
}
let result = sumOfArray([3, 5, "eksho", 3]);
console.log(result);
*/

//!Task 3: Develop a way to think about solving problems
// Create a function countVowels which take a string as input and returns the total number of
// vowels in that string
// If the input is not a string return "Invalid"

/*
* my soultion.....
function countVowels(string){
  
    if (typeof string !== 'string') {
        return 'Invalid'
    }
     let vowels ='aeiou';
     count = 0;
    for (const str of string) {
        if (vowels.includes(str)) {
            count ++
        }
        
    } return count
}
console.log(countVowels("Jhankar miA"));
*/

/*
* another solution..........
 function countVowels (str){
    if (typeof str !== 'string') {
        return 'Invalid'
    }
    let count = 0;
    for(let i = 0; i<str.length;i++){
        if (str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u') {
             count ++
        }
    }
      return count
 }
 console.log(countVowels("Jhankar miA"));
 console.log(countVowels("108"));
 */

// ! : Calculate the cash-out Charge
/*
function  cashOut(money){

    if (typeof money !== 'number' || money<0) {
        return 'Invalid'
    }
  let amount = money * (1.75/100);
  let cashOutAmount= parseFloat(amount.toFixed(4))
  return cashOutAmount
}
console.log(cashOut(2000));
*/

// !Valid Bangladeshi Number
/*
function validContact(contact){
    if (typeof contact !=='string') {
        return 'Invalid'
    }
   if ( contact.startsWith("01") == true && contact.length===11 && contact.includes(' ')=== false) {
           return true
   } 
   else{
    return false
   }
}
console.log(validContact("01987654321"));
*/

//! : Admission Success
/*
 function willSuccess(arr){
   if (!Array.isArray(arr) ) {
       return 'invalid'
   }
    let passCount = 0;
    let failCount =0;
    for (const item of arr) {
        if (item>=50) {
            passCount ++
            
            
        }
         else{
            failCount++
    
         }
       
    }
     return passCount>failCount
 }
 console.log(willSuccess([48, 50, 50, 100]));
 console.log(willSuccess([ 90 , 99 , 87 , 48 , 34 , 49 ] ));
 
*/

// !Valid Proposal
/*
function  validProposal(person1,person2) {
    if (typeof person1 !== 'object' || typeof person2 !=='object') {
        return 'Invalid'
    }
    
     if (person1.gender !== person2.gender && Math.abs(person1.age-person2.age)<=7) {
        return true
     }
     else {
        return false
     }

}

console.log(validProposal({ name: "shuvo", gender: "male", age: 20 },
{ name: "joy", gender: "male", age: 25 }));


console.log(validProposal("Mizan", { name: "mitu", gender: "male", age: 32 }));

console.log(validProposal({ name: "toya", gender: "female", age: 20 },
{ name: "kader", gender: "male", age: 25 }
));

*/


// !Let’s Calculate Total Sleep Time
 
function  calculateSleepTime(times) {
   let count = 0;
   for (const time of times) {
     if (typeof time !== "number") {
      return "Invalid";
    }
    count+=time
    
   }
    let sleepTime= count;
     let hour = Math.floor(sleepTime / 3600);
    //  console.log(hour);
     
     sleepTime = sleepTime % 3600;
       let minute = Math.floor(sleepTime / 60);
    //    console.log(minute);
       
       sleepTime = sleepTime % 60
       let second = sleepTime
    //    console.log(second);
       
     let result= {
        hour: hour,
        minute: minute,
        second: second
     }
    
    
    return result
    
   
}
console.log(calculateSleepTime([1000, 499, 519, 300] ));
console.log(calculateSleepTime([5600]));
console.log(calculateSleepTime([100, 3800, "90"]));

