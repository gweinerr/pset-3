const readlineSync = require("readline-sync");

const letterGrade = readlineSync.question("\nEnter a letter grade: ");
letterGrade = letterGrade.toLowerCase();

if (letterGrade == "a" || letterGrade == "a+") {
  console.log("\nYour GPA is 4.00.\n");
} else if (letterGrade == "a-") {
  console.log("\nYour GPA is 3.67.\n")
}
