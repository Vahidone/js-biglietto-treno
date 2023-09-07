const age = parseInt(prompt("quanti anni hai?"));

const km = parseInt(prompt("quanti chilometri vuoi percorrere?"));
const price = km * 0.21;
const percentageSubMinor = 20;
const percentPriceMinor = percentageSubMinor / 100;
const priceMinor = price * percentPriceMinor;
const percentageSubOver = 40;
const percentPriceOver = percentageSubOver / 100;
const priceOver = price * percentPriceOver;
const roundedResult = price.toFixed(2);
let finalPrice;

if (age < 18) finalPrice = roundedResult - priceMinor;
else if (age >= 65) finalPrice = roundedResult - priceOver;
else finalPrice = roundedResult;

const result = ` Il prezzo del tuo biglietto è € ${finalPrice}`;

document.getElementById("final-price").innerHTML = result;
