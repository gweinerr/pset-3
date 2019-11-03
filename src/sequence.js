const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("\nEnter three numbers. \n");
const FIRST_NUM = Number(readlineSync.question(""));
const SECOND_NUM = Number(readlineSync.question(""));
const THIRD_NUM = Number(readlineSync.question(""));

if (FIRST_NUM < MIN || FIRST_NUM > MAX || SECOND_NUM < MIN || SECOND_NUM > MAX || THIRD_NUM < MIN || THIRD_NUM > MAX) {
  console.log("\nInvalid.\n");
} else if (isNaN(FIRST_NUM)||isNaN(SECOND_NUM)||isNaN(THIRD_NUM)) {
  console.log("\nInvalid.\n");
} else if (FIRST_NUM < SECOND_NUM && SECOND_NUM < THIRD_NUM) {
  console.log("\nStrictly increasing.\n");
} else if (FIRST_NUM > SECOND_NUM && SECOND_NUM > THIRD_NUM) {
  console.log("\nStrictly decreasing.\n");
} else if (FIRST_NUM == SECOND_NUM && SECOND_NUM == THIRD_NUM) {
  console.log("\nEqual.\n");
} else if (FIRST_NUM == SECOND_NUM && SECOND_NUM < THIRD_NUM) {
  console.log("\nIncreasing.\n");
} else if (FIRST_NUM > SECOND_NUM && SECOND_NUM == THIRD_NUM) {
  console.log("\nDecreasing.\n");
} else if (FIRST_NUM < SECOND_NUM && SECOND_NUM == THIRD_NUM) {
  console.log("\nIncreasing.\n");
} else if (FIRST_NUM == SECOND_NUM && SECOND_NUM > THIRD_NUM) {
  console.log("\nDecreasing.\n");
} else {
  console.log("\nUnordered.\n");
}
