// 10,15A, Earth Perfect
// 10,__, Earth Perfect
// 10, __, __

function findAddress(obj) {
  let streetResult = '';
  if (obj.street) {
    streetResult = obj.street
  }
  else{
    streetResult = '__'
  }

  
    let houseResult = '';
    if (obj.house) {
        houseResult = obj.house;
    } else {
        houseResult = '__';
    }
}

console.log(findAddress({street: 10,house: '15A',society:'Earth Perfect'}));
 console.log(findAddress({street: 10,society:'Earth Perfect'}));
 console.log(findAddress({street: 10}));
 
