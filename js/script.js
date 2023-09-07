const age = parseInt(prompt("quanti anni hai?"));

const km = parseInt(prompt("quanti chilometri vuoi percorrere?"));
const price = km * 0.21;
const percentageSubMinor = 20;
const percentPriceMinor = percentageSubMinor / 100;
const priceMinor = price * percentPriceMinor;
const percentageSubOver = 40;
const percentPriceOver = percentageSubOver / 100;
const priceOver = price * percentPriceOver;
let result;
const roundedResult = price.toFixed(2);

if (age < 18) result = roundedResult - priceMinor;
else if (age >= 65) result = roundedResult - priceOver;
else result = roundedResult;

const message = ` Il prezzo del tuo biglietto è € ${result}`;

document.getElementById("final-price").innerHTML = message;
