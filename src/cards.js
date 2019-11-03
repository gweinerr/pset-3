const readlineSync = require("readline-sync");

let playingCard = readlineSync.question("\nEnter a playing card: ");
playingCard = playingCard.toLowerCase();
let output = "";
let valid = true;


if (playingCard.length != 2) {
  valid = false;
} else if (playingCard.charAt(0) == "2") {
  output = "\nTwo of ";
} else if (playingCard.charAt(0) == "3") {
  output = "\nThree of ";
} else if (playingCard.charAt(0) == "4") {
  output = "\nFour of ";
} else if (playingCard.charAt(0) == "5") {
  output = "\nFive of ";
} else if (playingCard.charAt(0) == "6") {
  output = "\nSix of ";
} else if (playingCard.charAt(0) == "7") {
  output = "\nSeven of ";
} else if (playingCard.charAt(0) == "8") {
  output = "\nEight of ";
} else if (playingCard.charAt(0) == "9") {
  output = "\nNine of ";
} else if (playingCard.charAt(0) == "t") {
  output = "\nTen of ";
} else if (playingCard.charAt(0) == "j") {
  output = "\nJack of ";
} else if (playingCard.charAt(0) == "q") {
  output = "\nQueen of ";
} else if (playingCard.charAt(0) == "k") {
  output = "\nKing of ";
} else if (playingCard.charAt(0) == "a") {
  output =  "\nAce of ";
} else {
  valid = false;
}

if (playingCard.charAt(1) == "c") {
  output += "Clubs.\n";
} else if (playingCard.charAt(1) == "d") {
  output += "Diamonds.\n";
} else if (playingCard.charAt(1) == "h") {
  output += "Hearts.\n";
} else if (playingCard.charAt(1) == "s") {
  output += "Spades.\n";
} else {
  valid = false;
}

if (valid == true) {
  console.log(output);
} else {
  console.log("\nInvalid.\n")
}
