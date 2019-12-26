
// Variables for grabbing html tags
var chosenWordText = document.getElementById("chosenWord");
var guessesRemainingText = document.getElementById("guessesRemaining");
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var lettersGuessedText = document.getElementById("lettersGuessed");

// Possible choices for goal word
var wordDictionary = [
   "orc",
   "elf",
   "wizard",
   "kobold",
   "goblin",
   "paladin",
   "cleric",
   "knight" 
];

//Selects goal word
var chosenWord = wordDictionary[Math.floor(Math.random() * wordDictionary.length)];

//Creates underscores for user equal to length of chosen word
var guessingStatus = [];

for (var i = 0; i < chosenWord.length; i++) {
    guessingStatus.push("_ ");
}

chosenWordText.textContent = guessingStatus.join(" ");

console.log(guessingStatus)

