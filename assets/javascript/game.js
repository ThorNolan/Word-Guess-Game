// VARIABLES

    // array to store possible words
    var randomWordArray = [
        "cersei" , "tyrion" , "tywin", "stark" , "lannister" , "littlefinger" , "baratheon" , "daenerys" , "joffrey" , "ygritte" , "hodor" , "greyjoy" , "theon" , "tyrell"
    ];

    // variable to pick a random word from the random word array
    var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];

    // variables to keep track of score and an empty array
    var s;
    var count = 0;
    var answerArray = [];


//FUNCTIONS

    function startGame() {
        for (var i = 0; i < randomWord.length; i++)
        {
            answerArray[i] = "_"; 
        }

        s = answerArray.join(" ");
        document.getElementById("guessWord").innerHTML = s;
    }

function userGuess() {
    var guess = document.getElementById("lettersGuessed").value;

    if (guess.length > 0) {
       for (var i = 0; i < randomWord.length; i++){

       } 
    }

}





// GAMEPLAY PROCESS

startGame()