// !problem-01
// function cubeNumber(number) {
//     if (typeof number!== 'number' || number<=0) {
//         return 'Error'
        
//     }
  
//     return number**3
  

// }
// console.log(cubeNumber(-10));

// !problem-02

// function matchFinder(string1, string2) {
//  if (typeof string1 !== 'string' || typeof string2 !=='string') {
//     return 'invalid'
    
//  }
//  else if (string1.includes(string2)) {
//     return true
//  }
//   else {
//     return false
//  }
 
// }

// console.log(matchFinder('John Doe','ohn'));
// console.log(matchFinder('JavaScript','Code'));
// console.log(matchFinder('Peter Parker','Pen'));
// console.log(matchFinder('Peter Parker','pet'));
// console.log(matchFinder('pit',4));


// !problem-03

// function sortMaker(arr) {
//      if(arr[0] <0 || arr[1] <0){
//     return 'Invalid Input'
//   }
//    else if (arr[0] < arr[1]) {
//     arr.sort(function(a,b){
//         return b - a
//     })
//   }
//  else if(arr[0] > arr[1]){
//     arr.sort(function(a,b){
//         return b - a
//     })
//  }
//  else if( arr[0] === arr[1]){
//     return 'Equal'
//  }
//   else{
//     return arr
//   }
//   return arr
// }


// console.log(sortMaker([2,3]));
// console.log(sortMaker([4,2]));
// console.log(sortMaker([4,4]));
// console.log(sortMaker([1,2]));
// console.log(sortMaker([4,-2]));

// ! problem-04
// 10,15A, Earth Perfect
// 10,__, Earth Perfect
// 10, __, __

// function findAddress(obj) {
//     let streetResult ='';
//     if (obj.street) {
//      streetResult=obj.street;
      
//   }
//     else{
//         streetResult ='__'
//     }
//     let houseResult =''
//     if (obj.house) {
//         houseResult=obj.house
//     }
//     else{
//         houseResult ='_'
//     }
    // let societyResult =''
    // if (obj.society) {
    //     societyResult=obj.society
    // }
    // else{
    //     societyResult ='_'
    // }
    
    // return `${streetResult},${houseResult}, ${societyResult}`

// }


    
//  console.log(findAddress({street: 10,house: '15A',society:'Earth Perfect'}));
//  console.log(findAddress({street: 10,society:'Earth Perfect'}));
//  console.log(findAddress({street: 10}));

//  ! problem-05
function canPay(changeArray, totalDue) {
 
 if (changeArray.length===0) {
    return 'empty'
 }
    let total = 0;
  for (const value of changeArray) {
      total+=value
  }
  if (total>=totalDue) {
      return true
  }
  else{
    return false
  }
}
console.log(canPay([1,2,5],10));

