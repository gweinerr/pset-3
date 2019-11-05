const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter an integer: "));

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

if (Number.isNaN(number)) {
    console.log("\nInvalid.\n");
} else if (!Number.isInteger(number)) {
    console.log("\nInvalid.\n");
} else if (number < MIN) {
    console.log("\nInvalid.\n");
} else if (number > MAX) {
    console.log("\nInvalid.\n");
} else if (number % 2 == 0) {
    console.log("\nEven.\n");
} else {
    console.log("\nOdd.\n");
}
