const readlineSync = require("readline-sync");
let Homework = readlineSync.question("\nEnter three homework grades.\n");
let HomeworkB = readlineSync.question("");
let HomeworkC = readlineSync.question("");
let Quiz = readlineSync.question("\nEnter three quiz grades.\n");
let QuizB = readlineSync.question("");
let QuizC = readlineSync.question("");
let Test = readlineSync.question("\nEnter three test grades.\n")
let TestB = readlineSync.question("");
let TestC = readlineSync.question("");
const HomeworkWGHT = Homework * 0.15
const HomeworkBWGHT = HomeworkB * 0.15
const HomeworkCWGHT = HomeworkC * 0.15
const QuizWGHT = Quiz * 0.35
const QuizBWGHT = QuizB * 0.35
const QuizCWGHT = QuizC * 0.35
const TestWGHT = Test * 0.5
const TestBWGHT = TestB * 0.5
const TestCWGHT = TestC * 0.5
const HomeworkAVG = (HomeworkWGHT + HomeworkBWGHT + HomeworkCWGHT) / 3
const QuizAVG = (QuizWGHT + QuizBWGHT + QuizCWGHT) / 3
const TestAVG = (TestWGHT + TestBWGHT + TestCWGHT) / 3
let Grade = (HomeworkAVG + QuizAVG + TestAVG)
Grade = Grade.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
console.log("\nYour marking period grade is " + Grade + "%.");
