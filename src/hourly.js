const readlineSync = require("readline-sync");
const HrWg = readlineSync.question("\nHourly wage: ");
let Monday = readlineSync.question("\nMonday: ");
const Monday_wg = Monday * HrWg
let Tuesday = readlineSync.question("Tuesday: ");
const Tuesday_wg = Tuesday * HrWg
let Wednesday = readlineSync.question("Wednesday: ");
const Wednesday_wg = Wednesday * HrWg
let Thursday = readlineSync.question("Thursday: ");
const Thursday_wg = Thursday * HrWg
let Friday = readlineSync.question("Friday: ");
const Friday_wg = Friday * HrWg
let Saturday = readlineSync.question("Saturday: ");
const Saturday_wg = Saturday * HrWg
let Sunday = readlineSync.question("Sunday: ");
const Sunday_wg = Sunday * HrWg
let Total = (Monday_wg + Tuesday_wg + Wednesday_wg + Thursday_wg + Friday_wg + Saturday_wg + Sunday_wg)
Total = Total.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
console.log("\nYou'll make $" + Total + " this week.");
