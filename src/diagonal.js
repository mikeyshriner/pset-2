const readlineSync = require("readline-sync");
let Width = readlineSync.question("\nWidth: ");
let Length = readlineSync.question("Length: ");
let Diagonal1 = (Length*Length)+(Width*Width)
let Diagonal = Math.sqrt(Diagonal1)
Diagonal = Diagonal.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nA(n) " + Width + "-by-" + Length + " inch sheet of paper has a diagonal of " + Diagonal + " inch(es). ");
