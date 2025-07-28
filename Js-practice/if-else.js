
/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burgerPrice=501;
 if (burgerPrice>500) {
    console.log('free coke');
    
 } else {
    console.log('coke price 30tk');
    
 }

 /*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const BMI = 16;
if (BMI<18.5) {
    console.log('you are underweight');
    
}
else if(BMI>=18.5 && BMI<=24.9){
    console.log('you are normal');
    
}
else if(BMI>=25 && BMI<=29.9){
    console.log('you are overweight');
    
} 

else {
    console.log('you are obese');
    
}

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const mark=50;
if (mark>=90 && mark<100) {
    console.log('A+');
    
}
else if(mark>=80 && mark<90){
    console.log('A');
    
}
else if(mark>=70 && mark<79){
    console.log('B');
    
}
else if(mark>=60 && mark<69){
    console.log('C');
    
}
else if(mark>=0 && mark<59) {
    console.log('fail');
    
}
else{
    console.log('invalid');
    
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myMark= 90;
const frndMark=80;
 if (myMark>80 && myMark<100) {
    if (frndMark>=80 && frndMark<100) {
        console.log('go for lunch');
        
    } else if(frndMark<80 && frndMark>=60){
        console.log('good luck for next time');
        
        
    } else if (frndMark<60 && frndMark>=40){
        console.log('message unseen');
        
    } else if(frndMark<40){
        console.log('block');
        
    } else{
        console.log('invalid');
        
    }
    
 } else if(myMark<80) {
    console.log('go home and sleep');
    
    
 }
 else{
    console.log('invalid');
    
 }

 /***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

const num1=10;
const num2=20;
if (num1>num2) {
    result=num1*2;
    console.log(result);
    
    
} else {
    result=num1+num2;
    console.log(result);
    
}
//ternary..........
result=num1>num2?console.log(result=num1*2):console.log(result=num1+num2);

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age =40;
const ticketPrice=800;
if (age<10) {
    console.log('ticket free');
    
}
else if(age<=30){
    // discount 50%
   const price= ticketPrice*50/100;
    const payAmount= ticketPrice-price;
    console.log(payAmount);
}
else if(age>=60){
    // discount 15%
   const price= ticketPrice*15/100;
    const payAmount= ticketPrice-price;
    console.log(payAmount);
}

else {
    console.log('Regular ticket fare 800 tk');
    
}