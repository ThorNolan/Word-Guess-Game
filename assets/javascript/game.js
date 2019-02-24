// VARIABLES
    // array to store all possible words 
    var randomWordArray = [
        "cersei" , "tyrion" , "tywin", "stark" , "lannister" , "littlefinger" , "baratheon" , "daenerys" , "joffrey" , "ygritte" , "hodor" , "greyjoy" , "theon" , "tyrell" , "dorne" , "bravos" , "highgarden" , "direwolf" , "dragon" , "giants" , "wights" , "walkers"
    ];

    // variable to use for picking a random word later and variables relating to the word picked
    var randomWord = "";
    var randomWordLetters = [];
    var underscores = 0;
    var wordDisplay = [];

    // an array with the whole alphabet to check against to rule out other key presses
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // variables to keep track of score, lives and an empty array for holding incorrect guesses
    var correctGuesses = 0;
    var incorrectGuesses= [];
    var lives = 10;

    //theme song from GoT :)
    var audio = document.getElementById("GoTTheme");

// FUNCTIONS

    // function to reset game and put underscores in randomWordSpaces based on the length of the word that needs to be guessed, and display the blank spaces on the page at id "guessWord"
    function startGame() {

        // reset lives to 10 and display them
        lives = 10;
        var showLives = document.getElementById("livesLeft");
        showLives.textContent = lives;
        
        //reset the incorrectGuesses and wordDisplay arrays
        incorrectGuesses = [];
        wordDisplay = [];

        // pick a random word from the randomWordArray and return that word as an array, then set the underscores variable equal to the length of the random word 
        randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
        randomWordLetters = randomWord.split("");
        underscores = randomWordLetters.length;

        // make a number of underscores equal to the length of the random word and display them
        for (var i = 0; i < underscores; i++) {
            wordDisplay.push("_"); 
        };
 
        document.getElementById("guessWord").innerHTML = wordDisplay.join(" ");
        console.log(randomWordLetters);
        console.log(randomWord);
    };

    // check for key presses 
    function letterPressed(event) {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        var letterIncluded = false;

        // compare the key pressed against my alphabet array to make sure it was a letter before comparing it against the randomWord
        if (alphabet.includes(letter)) {

            // loop to check if the letter the user pressed is included in the random word and...
            for(var i = 0; i < underscores; i++) {
                if (letter == randomWord[i]) {
                  letterIncluded = true;
                }
            }
            
            // show up on screen if it is included in the word and adjust score, and push it to the incorrectGuesses display and lose a life if it isn't
            if (letterIncluded) {
                for(var i = 0; i < underscores; i++) {
                  if (randomWord[i] == letter) {
                    wordDisplay[i] = letter;
                    document.getElementById("guessWord").innerHTML = wordDisplay.join(" ");
                  }         
                }
            } else {
                lives--;
                incorrectGuesses.push(letter);
                document.getElementById("wrongLetters").innerHTML = " " + incorrectGuesses;
                document.getElementById("livesLeft").innerHTML = lives;
            }

            //if the word is fully filled out, you gain one point and get a new word...
            if (wordDisplay.toString() == randomWordLetters.toString()) {
                correctGuesses++;
                document.getElementById("wins").innerHTML = correctGuesses;
                startGame();
            //or you lose.
            } else if (lives === 0) {
                alert("Winter is coming...");
                startGame();
            }
        }
    };

    // make the "new word" button on the page start the game over and give you a new word 
    document.getElementById("reset").addEventListener("click", function(){
        startGame();
    });


// GAMEPLAY: call my functions and check for key presses when the window is loaded 
window.onload = function () {
    audio.loop = true;
    document.addEventListener("keypress", letterPressed);
    startGame();
};
