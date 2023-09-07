const age = parseInt(prompt("quanti anni hai?"));

const km = parseInt(prompt("quanti chilometri vuoi percorrere?"));
const priceForKm = 0.21;
const priceTrip = km * priceForKm;
const percentageSubMinor = 20;
const percentPriceMinor = percentageSubMinor / 100;
const priceMinor = priceTrip - percentPriceMinor;
const percentageSubOver = 40;
const percentPriceOver = percentageSubOver / 100;
const priceOver = priceTrip - percentPriceOver;
let textBot = "Il prezzo del tuo biglietto è € ";
let message;
let verificaAge = Math.sign(age);
let verificaKm = Math.sign(km);

if (age < 18)
  message =
    textBot + priceMinor.toFixed(2) + "*** con uno sconto speciale di 20% ***";
else if (age >= 65)
  message =
    textBot + priceOver.toFixed(2) + "*** con uno sconto speciale di 40% ***";
else message = textBot + priceTrip;

// operazione di verifica **************
if (age <= 2 && age > 0) message = "per te il biglietto è gratis :)";
else if (verificaKm === 0 || verificaAge === 0)
  message = "Oops!!! non è possibile emettere il biglietto :(";
else if (verificaAge === -1 || verificaAge === -1)
  message = "ATTENZIONE!! vengono accettate solo risposte reali !!";
else if (verificaAge != 1 || verificaAge != 1)
  message = "ATTENZIONE!! non puoi lasciare nessun campo vuoto !!";

document.getElementById("final-price").innerHTML = message;
