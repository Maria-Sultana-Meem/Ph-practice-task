// problem-01

function totalFine( fare ) {
     if (typeof fare !=='number' || fare<=0) {
            return "Invalid"
          }
    const fine = fare + fare * (20/100) + 30;
    return fine

}

// problem-02


function  onlyCharacter( str ) {
      if (typeof str !=='string') {
        return "Invalid"
      }  
    let closing =str.split(' ').join('');
    let character =closing.toUpperCase();
    return character
}

// problem=03

 function  bestTeam( player1, player2 ) {
           
 if (typeof player1 !=='object' || typeof player2 !=='object') {
     return 'Invalid'
       }

      let firstTeam = player1.foul + player1.cardY+ player1.cardR;
      let secondTeam = player2.foul + player2.cardY+ player2.cardR;
      
      if (firstTeam<secondTeam ) {
           return player1.name
      }
      else if(firstTeam>secondTeam){
        return player2.name
      }
      
      else if(firstTeam===secondTeam){
        return "Tie"
      }
      else{
       return "Invalid"
      }
     };

    
     //  problem-04

     function  isSame(arr1 , arr2 ) {
         if (!Array.isArray(arr1) || !Array.isArray(arr2) ) {
             return "Invalid"
         } 
     
         for (let i=0;i<arr1.length;i++) {
             
             if (arr1[i] !==arr2[i] || arr1.length !==arr2.length) {
                  return false
             }
         }
         return true
        };

     //  problem-05

     function  resultReport( marks ) {
      if (!Array.isArray(marks)) {
        return "Invalid"
      }  
      
      let sum=0;
      let passMark =0;
      let failMark=0;
      for (const mark of marks) {
          sum+=mark
          if (mark>=40) {
              passMark++
          }
          else{
            failMark++
          }
      }
      let avgMark=Math.round(sum/marks.length);
        
        avgMark= marks.length> 0 ? avgMark : 0;
      const result ={
            finalScore:avgMark,
            pass:passMark,
            fail:failMark
      }  
      return result      
};



  