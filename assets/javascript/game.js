// VARIABLES
    // array to store all possible words
    var randomWordArray = [
        "cersei" , "tyrion" , "tywin", "stark" , "lannister" , "littlefinger" , "baratheon" , "daenerys" , "joffrey" , "ygritte" , "hodor" , "greyjoy" , "theon" , "tyrell" , "dorne" , "bravos" , "highgarden" , "direwolf" , "dragon" , "giants" , "wights" , "walkers"
    ];

    //alphabet that the game will check against to make sure the player pressed a key that's a letter
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // variable to pick a random word from the randomWordArray
    var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];

    // variables to keep track of score and empty arrays for holding inputs
    var string;
    var guessCounter = 0;
    var storeGuessArray = [];
    var lettersGuessed = [];
    var lives = 10;


// FUNCTIONS

    function displayLettersGuessed () {
        document.getElementById("wrongLetters"). innerHTML = storeGuessArray.push(String);
    };

    // function to put underscores in the storeGuessArray based on the length of the word that needs to be guessed and display it on the page
    function startGame() {
        for (var i = 0; i < randomWord.length; i++)
        {
            storeGuessArray[i] = "_"; 
        }
 
        string = storeGuessArray.join(" ");
        document.getElementById("guessWord").innerHTML = string;
    };


    function userGuess() {

        // key press event to fill my storeGuessArray with the letters the user has guessed (couldn't get this to work yet, it does keep track of keys that are pressed and store them in an array)
        // document.onkeypress = function(evt) {
        //     evt = evt || window.event;
        
        //     var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
        
        //     if (charCode) {
        //         lettersGuessed.push(String.fromCharCode(charCode));
        //     }
        //     console.log(lettersGuessed);
        // };

        var guess = lettersGuessed;

        //make another check here, maybe against an alphabet array to make sure user input is a letter and not a number or symbol
        if (guess.length > 0) {
            
            for (var i = 0; i < randomWord.length; i++){

                // if the randomWord has the letter the user typed in, the letter will be assigned to guess
                if (randomWord[i] === guess) {
                    lettersGuessed[i] = guess;
                }   
            };

            guessCounter++;
            document.getElementById("guessesRemaining").innerHTML = "Your guesses: " + guessCounter;
            document.getElementById("guessWord").innerHTML = storeGuessArray.join(" ");
        }

        //another if statement here to say something (or add an image) based on number of guesses

    };

// call my functions when the window is opened 
window.onload = function () {
    startGame();
    displayLettersGuessed();
    userGuess();
};