const readlineSync = require("readline-sync");
let Width = readlineSync.question("\nWidth: ");
const Width_mm = Width * 25.4
let Length = readlineSync.question("Length: ");
const Length_mm = Length * 25.4
let Area = Length_mm * Width_mm
Area = Area.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
console.log("\nA(n) " + Width + "-by-" + Length + " inch sheet of paper has an area of " + Area + " square millimeter(s). ");
