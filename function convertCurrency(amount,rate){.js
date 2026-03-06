function convertKES(amount){
  
let usdRate = 0.0073; // Example conversion rate from KES to USD
let gbpRate = 0.0053; // Example conversion rate from KES to GBP
let eurRate = 0.0062; // Example conversion rate from KES to EUR

let usdAmount = amount * usdRate;
let gbpAmount = amount * gbpRate;
let eurAmount = amount * eurRate;

console.log('KES:', amount);
console.log('USD:', usdAmount);
console.log('GBP:', gbpAmount);
console.log('EUR:', eurAmount);
}