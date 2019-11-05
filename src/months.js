const readlineSync = require("readline-sync");

 let month = readlineSync.question("\nEnter a month: ");
month = month.toLowerCase();

 if (month == "feb" || month == "february") {
   console.log("\n28 or 29 days.\n");
 } else if (month == "mar" || month == "march") {
   console.log("\n31 days.\n");
 } else if (month == "apr" || month == "april") {
   console.log("\n30 days.\n");
 } else if (month == "may") {
   console.log("\n31 days.\n");
 } else if (month == "jun" || month == "june") {
   console.log("\n30 days.\n");
 } else if (month == "jul" || month == "july") {
   console.log("\n31 days.\n");
 } else if (month == "aug" || month == "august") {
   console.log("\n31 days.\n");
 } else if (month == "sep" || month == "september") {
   console.log("\n30 days.\n");
 } else if (month == "oct" || month == "october") {
   console.log("\n31 days.\n");
 } else if (month == "nov" || month == "november") {
   console.log("\n30 days.\n");
 } else if (month == "dec" || month == "december") {
   console.log("\n31 days.\n");
 } else if (month == "jan" || month == "january") {
   console.log("\n31 days.\n");
 } else {
   console.log("\nInvalid.\n");
 }
