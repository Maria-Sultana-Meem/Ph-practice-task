
// ! question.....
/*
1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/
// !answer......
/*
const fruits = ['Mango','black berry','jackfruit','guava','lichi']
console.log(fruits[3]);
fruits[2]='jambura';
console.log(fruits);
*/


// ! question...........
/*!SECTION2. Add or remove elements

Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output */

// ! answer........
/*
 const touristSports=['sant-martin','sundarban','bandarban']
 touristSports.push('kuakata')
 touristSports.push('srimangal','paharpur')
 console.log(touristSports);
 touristSports.pop()
 console.log(touristSports);
 */

//  ! question............
/*
3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/

 // ! answer........ includes
/*
 const books= ['bangla','english','math','geography','science']

 console.log(books.includes('javascript'));
 if (books.includes('history')) {
    console.log('the element is present in the array');
    
 } else {
    console.log('the element is not present in the array');
    
 } */

    //  ! question............

    /*!SECTION4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/
 
 // ! answer........ 
/*
 const students=['maria','sultana','meem']
 const fruits=[];
 const numbers = '1,2,3,4'
 const tourist ='[]'
 console.log(Array.isArray(students));
 console.log(Array.isArray(fruits));
 console.log(Array.isArray(numbers));
 console.log(Array.isArray(tourist));
  
 if (Array.isArray(students)) {
    console.log('this variable is an array');
    
  } else {
    console.log('this variable is not an array');
    
  }
 if (Array.isArray(tourist)) {
    console.log('this variable is an array');
    
  } else {
    console.log('this variable is not an array');
    
  }
    */

//   ! question........
  /*
  
5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/
// ! answer.........

const books= ['bangla','english','math','geography','science'];
const touristSports=['sant-martin','sundarban','bandarban'];
// console.log(books.concat(touristSports));
const newArray= books.concat(touristSports)
console.log(books);
console.log(touristSports);
console.log(newArray);





