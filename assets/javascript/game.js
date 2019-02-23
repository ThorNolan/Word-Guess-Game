// VARIABLES
    // array to store all possible words
    var randomWordArray = [
        "cersei" , "tyrion" , "tywin", "stark" , "lannister" , "littlefinger" , "baratheon" , "daenerys" , "joffrey" , "ygritte" , "hodor" , "greyjoy" , "theon" , "tyrell" , "dorne" , "bravos" , "highgarden" , "direwolf" , "dragon" , "giants" , "wights" , "walkers"
    ];

    // variable to pick a random word from the randomWordArray
    var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];

    // variables to keep track of score and an empty array for keeping track of user input
    var string;
    var guessCounter = 0;
    var answers = [];
    var lives = 9;


// FUNCTIONS

    // function to put underscores in the answerArray based on the length of the word that needs to be guessed
    window.onload = function startGame() {
        for (var i = 0; i < randomWord.length; i++)
        {
            answers[i] = "_"; 
        }
 
        string = answers.join(" ");
        document.getElementById("guessWord").innerHTML = string;
    }


    window.onload = function userGuess() {
        var guess = document.getElementById("lettersGuessed").value;

        //make another check here, maybe against an alphabet array to make sure user input is a letter and not a number or symbol
        if (guess.length > 0) {
            
            for (var i = 0; i < randomWord.length; i++){
                if (randomWord[i] === guess) {
                    answers[i] = guess;
                }   
            }

            guessCounter++;
            document.getElementById("guessesRemaining").innerHTML = "Your guesses: " + guessCounter;
            document.getElementById("answers").innerHTML = answers.join("");
        }

        //another if statement here to say something (or add an image) based on number of guesses

    }