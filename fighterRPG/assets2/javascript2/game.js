var raiden = {
    Health: 210,
    Attack: 30,
    enemyHealth: 210,
    enemyAttack: 30,
     whoRaiden: function(){
         console.log(this);
     }
  
};

var scorpion = {
    Health: 170,
    Attack: 25,
    enemyHealth: 170,
    enemyAttack: 25,
    whoScorpion: function(){
        console.log(this);
    }
    
};
var sweetTooth = {
    Health: 190,
    Attack: 40,
    enemyHealth: 190,
    enemyAttack: 40,
    whoSweetTooth: function(){
        console.log(this);
    }
  
};
var liuKang = {
    Health: 200,
    Attack: 45,
    enemyHealth: 200,
    enemyAttack: 45,
    whoIsLiuKang: function(){
        console.log(this);
    }
  
};




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
        heroHealth = (raiden.Health)
        heroAttack = (raiden.Attack)
        heroHealthDisplay.innerHTML =("hero health:" + raiden.Health );
        heroAttackDisplay.innerHTML=("hero attack:" + raiden.Attack);
}
function buttonPress2(){
    heroArea.innerHTML = "<img src='fighterRPG/assets2/images2/sweetTooth.JPG' width=\'170px\' height=\'145px\'>";
    $("#sweettooth, #raiden, #scorpion, #liukang, #evil-sweettooth").css({opacity:'0.0'});
    $("#evil-raiden, #evil-liukang, #evil-scorpion").css({opacity:'1.0'});
    heroHealth = (sweetTooth.Health);
    heroAttack = (sweetTooth.Attack);
    heroHealthDisplay.innerHTML =("hero health:" + sweetTooth.Health );
    heroAttackDisplay.innerHTML=("hero attack:" + sweetTooth.Attack);
}
function buttonPress3(){
    heroArea.innerHTML = "<img src='fighterRPG/assets2/images2/scorpion.JPG' width=\'170px\' height=\'145px\'>";
    $("#scorpion, #liukang, #sweettooth, #raiden, #evil-scorpion").css({opacity:'0.0'});
    $("#evil-raiden, #evil-liukang, #evil-sweettooth").css({opacity:'1.0'});
    heroHealth = (scorpion.Health);
    heroAttack = (scorpion.Attack);
     heroHealthDisplay.innerHTML =("hero health:" + scorpion.Health );
     heroAttackDisplay.innerHTML=("hero attack:" + scorpion.Attack);
}
function buttonPress4(){
    heroArea.innerHTML = "<img src='fighterRPG/assets2/images2/liuKang.jpg' width=\'170px\' height=\'145px\'>";
    $("#liukang, #sweettooth, #raiden, #scorpion, #evil-liukang").css({opacity:'0.0'});
    $("#evil-raiden, #evil-sweettooth, #evil-scorpion").css({opacity:'1.0'}); 
    heroHealth = (liuKang.Health);
    heroAttack = (liuKang.Attack);
    heroHealthDisplay.innerHTML =("hero health:" + liuKang.Health );
    heroAttackDisplay.innerHTML=("hero attack:" + liuKang.Attack);
}
// enemy buttons
function buttonPress1E(){
        enemyArea.innerHTML = "<img src='fighterRPG/assets2/images2/raiden.jpg' width=\'170px\' height=\'145px\'>";
        $("#evil-raiden").css({opacity:'0.0'}); 
        enemyHealth = (raiden.enemyHealth);
        enemyAttack = (raiden.enemyAttack);  
        enemyHealthDisplay.innerHTML =("enemy health:" + raiden.enemyHealth );
        enemyAttackDisplay.innerHTML=("enemy attack:" + raiden.enemyAttack);
}
function buttonPress2E(){
enemyArea.innerHTML = "<img src='fighterRPG/assets2/images2/sweetTooth.JPG' width=\'170px\' height=\'145px\'>";
    $("#evil-sweettooth").css({opacity:'0.0'}); 
    enemyHealth = (sweetTooth.enemyHealth);
    enemyAttack = (sweetTooth.enemyAttack);
    enemyHealthDisplay.innerHTML =("enemy health:" + sweetTooth.enemyHealth );
    enemyAttackDisplay.innerHTML=("enemy attack:" + sweetTooth.enemyAttack); 
}
function buttonPress3E(){
    enemyArea.innerHTML = "<img src='fighterRPG/assets2/images2/scorpion.JPG' width=\'170px\' height=\'145px\'>";
    $("#evil-scorpion").css({opacity:'0.0'}); 
    enemyHealth = (scorpion.enemyHealth);
    enemyAttack = (scorpion.enemyAttack);  
    enemyHealthDisplay.innerHTML =("enemy health:" + scorpion.enemyHealth );
    enemyAttackDisplay.innerHTML=("enemy attack:" + scorpion.enemyAttack); 
}
function buttonPress4E(){
    enemyArea.innerHTML = "<img src='fighterRPG/assets2/images2/liuKang.jpg' width=\'170px\' height=\'145px\'>";
    $("#evil-liukang").css({opacity:'0.0'});  
    enemyHealth = (liuKang.enemyHealth);
    enemyAttack = (liuKang.enemyAttack);
    enemyHealthDisplay.innerHTML =("enemy health:" + liuKang.enemyHealth );
    enemyAttackDisplay.innerHTML=("enemy attack:" + liuKang.enemyAttack);
}

var heroHealth = 0;
var heroAttack = 0;

var enemyHealth = 0;
var enemyAttack = 0;
       
        var turnCounter = 0;
        var killCount = 0;



       
         function newEnemyHealth(){
                        enemyHealth2 = enemyHealth - heroAttack;
                    
            console.log(enemyHealth2);
         }
         

         
         function newHeroHealth(){
             heroHealth2 = heroHealth - enemyAttack;
              console.log(heroHealth2)
         }

         function isAlive () {
             if (enemyHealth > 0 || heroHealth > 0){
                 return true;
             }
             return false;
         }


//test out for loop to the code is more dry and not as many repeated on click functions below 


$("#fight").on("click", function (){
    console.log(enemyHealth, heroHealth);
    newEnemyHealth();
    newHeroHealth();

     
    
    
//             let newEnemyHealth = enemyHealth - heroAttack;
//             let newHeroHealth = heroHealth - enemyAttack;
            
//         heroHealthDisplay.innerText = "hero health: " + newHeroHealth;
//         enemyHealthDisplay.innerText = "enemy health: " + newEnemyHealth;
         turnCounter++
         console.log( turnCounter, killCount);
//         $("#fight").off('click');
//         if(newEnemyHealth > 1 && newHeroHealth >1 ){
//             $("#fight").on("click", function fight(){
//             let enemyHealth = newEnemyHealth
//             let heroHealth = newHeroHealth
//             let new2EnemyHealth = enemyHealth - heroAttack;
//             let new2HeroHealth = heroHealth - enemyAttack;
//             turnCounter++
//             console.log(new2EnemyHealth, new2HeroHealth, turnCounter, killCount);
//             })
            
//         }
        
     


 });





       // end of for loop test 

         //$("#fight").on("click", function(){
        //         console.log(enemyHealth, heroHealth);
        //         var newEnemyHealth = (enemyHealth[0] - heroAttack[0]);
        //         var newHeroHealth = (heroHealth[0] - enemyAttack[0] );
        //         heroHealthDisplay.innerText = "hero health: " + newHeroHealth;
        //         enemyHealthDisplay.innerText = "enemy health: " + newEnemyHealth;
        //         turnCounter++
        //         console.table(newEnemyHealth, newHeroHealth, turnCounter, killCount);
                
        //         if(newEnemyHealth < 1){
        //             alert("you win");
        //             killCount++
        //            //$(enemyArea).remove();
        //            $(`div#enemy-area > img`).remove();
        //         }
        //         if(newHeroHealth < 1){
        //             alert("game over")
        //         }
        //         $("#fight").off('click');
                  
        // $("#fight").on("click", function(){
        //             var  newNewEnemyHealth = (newEnemyHealth - heroAttack[0]);
        //             var newNewHeroHealth = (newHeroHealth - enemyAttack[0]);
        //             heroHealthDisplay.innerText = "hero health: " + newNewHeroHealth;
        //             enemyHealthDisplay.innerText = "enemy health: " + newNewEnemyHealth;
        //             turnCounter++
        //             console.log(newNewEnemyHealth, newNewHeroHealth,turnCounter, killCount);      
        //             $("#fight").off('click');     
                   
        // $("#fight").on("click", function(){
        //             new3EnemyHealth = (newNewEnemyHealth - heroAttack[0]);
        //             new3HeroHealth = (newNewHeroHealth - enemyAttack[0]);
        //             heroHealthDisplay.innerText = "hero health: " + new3HeroHealth;
        //             enemyHealthDisplay.innerText = "enemy health: " + new3EnemyHealth;         
        //             turnCounter++
        //             if(new3EnemyHealth < 1|| new3HeroHealth < 1){
        //                 alert("game over");
        //             }
        //             console.log(new3EnemyHealth, new3HeroHealth, turnCounter, killCount);
        //             $("#fight").off('click');

        //             $("#fight").on("click", function(){
        //                 new4EnemyHealth = (new3EnemyHealth - heroAttack[0]);
        //                 new4HeroHealth = (new3HeroHealth - enemyAttack[0]);
        //                 heroHealthDisplay.innerText = "hero health: " + new4HeroHealth;
        //                 enemyHealthDisplay.innerText = "enemy health: " + new4EnemyHealth;         
        //                 turnCounter++
        //                 if(new4EnemyHealth < 1){
        //                     alert("you win");
        //                     killCount++
        //                    //$(enemyArea).remove();
        //                    $(`div#enemy-area > img`).remove();
        //                 }
        //                 if(new4HeroHealth < 1){
        //                     alert("game over")
        //                 }
        //                 console.log(new4EnemyHealth, new4HeroHealth, turnCounter, killCount);
        //                 $("#fight").off('click');
                         
                        
        //             $("#fight").on("click", function(){
        //                 new5EnemyHealth = (new4EnemyHealth - heroAttack[0]);
        //                 new5HeroHealth = (new4HeroHealth - enemyAttack[0]);
        //                 heroHealthDisplay.innerText = "hero health: " + new5HeroHealth;
        //                 enemyHealthDisplay.innerText = "enemy health: " + new5EnemyHealth;         
        //                 turnCounter++
        //                 if(new5EnemyHealth < 1){
        //                     alert("you win");
        //                     killCount++
        //                    //$(enemyArea).remove();
        //                    $(`div#enemy-area > img`).remove();
        //                 }
        //                 if(new5HeroHealth < 1){
        //                     alert("game over")
        //                 }
        //                 console.log(new5EnemyHealth, new5HeroHealth, turnCounter, killCount);
        //                 $("#fight").off('click');

        //                 $("#fight").on("click", function(){
        //                     var new6EnemyHealth = (new5EnemyHealth - heroAttack[0]);
        //                     var new6HeroHealth = (new5HeroHealth - enemyAttack[0] );
        //                     heroHealthDisplay.innerText = "hero health: " + new6HeroHealth;
        //                     enemyHealthDisplay.innerText = "enemy health: " + new6EnemyHealth;
        //                     turnCounter++
        //                     if(new6EnemyHealth < 1){
        //                     alert("you win");
        //                     killCount++
        //                     $(`div#enemy-area > img`).remove();

        //                     //new6EnemyHealth

        //                     $(buttonPress2E, buttonPress1E, buttonPress3E, buttonPress4E).on("click", function(){
        //                          new6EnemyHealth = enemyHealth;
        //                          console.log(new6EnemyHealth);
        //                     })
                            
        //                    //$(enemyHealth).push(new6EnemyHealth);
        //                     }
        //                     if(new6HeroHealth < 1){
        //                         alert("game over")
        //                     }
        //                     console.table(new6EnemyHealth, new6HeroHealth, turnCounter, killCount);
        //                     $("#fight").off('click');

        //                     $("#fight").on("click", function(){
        //                         var new7EnemyHealth = (new6EnemyHealth - heroAttack[0]);
        //                         var new7HeroHealth = (new6HeroHealth - enemyAttack[0] );
        //                         heroHealthDisplay.innerText = "hero health: " + new7HeroHealth;
        //                         enemyHealthDisplay.innerText = "enemy health: " + new7EnemyHealth;
        //                         turnCounter++
        //                         if(new7EnemyHealth < 1){
        //                         alert("you win");
        //                         killCount++
        //                         $(`div#enemy-area > img`).remove();
        //                         }
        //                         if(new7HeroHealth < 1){
        //                             alert("game over")
        //                         }
        //                         console.table(new7EnemyHealth, new7HeroHealth, turnCounter, killCount);
        //                         $("#fight").off('click');

        //                         $("#fight").on("click", function(){
        //                             var new8EnemyHealth = (new7EnemyHealth - heroAttack[0]);
        //                             var new8HeroHealth = (new7HeroHealth - enemyAttack[0] );
        //                             heroHealthDisplay.innerText = "hero health: " + new8HeroHealth;
        //                             enemyHealthDisplay.innerText = "enemy health: " + new8EnemyHealth;
        //                             turnCounter++
        //                             if(new8EnemyHealth < 1){
        //                             alert("you win");
        //                             killCount++
        //                             $(`div#enemy-area > img`).remove();
        //                             }
        //                             if(new8HeroHealth < 1){
        //                                 alert("game over")
        //                             }
        //                             console.table(new8EnemyHealth, new8HeroHealth, turnCounter, killCount);
        //                             $("#fight").off('click');

        //                             $("#fight").on("click", function(){
        //                                 var new9EnemyHealth = (new8EnemyHealth - heroAttack[0]);
        //                                 var new9HeroHealth = (new8HeroHealth - enemyAttack[0] );
        //                                 heroHealthDisplay.innerText = "hero health: " + new9HeroHealth;
        //                                 enemyHealthDisplay.innerText = "enemy health: " + new9EnemyHealth;
        //                                 turnCounter++
        //                                 if(new9EnemyHealth < 1){
        //                                 alert("you win");
        //                                 killCount++
        //                                 $(`div#enemy-area > img`).remove();
        //                                 let
        //                                 }
        //                                 if(new9HeroHealth < 1){
        //                                     alert("game over")
        //                                 }
        //                                 console.table(new9EnemyHealth, new9HeroHealth, turnCounter, killCount);
        //                                 $("#fight").off('click');
        //                             })

        //                         })

        //                     })

        //                 })

                                      
        //             })

        //             })
                                
        //            })
                             
        //             }) 

        //             })
        
        
    
        
     
     

         