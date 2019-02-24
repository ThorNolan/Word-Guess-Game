// VARIABLES
    // array to store all possible words
    var randomWordArray = [
        "cersei" , "tyrion" , "tywin", "stark" , "lannister" , "littlefinger" , "baratheon" , "daenerys" , "joffrey" , "ygritte" , "hodor" , "greyjoy" , "theon" , "tyrell" , "dorne" , "bravos" , "highgarden" , "direwolf" , "dragon" , "giants" , "wights" , "walkers"
    ];

    //alphabet that the game will check against to make sure the player pressed a key that's a letter
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];

    // variable to pick a random word from the randomWordArray
    var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];

    // variables to keep track of score and empty arrays for holding inputs and empty spaces based on the number of letters in the words
    var guessCounter = 0;
    var randomWordSpaces = [];
    var underscores;
    var userInputArray = [];
    var lives = 10;
    var input = document.getElementById("letterPressed");


// FUNCTIONS

    // function to put underscores in randomWordSpaces based on the length of the word that needs to be guessed and displays the blank spaces on the page at id "guessWord"
    function startGame() {
        for (var i = 0; i < randomWord.length; i++)
        {
            randomWordSpaces[i] = "_"; 
        };
 
        underscores = randomWordSpaces.join(" ");
        document.getElementById("guessWord").innerHTML = underscores;
        console.log(randomWordSpaces);
        console.log(randomWord);
    };
 
    // function to compare user inputs with the blank random word and adjust their score

    function userGuess() {

        var textContent = document.querySelector("letterPressed").value;
        console.log(textContent);

        var guess = textContent.value;
        console.log(guess);

        //maybe make another check here, maybe against an alphabet array to make sure user input is a letter and not a number or symbol
        if (guess.length > 0) {
            
            for (var i = 0; i < randomWord.length; i++) {

                // if the randomWord has the letter the user typed in, the letter will be assigned to guess
                if (randomWord[i] === guess) {
                    randomWordSpaces[i].innerHTML = guess;
                    guessCounter++;
                    document.getElementById("guessWord").innerHTML = randomWordSpaces.join(" ");
                } 
                var j = (randomWord.indexOf(geuss));
                if (j === -1) {
                    lives--;
                    guessCounter++;
                };  
            };

            document.getElementById("guessesRemaining").innerHTML = "Your guesses: " + guessCounter;
        };

        //another if statement here to say something (or add an image) based on number of guesses

    };


// call my functions and check for key presses when the window is loaded 
window.onload = function () {
    startGame();
    // key press event to fill my storeGuessArray with the letters the user has guessed (couldn't get this to work yet, it does keep track of keys that are pressed)
    document.onkeypress = function(evt) {
        evt = evt || window.event;
    
        var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
    
        //only push it to the output if it's a letter 
        if (charCode) {
            input.innerHTML = evt.key;
        };
    };
    userGuess();
};