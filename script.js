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

let  ticketPrice = kmPrice * userKm

if (userAge < 18) {
    ticketPrice = ticketPrice - 20%

} 

if (userAge > 65) {
    ticketPrice = ticketPrice - 40%
}

let message = `il prezzo è ${ticketPrice}`;

document.getElementById ('result').innerHTML = message
