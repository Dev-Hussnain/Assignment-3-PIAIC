//Assignment NO 2:

const question = require('prompt-sync')();
const totalNumbers : number = parseInt(question('What are the total numbers?'));
const numbersObtained : number = parseInt(question('How many numbers did you obtain?'));

function gradingSystem():void {
   let numbers:number = numbersObtained;
   let total:number = totalNumbers;
   let percentage:number = (numbers * 100) / total;
   if(percentage >= 95 ){
    console.log(`Your percantage is ${percentage}%. You had given an exceptional performance and Your Grade A++`)
   } else if( percentage >= 90){
    console.log(`Your percantage is ${percentage}%. You had given an outstanding performance and Your Grade A+`)
   } else if( percentage >= 85){
    console.log(`Your percantage is ${percentage}%. You had given an excellent performance and Your Grade A`)
   } else if( percentage >= 80){
    console.log(`Your percantage is ${percentage}%. You had given an very good performance and Your Grade B++`)
   } else if( percentage >= 75){
    console.log(`Your percantage is ${percentage}%. You had given an good performance and Your Grade B+`)
   } else if( percentage >= 70){
    console.log(`Your percantage is ${percentage}%. You had given an fairly good performance and Your Grade B`)
   } else if( percentage >= 60){
    console.log(`Your percantage is ${percentage}%. You had given an Above Average performance and Your Grade C`)
   } else if( percentage >= 50){
    console.log(`Your percantage is ${percentage}%. You had given an Average performance and Your Grade D`)
   } else if( percentage >= 40){
    console.log(`Your percantage is ${percentage}%. You had given an Below Average performance and Your Grade E`)
   } else if( percentage < 40){
    console.log(`Your percantage is ${percentage}%. You had given an Unsatisfactory performance and You are Fail`)
   }
}
gradingSystem()