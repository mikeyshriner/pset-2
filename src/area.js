const readlineSync = require("readline-sync");
let Width = readlineSync.question("What is the width? ");
const Width_mm = Width*25.4
let Length = readlineSync.question("What is the length? ");
const Length_mm = Width*25.4
console.log(" A(n) " + Width + " by " + Length + " inch sheet of paper has an area of " + Width_mm*Length_mm + " millimeters. ");
