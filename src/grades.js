const readlineSync = require("readline-sync");

const numberGrade = readlineSync.question("\nEnter a grade: ");

const A_UPPER = 100;
const A_LOWER = 90;
const B_UPPER = 89;
const B_LOWER = 80;
const C_UPPER = 79;
const C_LOWER = 70;
const D_UPPER = 69;
const D_LOWER = 60;
const F_UPPER = 59;
const F_LOWER = 0;

if (isNaN(numberGrade)) {
  console.log("\nInvalid.\n");
} else if (numberGrade >= A_LOWER && numberGrade <= A_UPPER) {
  console.log("\nYou received an A.\n");
} else if (numberGrade >= B_LOWER && numberGrade <= B_UPPER) {
  console.log("\nYou received a B.\n");
} else if (numberGrade >= C_LOWER && numberGrade <= C_UPPER) {
  console.log("\nYou received a C.\n");
} else if (numberGrade >= D_LOWER && numberGrade <= D_UPPER) {
  console.log("\nYou received a D.\n");
} else if (numberGrade >= F_LOWER && numberGrade <= F_UPPER) {
  console.log("\nYou received an F.\n");
} else {
  console.log("\nInvalid.\n")
}
