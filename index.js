//for (let age = 30; age < 40; age++) {
 //   console.log(`I'm ${age} years old. Happy birthday to me!`);
//}
//const gifts = ['teddy bear', 'drone', 'doll']
//function wrapGifts(gifts) {
   // for (let i = 0; i < gifts.length; i++) {
  //      console.log(`Wrapped ${gifts[i]} and add a bow!`)
  //  
 //   }
 //   return gifts;
//}

const wrapMethod = require("sinon/lib/sinon/util/core/wrap-method");

//wrapGifts(gifts);
function writeCards(names, event) {
    let messages = [];
    for(let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages; }


function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}