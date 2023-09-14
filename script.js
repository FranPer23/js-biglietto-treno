//chiedere all'utente il n di km
//chiedere età passeggero

//IN BASE A
//0.21€ al km
//20% sconto < 18 anni
//40% sconto > 65 anni

//prezzo tot viaggio?

const userKm = parseInt(prompt("Quanti km vuoi percorrere?"));
console.log(userKm, typeof userKm);

const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge, typeof userAge);

const kmPrice = 0.21;

const ticketPriceFull = kmPrice * userKm;

let ticketPrice = ticketPriceFull;

if (userAge < 18) {
  ticketPrice = ticketPriceFull - (ticketPriceFull * 20) / 100;
} else if (userAge >= 65) {
  ticketPrice = ticketPriceFull - (ticketPriceFull * 40) / 100;
}

let message = `${ticketPrice.toFixed(2)}`;

document.getElementById("result").innerHTML = message;
