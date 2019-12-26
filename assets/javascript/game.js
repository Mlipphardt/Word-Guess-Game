
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
   "goblin",
   "cleric",
   "knight" 
];

//Selects goal word
var chosenWord = wordDictionary[Math.floor(Math.random() * wordDictionary.length)];

//Keeps a record of letters guessed
var lettersGuessed = [];

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

//This is test code to see if indexOf method could be used on non-array string.
var cats = "timothy";
console.log(cats.indexOf("o"));


//Initiates guess when user presses a key
document.onkeyup = function(event){

    userGuess = event.key.toLowerCase();
    console.log(userGuess);
    lettersGuessed.push(userGuess);
    lettersGuessedText.textContent = lettersGuessed.join(" ");

    if (chosenWord.includes(userGuess)){
        let chosenWordIndex = chosenWord.indexOf(userGuess);
        guessingStatus[chosenWordIndex] = userGuess;
        chosenWordText.textContent = guessingStatus.join(" ");
    } else {
        console.log("Letter not part of Chosen Word")
    }

}

