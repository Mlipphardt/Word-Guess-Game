
// Variables for grabbing html tags
var chosenWordText = document.getElementById("chosenWord");
var guessesRemainingText = document.getElementById("guessesRemaining");
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var lettersGuessedText = document.getElementById("lettersGuessed");

// Possible choices for goal word
var wordDictionary = [
    "reinforcement",
    "punishment",
    "skinner",
    "fixed",
    "variable",
    "acceleration",
    "deceleration",
    "ratio",
    "pigeon",
    "rat",
    "schedule",
    "contingency",
    "functional",
    "observable",
    "trend",
    "level",
    "chart",
    "celeration",
    "standard",
    "attention",
    "tangible",
    "escape",
    "sensory",
    "stimulus",
    "motivating",
    "preferred",
    "assessment",
    "reinforcer",
    "punisher",
    "antecedent",
    "behavior",
    "consequence",
    "agreement"
];


//Variables for wins, losses, remaining guesses
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
winsText.textContent = 0;
lossesText.textContent = 0;
guessesRemainingText.textContent = 10;

//Keeps a record of letters guessed
var lettersGuessed = [];

//Creates underscores for user equal to length of chosen word
var guessingStatus = [];

//Will be used to hold index of letter to fill in underscores
var chosenWordIndex;

//Creates a variable which will be used to store user answer
var userGuess = "";

//Iterator
var i;

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
}

resetGame();

//Initiates guess when user presses a key
document.onkeyup = function(event){

    userGuess = event.key.toLowerCase();

    if (chosenWord.includes(userGuess)){
        console.log(userGuess);
        for (i = 0; i < chosenWord.length; i++){
            chosenWordIndex = chosenWord.indexOf(userGuess, i);
            console.log(chosenWordIndex);
                if (!(chosenWordIndex == -1)) {
                    guessingStatus[chosenWordIndex] = userGuess;
                    chosenWordText.textContent = guessingStatus.join(" ");
                }
        }

        if(!lettersGuessed.includes(userGuess)){
            lettersGuessed.push(userGuess);
            lettersGuessedText.textContent = lettersGuessed.join(" ");
        } 
        if(guessingStatus.join("") == chosenWord){
            wins++;
            winsText.textContent = wins;
            resetGame();
        }
    } else {
        guessesRemaining -= 1;
        guessesRemainingText.textContent = guessesRemaining;
        if(!lettersGuessed.includes(userGuess)){
            lettersGuessed.push(userGuess);
            lettersGuessedText.textContent = lettersGuessed.join(" ");
        } 
        if(guessesRemaining == 0){
            losses++;
            lossesText.textContent = losses;
            resetGame();
        }
    }
}
