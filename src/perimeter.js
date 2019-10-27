const readlineSync = require("readline-sync");
let Width = readlineSync.question("\nWidth: ");
const Width_cm = Width*2.54
let Length = readlineSync.question("Length: ");
const Length_cm = Length*2.54
let Perimeter = Length_cm+Width_cm+Length_cm+Width_cm
Perimeter = Perimeter.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nA(n) " + Width + "-by-" + Length + " inch sheet of paper has a perimeter of " + Perimeter + " centimeter(s). ");
