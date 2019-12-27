
//TODO: Make game work with dictionary entries that contain duplicate letters (i. e. 'cleric')

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
   "knight" 
];


//Variables for wins, losses, remaining guesses
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
winsText.textContent = 0;
lossesText.textContent = 0;
guessesRemainingText.textContent = 10;

//Selects goal word
var chosenWord = wordDictionary[Math.floor(Math.random() * wordDictionary.length)];

//Keeps a record of letters guessed
var lettersGuessed = [];

//Creates underscores for user equal to length of chosen word
var guessingStatus = [];


//Creates a variable which will be used to store user answer
var userGuess = ""

//Iterator
for (var i = 0; i < chosenWord.length; i++) {
    guessingStatus.push("_ ");
}


//Displays underscores to user, uses a single space as separator
chosenWordText.textContent = guessingStatus.join("");


//REMOVE LATER -This placeholder is to help testing
console.log(chosenWord);

//Function to reset game
function resetGame(){
    guessesRemaining = 10;
    guessesRemainingText.textContent = guessesRemaining
    guessingStatus = [];    
    chosenWord = wordDictionary[Math.floor(Math.random() * wordDictionary.length)];
    for (i = 0; i < chosenWord.length; i++) {
        guessingStatus.push("_ ");
    };
    chosenWordText.textContent = guessingStatus.join("_");
    lettersGuessed = [];
    lettersGuessedText.textContent = lettersGuessed.join();
    console.log(chosenWord);
}

//Initiates guess when user presses a key
document.onkeyup = function(event){

    userGuess = event.key.toLowerCase();

    if (chosenWord.includes(userGuess)){
        let chosenWordIndex = chosenWord.indexOf(userGuess);
        guessingStatus[chosenWordIndex] = userGuess;
        chosenWordText.textContent = guessingStatus.join(" ");
        lettersGuessed.push(userGuess);
        lettersGuessedText.textContent = lettersGuessed.join(" ");
        if(guessingStatus.join("") == chosenWord){
            wins++;
            winsText.textContent = wins;
            resetGame();
        }
    } else {
        guessesRemaining -= 1;
        guessesRemainingText.textContent = guessesRemaining;
        lettersGuessed.push(userGuess);
        lettersGuessedText.textContent = lettersGuessed.join(" ");
        if(guessesRemaining == 0){
            losses++;
            lossesText.textContent = losses;
            resetGame();
        }
    }
}

//  while(true){
//      if(guessesRemaining = 0){
//          losses++;
//          resetGame();
//      } else if(guessingStatus.join("") == chosenWord){
//          wins++;
//          resetGame();
//      }
// }

    //Initiates guess when user presses a key
    // document.onkeyup = function(event){

    //     userGuess = event.key.toLowerCase();
    //     console.log(userGuess);
    //     lettersGuessed.push(userGuess);
    //     lettersGuessedText.textContent = lettersGuessed.join(" ");

    //     if (chosenWord.includes(userGuess)){
    //         let chosenWordIndex = chosenWord.indexOf(userGuess);
    //         guessingStatus[chosenWordIndex] = userGuess;
    //         chosenWordText.textContent = guessingStatus.join(" ");
    //     } else {
    //         console.log("Letter not part of Chosen Word")
    //     }
    // }
// }

//Initiates guess when user presses a key
// document.onkeyup = function(event){

//     userGuess = event.key.toLowerCase();
//     console.log(userGuess);
//     lettersGuessed.push(userGuess);
//     lettersGuessedText.textContent = lettersGuessed.join(" ");

//     if (chosenWord.includes(userGuess)){
//         let chosenWordIndex = chosenWord.indexOf(userGuess);
//         guessingStatus[chosenWordIndex] = userGuess;
//         chosenWordText.textContent = guessingStatus.join(" ");
//     } else {
//         console.log("Letter not part of Chosen Word")
//     }

// }

