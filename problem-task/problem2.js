// !Find the lowest number in the array below.
/*
const heights2 = [167, 190, 120, 165, 137];
function lowestNumber (numbers){
    let low = numbers[0];
 for (const num of numbers) {
      if (num<low) {
          low=num
      }
    
 }
  return low
}
console.log(lowestNumber(heights2));
*/
// !Find the friend with the smallest name
/*
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed','m'];

function smallestName(names){
   
    let smallestName= names[0]
     
     
    for (const name of names) {
       if (name.length<smallestName.length) {
          smallestName=name
       }
        
    }
    return smallestName
}
console.log(smallestName(heights2));
*/

// !Your task is to calculate the total budget required to buy electronics:
   

// function calculateElectronicsBudget(){
//    let laptop = 35000;
//   let  tablet = 15000 
//    let mobile = 20000 
//    const totalMoney=laptop + tablet + mobile
//    return totalMoney
// }
// console.log(calculateElectronicsBudget());

// !You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.


/*
  const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function  findAveragePhonePrice(phones){
           sum = 0;
        for (const phone of phones) {
            sum =sum+ phone.price
            
        }
       const avg= sum/phones.length;
       return Math.round(avg)
        
    }
   console.log(findAveragePhonePrice(phones));
   */

//    !For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.


 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

        function sumOfSalary(salary){
               total=0;
            for (const employees of salary) {
                total=total+ employees.experience*employees.increment+employees.starting
            }
            return Math.round(total/12)
        }
       console.log(sumOfSalary(employees));
       
