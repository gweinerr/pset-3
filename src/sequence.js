const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter three numbers. \n\n"));
const FIRST_NUM = Number(readlineSync.question(""));
const SECOND_NUM = Number(readlineSync.question(""));
const THIRD_NUM = Number(readlineSync.question(""));

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
