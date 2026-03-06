

function convertUSD(amount){
  
let kesRate = 129.098171; // Example conversion rate from USD to KES
let gbpRate =  0.748947; // Example conversion rate from USD to GBP
let eurRate = 0.861534; // Example conversion rate from USD to EUR

let kesAmount = amount * kesRate;
let gbpAmount = amount * gbpRate;
let eurAmount = amount * eurRate;

console.log('USD:', amount);
console.log('KES:', kesAmount);
console.log('GBP:', gbpAmount);
console.log('EUR:', eurAmount);
}