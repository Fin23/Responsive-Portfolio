let raiden = {
  Health: 210,
  Attack: 30,
  enemyHealth: 210,
  enemyAttack: 30,
  whoRaiden() {
    console.log(this);
  },
};
let scorpion = {
  Health: 170,
  Attack: 25,
  enemyHealth: 170,
  enemyAttack: 25,
  whoScorpion() {
    console.log(this);
  },
};
let sweetTooth = {
  Health: 190,
  Attack: 40,
  enemyHealth: 190,
  enemyAttack: 40,
  whoSweetTooth() {
    console.log(this);
  },
};
let liuKang = {
  Health: 200,
  Attack: 45,
  enemyHealth: 200,
  enemyAttack: 45,
  whoIsLiuKang() {
    console.log(this);
  },
};
//console logs all parts of the object
raiden.whoRaiden();
scorpion.whoScorpion();
sweetTooth.whoSweetTooth();
liuKang.whoIsLiuKang();

console.log(this);

//Dom manipulation
//find hero area to put 1st clicked character in
let heroArea = document.getElementById('hero-area');
let enemyArea = document.getElementById('enemy-area');
let heroStats = document.getElementById('hero-stats');
let enemyStats = document.getElementById('enemy-stats');
let heroHealthDisplay = document.getElementById('hero-health');
let heroAttackDisplay = document.getElementById('hero-attack');
let enemyHealthDisplay = document.getElementById('enemy-health');
let enemyAttackDisplay = document.getElementById('enemy-attack');
//"save" origianal attack value

// function for button click to pick characters and insert into hero area
function buttonPress1() {
  heroArea.innerHTML =
    "<img src='assets/Images/raiden.jpg' width='170px' height='145px'>";
  $(' #raiden, #scorpion, #liukang, #sweettooth, #evil-raiden').css({
    opacity: '0.0',
  });
  $(' #evil-liukang, #evil-sweettooth, #evil-scorpion').css({ opacity: '1.0' });
  heroHealth = raiden.Health;
  heroAttack = raiden.Attack;
  heroHealthDisplay.innerHTML = 'hero health:' + raiden.Health;
  heroAttackDisplay.innerHTML = 'hero attack:' + raiden.Attack;
}
function buttonPress2() {
  heroArea.innerHTML =
    "<img src='assets/Images/sweetTooth.JPG' width='170px' height='145px'>";
  $('#sweettooth, #raiden, #scorpion, #liukang, #evil-sweettooth').css({
    opacity: '0.0',
  });
  $('#evil-raiden, #evil-liukang, #evil-scorpion').css({ opacity: '1.0' });
  heroHealth = sweetTooth.Health;
  heroAttack = sweetTooth.Attack;
  heroHealthDisplay.innerHTML = 'hero health:' + sweetTooth.Health;
  heroAttackDisplay.innerHTML = 'hero attack:' + sweetTooth.Attack;
}
function buttonPress3() {
  heroArea.innerHTML =
    "<img src='assets/Images/scorpion.JPG' width='170px' height='145px'>";
  $('#scorpion, #liukang, #sweettooth, #raiden, #evil-scorpion').css({
    opacity: '0.0',
  });
  $('#evil-raiden, #evil-liukang, #evil-sweettooth').css({ opacity: '1.0' });
  heroHealth = scorpion.Health;
  heroAttack = scorpion.Attack;
  heroHealthDisplay.innerHTML = 'hero health:' + scorpion.Health;
  heroAttackDisplay.innerHTML = 'hero attack:' + scorpion.Attack;
}
function buttonPress4() {
  heroArea.innerHTML =
    "<img src='assets/Images/liuKang.jpg' width='170px' height='145px'>";
  $('#liukang, #sweettooth, #raiden, #scorpion, #evil-liukang').css({
    opacity: '0.0',
  });
  $('#evil-raiden, #evil-sweettooth, #evil-scorpion').css({ opacity: '1.0' });
  heroHealth = liuKang.Health;
  heroAttack = liuKang.Attack;
  heroHealthDisplay.innerHTML = 'hero health:' + liuKang.Health;
  heroAttackDisplay.innerHTML = 'hero attack:' + liuKang.Attack;
}
// enemy buttons
function buttonPress1E() {
  enemyArea.innerHTML =
    "<img src='assets/Images/raiden.jpg' width='170px' height='145px'>";
  $('#evil-raiden').css({ opacity: '0.0' });
  enemyHealth = raiden.enemyHealth;
  enemyAttack = raiden.enemyAttack;
  enemyHealthDisplay.innerHTML = 'enemy health:' + raiden.enemyHealth;
  enemyAttackDisplay.innerHTML = 'enemy attack:' + raiden.enemyAttack;
}
function buttonPress2E() {
  enemyArea.innerHTML =
    "<img src='assets/Images/sweetTooth.JPG' width='170px' height='145px'>";
  $('#evil-sweettooth').css({ opacity: '0.0' });
  enemyHealth = sweetTooth.enemyHealth;
  enemyAttack = sweetTooth.enemyAttack;
  enemyHealthDisplay.innerHTML = 'enemy health:' + sweetTooth.enemyHealth;
  enemyAttackDisplay.innerHTML = 'enemy attack:' + sweetTooth.enemyAttack;
}
function buttonPress3E() {
  enemyArea.innerHTML =
    "<img src='assets/Images/scorpion.JPG' width='170px' height='145px'>";
  $('#evil-scorpion').css({ opacity: '0.0' });
  enemyHealth = scorpion.enemyHealth;
  enemyAttack = scorpion.enemyAttack;
  enemyHealthDisplay.innerHTML = 'enemy health:' + scorpion.enemyHealth;
  enemyAttackDisplay.innerHTML = 'enemy attack:' + scorpion.enemyAttack;
}
function buttonPress4E() {
  enemyArea.innerHTML =
    "<img src='assets/Images/liuKang.jpg' width='170px' height='145px'>";
  $('#evil-liukang').css({ opacity: '0.0' });
  enemyHealth = liuKang.enemyHealth;
  enemyAttack = liuKang.enemyAttack;
  enemyHealthDisplay.innerHTML = 'enemy health:' + liuKang.enemyHealth;
  enemyAttackDisplay.innerHTML = 'enemy attack:' + liuKang.enemyAttack;
}

var heroHealth = 0;
var heroAttack = 0;

var enemyHealth = 0;
var enemyAttack = 0;

let turnCounter = 0;
let killCount = 0;

let increaseAttack = 35;
let increaseHealth = 100;

// fire base

// var firebaseConfig = {
//     apiKey: "AIzaSyA9f_1faTrIXwgQGzjepWHKmqz0w41k9og",
//     authDomain: "test-project-1-322a8.firebaseapp.com",
//     databaseURL: "https://test-project-1-322a8.firebaseio.com",
//     projectId: "test-project-1-322a8",
//     storageBucket: "",
//     messagingSenderId: "486797615354",
//     appId: "1:486797615354:web:9553841c6bd06da9"
//   };
//   firebase.initializeApp(firebaseConfig);
//   var database = firebase.database();

//created functions to attach to the fight button

function newEnemyHealth() {
  enemyHealth = enemyHealth - heroAttack;
  enemyHealthDisplay.innerText = 'enemy health: ' + enemyHealth;
  enemyAttackDisplay.innerText = 'enemy attack: ' + enemyAttack;
}
function newHeroHealth() {
  heroHealth = heroHealth - enemyAttack;
  console.log(heroHealth, enemyHealth);
  heroHealthDisplay.innerText = 'hero health: ' + heroHealth;
  heroAttackDisplay.innerText = 'hero attack: ' + heroAttack;
}

function isHeroAlive() {
  if (heroHealth < 1) {
    alert('you lose');
    heroArea.innerHTML = null;
    location.reload();
    return true;
  }
  return false;
}
function isEnemyAlive() {
  if (enemyHealth < 1) {
    killCount++;
    heroHealth = heroHealth + increaseHealth;
    heroAttack = heroAttack + increaseAttack;
    enemyArea.innerHTML = null;

  

    alert('you win');
    return true;
  }
  return false;
}
function isTie() {
  if (heroHealth < 1 && enemyHealth < 1) {
    alert('you killed each other');
    return true;
  }
  return false;
}

//fight button

$('#fight').on('click', function() {
  console.log(heroHealth, enemyHealth);
  newEnemyHealth();
  newHeroHealth();
  isTie();
  isHeroAlive();
  isEnemyAlive();
  turnCounter++;

  if (killCount > 2) {
    alert('you are the champion!');
    location.reload();
  }
  console.log(turnCounter, killCount);


});
