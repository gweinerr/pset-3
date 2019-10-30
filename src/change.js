const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.");
} else {
    const QUARTER = 0.25;
    const DIME = 0.10;
    const NICKEL = 0.05;
    const PENNY = 0.01;

    let QuarterAmount =  Math.floor(amount/QUARTER);
    let QuarterRemainder = amount % QUARTER;

    let DimeAmount = Math.floor(QuarterRemainder/DIME);
    let DimeRemainder = QuarterRemainder % DIME;

    let NickelAmount = Math.floor(DimeRemainder/NICKEL);
    let NickelRemainder = DimeRemainder % NICKEL;

    let PennyAmount = Math.ceil(NickelRemainder/PENNY);

    console.log("\n" + QuarterAmount + " quarters, " + DimeAmount + " dimes, " + NickelAmount +  " nickels, and " + PennyAmount + " pennies.\n");

}
