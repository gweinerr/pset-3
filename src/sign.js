const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter a number: "));

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

if (number >= MIN && number < 0) {
  console.log("\nNegative.\n");
} else  if (number > MAX) {
  console.log("\nInvalid.\n");
} else if (number < MIN) {
  console.log("\nInvalid.\n");
} else if (number <= MAX && number > 0) {
  console.log("\nPositive.\n");
} else if (number == 0) {
  console.log("\nZero.\n");
} else {
  console.log("\nInvalid.\n");
}
