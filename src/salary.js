const readlineSync = require("readline-sync");
let Salary = readlineSync.question("\nAnnual salary: ");
const SalaryBM = Salary/24
const PreTax = SalaryBM - SalaryBM*0.07
const Tax = PreTax*0.2782
let Pay = PreTax - Tax
Pay = Pay.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nYour take-home pay each check will be $" + Pay + ".");
