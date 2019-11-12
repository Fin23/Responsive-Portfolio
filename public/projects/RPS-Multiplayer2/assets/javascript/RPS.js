// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBgA1zRiYOmAhK9Fd3sJdaPgzK7HmJPGB4",
    authDomain: "rps-game-e23b7.firebaseapp.com",
    databaseURL: "https://rps-game-e23b7.firebaseio.com",
    projectId: "rps-game-e23b7",
    storageBucket: "rps-game-e23b7.appspot.com",
    messagingSenderId: "814550301760",
    appId: "1:814550301760:web:ea8e73feeb5ab4e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebaseConfig);
  var database = firebase.database();

  //end of fire base configuration and initialize


var chatSubmit = document.getElementById("say");
const userScore = 0;
const computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_button = document.getElementById("Rock");
const paper_button = document.getElementById("Paper");
const scissors_button = document.getElementById("Scissors");
var turnCount = 0;
var turnCountRock = 0;
var turnCountPaper = 0;
var turnCountScissors = 0;

var turnCountRock2 = 0;
var turnCountPaper2 = 0;
var turnCountScissors2 = 0;

playerOne = 0;
playerTwo = 0;
// var computerChoice = getComputerChoice();

var ref4 = database.ref('chat');
var ref3 = database.ref('player2');
var ref = database.ref('player1');
var ref2 = database.ref('turnCount');
  var data = {
      rock: "Rock",
      paper: "Paper",
      scissors: "Scissors"
  }
  console.log(data);
  //ref.push(data);

var firebaseHeadingRef = firebase.database().ref().child("turnCount")

firebaseHeadingRef.on('value', function(datasnapshot){
  var fireHeading = document.getElementById("fireHeading")
  fireHeading.innerText = datasnapshot.val();
});


 function chat1(){
  var chat= document.getElementById('chat');
  ref4.push('chat').set(chat.value);

  console.log(chat.value)
  
 }


  function game (userChoise){

    turnCount++
    
    //  computerChoice = getComputerChoice();

     console.log(userChoise);
     console.log("turn: " + turnCount);
    
     

    //  console.log(computerChoice);

    // console.log("Player 2 wins (currently computer)")
    // console.log("Players Tie good job you both suck");

}


//simple function to have an anrray looped through with each button click randomly
// function getComputerChoice(){

//     const choices = ['Rock', 'Paper', 'Scissors'];
//    const randomNumber = Math.floor(Math.random() * 3);
//    return choices [randomNumber];
// };
//console.log(getComputerChoice());
//end of simple function





//function main(){
  function rock1(){
      game("Rock");
  
      
      if (turnCount==2 || turnCount==4 || turnCount ==6 || turnCount == 8 || turnCount == 10){
        turnCountRock2++
        
        ref3.child("Rock").set(turnCountRock2)
        console.log(ref3.key);
      }else{
        turnCountRock++
      ref.child("Rock").set(turnCountRock)
    }
      ref2.set(turnCount)
      
  };
  
  function paper1(){
      game("Paper");
      //console.log("this be paper, dolla dolla bills y'all")
     
      if (turnCount==2 || turnCount==4 || turnCount ==6 || turnCount == 8 || turnCount == 10){
       turnCountPaper2++
        ref3.child("Paper").set(turnCountPaper2)
        console.log(ref3.key);
      }else{
        turnCountPaper++
      ref.child("Paper").set(turnCountPaper)
      }
     
      ref2.set(turnCount)
    
  }
  function scissors1(){
      game("Scissors");
      //console.log("scissors are dangerous dumb ass don't run with them")
      
      if (turnCount==2 || turnCount==4 || turnCount ==6 || turnCount == 8 || turnCount == 10){
        turnCountScissors2++
        ref3.child("Scissors").set(turnCountScissors2)
        console.log(ref3.key);
      }else{
        turnCountScissors++
      ref.child("Scissors").set(turnCountScissors)
      }
      //ref.push(data.scissors);//this sends to firebase
      ref2.set(turnCount)
      //ref2.push(turnCount);

    
     // ref.push(computerChoice);

  }
 


//}
//main();