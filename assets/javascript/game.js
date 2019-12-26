
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

//Creates a variable which will be used to store user answer
var userGuess = ""

for (var i = 0; i < chosenWord.length; i++) {
    guessingStatus.push("_ ");
}

//Displays underscores to user, uses a single space as separator
chosenWordText.textContent = guessingStatus.join(" ");


//REMOVE LATER -This placeholder is to help testing
console.log(chosenWord);

//Initiates guess when user presses a key
document.onkeyup = function(event){

    userGuess = event.key.toLowerCase();
    console.log(userGuess);
    if (chosenWord.includes(userGuess)){
        alert("He's done it!");
    } else {
        alert("Awww maan!");
    }

}

