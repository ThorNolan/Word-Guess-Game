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
    // var display = [myLength];
    // var win = myLength;
    var storeGuessArray = [];
    // var letters = answer.split("");
    var answerArray = [];
    var lives = 10;


// FUNCTIONS

    function displayLettersGuessed () {
        document.getElementById("wrongLetters"). innerHTML = storeGuessArray;
    };

    // function to put underscores in the answerArray based on the length of the word that needs to be guessed
    function startGame() {
        for (var i = 0; i < randomWord.length; i++)
        {
            answerArray[i] = "_"; 
        }
 
        string = answerArray.join(" ");
        document.getElementById("guessWord").innerHTML = string;
    };


    function userGuess() {
        var guess = document.getElementById("lettersGuessed").value;

        //make another check here, maybe against an alphabet array to make sure user input is a letter and not a number or symbol
        if (guess.length > 0) {
            
            for (var i = 0; i < randomWord.length; i++){
                if (randomWord[i] === guess) {
                    answerArray[i] = guess;
                }   
            }

            guessCounter++;
            document.getElementById("guessesRemaining").innerHTML = "Your guesses: " + guessCounter;
            document.getElementById("answers").innerHTML = answers.join("");
        }

        //another if statement here to say something (or add an image) based on number of guesses

    };

// call my functions when the window is opened 
window.onload = function () {
    startGame();
        
    // key press event to fill my answers array with the letters the user has guessed
        document.onkeypress = function(evt) {
            evt = evt || window.event;
        
            var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
        
            if (charCode) {
                answerArray.push(String.fromCharCode(charCode));
            }
            console.log(answerArray);
        };
    
    displayLettersGuessed();
    userGuess();
};