const readlineSync = require("readline-sync");
const Student = readlineSync.question("\nStudents: ");
const Teacher = readlineSync.question("Teachers: ");
const Capacity = readlineSync.question("Bus capacity: ");
const Passenger = parseInt(Student) + parseInt(Teacher)
let BusX = (Passenger) / (Capacity)
let Bus = Math.ceil(BusX)
var Remainder = (Passenger) % Capacity;
console.log("\n" + Bus + " bus(es) is (are) needed, with " + Remainder + " passenger(s) on the last bus.");
