const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const temperature = Number(readlineSync.question("\nEnter a temperature: "));
let scale = readlineSync.question("Enter a scale: ");
scale = scale.toLowerCase();

if (temperature > MAX || temperature < MIN) {
  console.log("\nInvalid.\n");
} else if (scale != "f" && scale != "c" && scale && "k") {
  console.log("\nInvalid.\n");
} else if (!Number.isInteger(temperature)) {
  console.log("\nInvalid.\n");
} else if (scale == "f") {
  if (temperature < 32) {
    console.log("\nSolid.\n");
  } else if (temperature >= 32 && temperature <= 212) {
    console.log("\nLiquid.\n");
  } else {
    console.log("\nGas.\n");
  }
} else if (scale == "c") {
  if (temperature < 32) {
    console.log("\nSolid.\n");
  } else if (temperature >= 32 && temperature <= 212) {
    console.log("\nLiquid.\n");
  } else {
    console.log("\nGas.\n");
  }
} else if (scale == "k") {
  if (temperature < 32) {
    console.log("\nSolid.\n");
  } else if (temperature >= 32 && temperature <= 212) {
    console.log("\nLiquid.\n");
  } else {
    console.log("\nGas.\n");
  }
}
