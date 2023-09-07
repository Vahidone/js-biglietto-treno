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
let finalPrice;

if (age < 18) finalPrice = priceMinor.toFixed(2);
else if (age >= 65) finalPrice = priceOver.toFixed(2);
else finalPrice = priceTrip;

document.getElementById("final-price").innerHTML = finalPrice;
