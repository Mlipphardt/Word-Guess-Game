
// Variables for grabbing html tags
var chosenWordText = document.getElementById("chosenWord");
var chosenWordReveal = document.getElementById("chosenWordReveal");
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
    chosenWordReveal.textContent = "Press any letter!";
};

//Function to update letters guessed array if novel letter is pressed.
function addLetter(letter) {
    if(!lettersGuessed.includes(letter)){
        lettersGuessed.push(letter);
        lettersGuessedText.textContent = lettersGuessed.join(" ");
    } 
};

//Begins the first game.
resetGame();

//Initiates guess when user presses a key
document.onkeyup = function(event){

    userGuess = event.key.toLowerCase();

    //Checks if user pressed a letter key by grabbing keycodes. Only proceeds with game if user presses a letter.
    if (event.which <= 90 && event.which >= 48){

        //Resets the game if guesses are at 0 or word has been guessed.
        if(guessesRemaining == 0){
            resetGame();
        } else if(guessingStatus.join("") == chosenWord){
            resetGame();
        }

         //If user guesses a letter correctly, updates underscore array.
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

        //Adds guessed letter to letters guessed text if letter is novel this round.
            addLetter(userGuess);

        //If the word is guessed, add to wins, update word reveal text.
            if(guessingStatus.join("") == chosenWord){
                wins++;
                winsText.textContent = wins;
                chosenWordReveal.textContent = "Congratulations! Press any key to play again.";
            }
        } 
            //Subtracts guesses remaining if user inputs incorrect guess.
            else {
            guessesRemaining -= 1;
            guessesRemainingText.textContent = guessesRemaining;
            addLetter(userGuess);
            } 

            //If no guesses are left, reveals word, adds to loss counter.
            if(guessesRemaining == 0){
                losses++;
                lossesText.textContent = losses;
                chosenWordReveal.textContent = "The word was: " + chosenWord + ". Press any key to play again.";
            }
        }
    }
