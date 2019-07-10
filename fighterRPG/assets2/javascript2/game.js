var raiden = {
    raidenHealth: 200,
    raidenAttack: 50,
    enemyRaidenHealth: 100,
    enemyRaidenAttack: 20,
    whoRaiden: function(){
        console.log(this);
    },
    raidenStats:function(){
        console.log(this.raidenHealth + " " + this.raidenAttack);
    },
    enemyRaidenStats:function(){
        console.log(this.enemyRaidenHealth + " " + this.enemyRaidenAttack);
    }
};
var scorpion = {
    scorpionHealth: 110,
    scorpionAttack: 20,
    enemyScorpionHealth: 160,
    enemyScorpionAttack: 30,
    whoScorpion: function(){
        console.log(this);
    },
    scorpionStats:function(){
        console.log(this.scorpionHealth + " " + this.scorpionAttack);
    },
    enemyScorpionStats:function(){
        console.log(this.enemyScorpionHealth + " " + this.enemyScorpionAttack);
    }
};
var sweetTooth = {
    sweetToothHealth: 130,
    sweetToothAttack: 10,
    enemySweetToothHealth: 150,
    enemySweetToothAttack: 60,
    whoSweetTooth: function(){
        console.log(this);
    },
    sweetToothStats:function(){
        console.log(this.sweetToothHealth + " " + this.sweetToothAttack);
    },
    enemySweetToothStats:function(){
        console.log(this.enemySweetToothHealth + " " + this.enemySweetToothAttack);
    }
};
var liuKang = {
    liuKangHealth: 100,
    liuKangAttack: 45,
    enemyLiuKangHealth: 20,
    enemyLiuKangAttack: 200,
    whoIsLiuKang: function(){
        console.log(this);
    },
    liuKangStats:function(){
        console.log(this.liuKangHealth + " " + this.liuKangAttack);
    },
    enemyLiuKangStats:function(){
        console.log(this.enemyLiuKangHealth + " " + this.enemyLiuKangAttack);
    }
};

var heroHealth = [];
var heroAttack = [];

var enemyHealth = [];
var enemyAttack = [];


//console logs all parts of the object
 raiden.whoRaiden();
 scorpion.whoScorpion();
 sweetTooth.whoSweetTooth();
 liuKang.whoIsLiuKang();



    console.log(this)

//Dom manipulation
//find hero area to put 1st clicked character in
var heroArea = document.getElementById('hero-area');
var enemyArea = document.getElementById('enemy-area')
var heroStats = document.getElementById('hero-stats');
var enemyStats = document.getElementById('enemy-stats');
var heroHealthDisplay = document.getElementById('hero-health');
var heroAttackDisplay = document.getElementById('hero-attack');
var enemyHealthDisplay = document.getElementById('enemy-health');
var enemyAttackDisplay = document.getElementById('enemy-attack');
//"save" origianal attack value



// function for button click to pick characters and insert into hero area
function buttonPress1(){
        heroArea.innerHTML = "<img src='fighterRPG/assets2/images2/raiden.jpg' width=\'170px\' height=\'145px\'>";
        $(" #raiden, #scorpion, #liukang, #sweettooth, #evil-raiden").css({opacity:'0.0'});
        $(" #evil-liukang, #evil-sweettooth, #evil-scorpion").css({opacity:'1.0'});
        heroHealth.push(raiden.raidenHealth)
        heroAttack.push(raiden.raidenAttack)
        heroHealthDisplay.innerHTML =("hero health:" + raiden.raidenHealth );
        heroAttackDisplay.innerHTML=("hero attack:" + raiden.raidenAttack);
}
function buttonPress2(){
    heroArea.innerHTML = "<img src='fighterRPG/assets2/images2/sweetTooth.JPG' width=\'170px\' height=\'145px\'>";
    $("#sweettooth, #raiden, #scorpion, #liukang, #evil-sweettooth").css({opacity:'0.0'});
    $("#evil-raiden, #evil-liukang, #evil-scorpion").css({opacity:'1.0'});
    heroHealth.push(sweetTooth.sweetToothHealth);
    heroAttack.push(sweetTooth.sweetToothAttack);
    heroHealthDisplay.innerHTML =("hero health:" + sweetTooth.sweetToothHealth );
    heroAttackDisplay.innerHTML=("hero attack:" + sweetTooth.sweetToothAttack);
}
function buttonPress3(){
    heroArea.innerHTML = "<img src='fighterRPG/assets2/images2/scorpion.JPG' width=\'170px\' height=\'145px\'>";
    $("#scorpion, #liukang, #sweettooth, #raiden, #evil-scorpion").css({opacity:'0.0'});
    $("#evil-raiden, #evil-liukang, #evil-sweettooth").css({opacity:'1.0'});
    heroHealth.push(scorpion.scorpionHealth);
    heroAttack.push(scorpion.scorpionAttack);
     heroHealthDisplay.innerHTML =("hero health:" + scorpion.scorpionHealth );
     heroAttackDisplay.innerHTML=("hero attack:" + scorpion.scorpionAttack);
}
function buttonPress4(){
    heroArea.innerHTML = "<img src='fighterRPG/assets2/images2/liuKang.jpg' width=\'170px\' height=\'145px\'>";
    $("#liukang, #sweettooth, #raiden, #scorpion, #evil-liukang").css({opacity:'0.0'});
    $("#evil-raiden, #evil-sweettooth, #evil-scorpion").css({opacity:'1.0'}); 
    heroHealth.push(liuKang.liuKangHealth);
    heroAttack.push(liuKang.liuKangAttack);
    heroHealthDisplay.innerHTML =("hero health:" + liuKang.liuKangHealth );
    heroAttackDisplay.innerHTML=("hero attack:" + liuKang.liuKangAttack);
}
// enemy buttons
function buttonPress1E(){
        enemyArea.innerHTML = "<img src='fighterRPG/assets2/images2/raiden.jpg' width=\'170px\' height=\'145px\'>";
        $("#evil-raiden").css({opacity:'0.0'}); 
        enemyHealth.push(raiden.enemyRaidenHealth);
        enemyAttack.push(raiden.enemyRaidenAttack);  
        enemyHealthDisplay.innerHTML =("enemy health:" + raiden.enemyRaidenHealth );
        enemyAttackDisplay.innerHTML=("enemy attack:" + raiden.enemyRaidenAttack);
}
function buttonPress2E(){
enemyArea.innerHTML = "<img src='fighterRPG/assets2/images2/sweetTooth.JPG' width=\'170px\' height=\'145px\'>";
    $("#evil-sweettooth").css({opacity:'0.0'}); 
    enemyHealth.push(sweetTooth.enemySweetToothHealth);
    enemyAttack.push(sweetTooth.enemySweetToothAttack);
    enemyHealthDisplay.innerHTML =("enemy health:" + sweetTooth.enemySweetToothHealth );
    enemyAttackDisplay.innerHTML=("enemy attack:" + sweetTooth.enemySweetToothAttack); 
}
function buttonPress3E(){
    enemyArea.innerHTML = "<img src='fighterRPG/assets2/images2/scorpion.JPG' width=\'170px\' height=\'145px\'>";
    $("#evil-scorpion").css({opacity:'0.0'}); 
    enemyHealth.push(scorpion.enemyScorpionHealth);
    enemyAttack.push(scorpion.enemyScorpionAttack);  
    enemyHealthDisplay.innerHTML =("enemy health:" + scorpion.enemyScorpionHealth );
    enemyAttackDisplay.innerHTML=("enemy attack:" + scorpion.enemyScorpionAttack); 
}
function buttonPress4E(){
    enemyArea.innerHTML = "<img src='fighterRPG/assets2/images2/liuKang.jpg' width=\'170px\' height=\'145px\'>";
    $("#evil-liukang").css({opacity:'0.0'});  
    enemyHealth.push(liuKang.enemyLiuKangHealth);
    enemyAttack.push(liuKang.enemyLiuKangAttack);
    enemyHealthDisplay.innerHTML =("enemy health:" + liuKang.enemyLiuKangHealth );
    enemyAttackDisplay.innerHTML=("enemy attack:" + liuKang.enemyLiuKangAttack);
}


        console.log(heroHealth);
        console.log(heroAttack);
        console.log(enemyHealth);
        console.log(enemyAttack);
    
        var turnCounter = 0;
        var killCount = 0;
        var newEnemyHealth=(enemyHealth[0] - heroAttack[0]);
        var newHeroHealth=(heroHealth[0] - enemyAttack[0] );

       

        $("#fight").on("click", function(){
                var newEnemyHealth = (enemyHealth[0] - heroAttack[0]);
                var newHeroHealth = (heroHealth[0] - enemyAttack[0] );
                heroHealthDisplay.innerText = "hero health: " + newHeroHealth;
                enemyHealthDisplay.innerText = "enemy health: " + newEnemyHealth;
                console.table(newEnemyHealth, newHeroHealth, turnCounter, killCount);
                turnCounter++
                $("#fight").off('click');
                  
        $("#fight").on("click", function(){
                    var  newNewEnemyHealth = (newEnemyHealth - heroAttack[0]);
                    var newNewHeroHealth = (newHeroHealth - enemyAttack[0]);
                    heroHealthDisplay.innerText = "hero health: " + newNewHeroHealth;
                    enemyHealthDisplay.innerText = "enemy health: " + newNewEnemyHealth;
                    turnCounter++
                    console.log(newNewEnemyHealth, newNewHeroHealth,turnCounter, killCount);      
                    $("#fight").off('click');     
                   
        $("#fight").on("click", function(){
                    new3EnemyHealth = (newNewEnemyHealth - heroAttack[0]);
                    new3HeroHealth = (newNewHeroHealth - enemyAttack[0]);
                    heroHealthDisplay.innerText = "hero health: " + new3HeroHealth;
                    enemyHealthDisplay.innerText = "enemy health: " + new3EnemyHealth;         
                    turnCounter++
                    if(new3EnemyHealth < 1|| new3HeroHealth < 1){
                        alert("game over");
                    }
                    console.log(new3EnemyHealth, new3HeroHealth, turnCounter, killCount);
                    $("#fight").off('click');

                    $("#fight").on("click", function(){
                        new4EnemyHealth = (new3EnemyHealth - heroAttack[0]);
                        new4HeroHealth = (new3HeroHealth - enemyAttack[0]);
                        heroHealthDisplay.innerText = "hero health: " + new4HeroHealth;
                        enemyHealthDisplay.innerText = "enemy health: " + new4EnemyHealth;         
                        turnCounter++
                        if(new4EnemyHealth < 1){
                            alert("you win");
                            killCount++

                        }
                        if(new4HeroHealth < 1){
                            alert("game over")
                        }
                        console.log(new4EnemyHealth, new4HeroHealth, turnCounter, killCount);
                        $("#fight").off('click');
                                      
                    })
                                
                   })
                             
                    }) 

                     })
        
        
    
        
     
     

         