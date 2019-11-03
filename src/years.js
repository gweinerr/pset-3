const readlineSync = require("readline-sync");

const MIN = Number(0);
const MAX = Number.MAX_SAFE_INTEGER;

const year = Number(readlineSync.question("\nEnter a year: "));

if (!Number.isInteger(year)) {
  console.log("\nInvalid.\n");
} else if (isNaN(year)) {
  console.log("\nInvalid.\n");
} else if (year < MIN || year > MAX) {
  console.log("\nInvalid.\n");
} else if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log("\n" + year + " is a leap year.\n");
    } else {
      console.log("\n" + year + " is not a leap year.\n");
    }
  }
  else {
    console.log("\n" + year + " is a leap year.\n");
  }
}
else {
  console.log("\n" + year + " is not a leap year.\n");
}
