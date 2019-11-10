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
  var ref = database.ref('scores')
  var data = {
      rock: "Rock",
      paper: "Paper",
      scissors: "Scissors"
  }
  console.log(data);
  ref.push(data);


  function rock1(){
      ref.push(data.rock)
  }
  function paper1(){
      ref.push(data.paper)
  }
  function scissors1(){
      ref.push(data.scissors)
  }