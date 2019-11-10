var wordBank = ['red','blue']
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];


//function
//=============================================
function startGame(){
    wordBank[Math.floor(Math.random()* wordBank.length)];
}