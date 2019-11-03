const readlineSync = require("readline-sync");

let letterGrade = readlineSync.question("\nEnter a letter grade: ");
letterGrade = letterGrade.toLowerCase();

if (letterGrade == "a" || letterGrade == "a+") {
  console.log("\nYour GPA is 4.00.\n");
} else if (letterGrade == "a-") {
  console.log("\nYour GPA is 3.67.\n")
} else if (letterGrade == "b+") {
  console.log("\nYour GPA is 3.33.\n")
} else if (letterGrade == "b") {
  console.log("\nYour GPA is 3.00.\n")
} else if (letterGrade == "b-") {
  console.log("\nYour GPA is 2.67.\n")
} else if (letterGrade == "c+") {
  console.log("\nYour GPA is 2.33.\n")
} else if (letterGrade == "c") {
  console.log("\nYour GPA is 3.00.\n")
} else if (letterGrade == "c-") {
  console.log("\nYour GPA is 1.67.\n")
} else if (letterGrade == "d+") {
  console.log("\nYour GPA is 1.33.\n")
} else if (letterGrade == "d") {
  console.log("\nYour GPA is 1.00.\n")
} else if (letterGrade == "d-") {
  console.log("\nYour GPA is 0.67.\n")
} else if (letterGrade == "f" || letterGrade == "f+" || letterGrade == "f-") {
  console.log("\nYour GPA is 0.00.\n")
} else {
  console.log("\nInvalid.\n")
}
