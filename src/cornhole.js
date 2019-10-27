const readlineSync = require("readline-sync");

const Width = 24
const Length = 48
const Diameter = 6
let Area = (Width) * (Length);
let Circle = Math.PI * (Diameter * 0.5) * (Diameter * 0.5);
let Surface = (Area) - (Circle)
Surface = Surface.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
console.log("\nThe surface area of a standard Cornhole board is " + Surface + " square inch(es).");
