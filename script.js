//chiedere all'utente il n di km
//chiedere età passeggero

//IN BASE A
//0.21€ al km
//20% sconto < 18 anni
//40% sconto > 65 anni

//prezzo tot viaggio?

const userKm = parseInt (prompt ('Quanti km vuoi percorrere?'));
console.log (userKm, typeof userKm);

const userAge = parseInt (prompt('Quanti anni hai?'));
console.log (userAge, typeof userAge);

const kmPrice = 0.21;

let  ticketPriceFull = kmPrice * userKm
let percentageMin = ticketPriceFull * 20 / 100;
let percentageMax = ticketPriceFull * 40 / 100;

if (userAge < 18) {
  
    ticketPrice = ticketPriceFull - percentageMin

} 


if (userAge > 65) {
    
    ticketPrice = ticketPriceFull - percentageMax
}

let message = `il prezzo è ${ticketPrice.toFixed(2)}`;

document.getElementById ('result').innerHTML = message
