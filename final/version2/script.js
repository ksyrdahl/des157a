(function () {
    'use strict';
    console.log('reading js');


const startGame= document.querySelector('#startgame');
const gameControl = document.getElementById('gamecontrol');
const game1 = document.getElementById('game1');
const game2 = document.getElementById('game2');
const sum = document.getElementById('sum');
const names = document.getElementById('names');
const instruct = document.getElementById('instruct');
const snake = document.getElementById('snake');
const score = document.getElementById('score');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const actionArea = document.getElementById('actions');
const catName = document.querySelectorAll('.catName');
const player1cats = document.querySelector('#player1cats');
const player1catName = document.querySelector('#player1catName');
const player2cats = document.querySelector('#player2cats');
const player2catName = document.querySelector('#player2catName');
const gameboard = document.querySelector('#gameboard');
const player1cat = document.querySelector('#player1cat');
const player2cat = document.querySelector('#player2cat');
const help = document.querySelector('#help');
const close = document.querySelector('#close');
// const winner = document.getElementById('#winner');
const shuffle = new Audio('sounds/shuffle.mp3');
const meow = new Audio('sounds/meow.mp3');
const cutemeow = new Audio('sounds/cutemeow.mp3');
const meow3 = new Audio('sounds/meow3.mp3');
const meow2 = new Audio('sounds/meow2.mp3');
const squeak = new Audio('sounds/squeak.mp3');
const gameData = {
    dice: ['images/dice1.svg', 'images/dice2.svg', 'images/dice3.svg', 'images/dice4.svg', 'images/dice5.svg', 'images/dice6.svg'],
    whichCat: ['', ''],
    name: ['',''],
    players: ['PLAYER 1','PLAYER 2'],
    score: [0, 0],
    roll1: 0,
    roll2: 0,
    rollSum: 0,
    index: 0,
    gameEnd: 29
};

startGame.addEventListener('click',function(event){
    // show the pick cat overlay
    document.getElementById('overlay').className = 'showing';
    // randomly set index
    gameData.index = Math.round(Math.random());
    // console.log(`index: ${gameData.index}`);
    cutemeow.play();

    gameControl.innerHTML = '<h2>The Game Has Started<h2>';
    gameControl.innerHTML = '<button id="quit">Quit Game?</button>';
    document.getElementById('help').className = 'showing';

    document.getElementById('quit').addEventListener("click", function(){
        location.reload();
    })

}); 

        // console.log(gameData);

        for (const cat of catName) {
            cat.addEventListener('click', function (event) {
                // console.log(event.target.id);
                // console.log(event.target.innerHTML);
                // if player1cats section is showing
                if (player1cats.getAttribute('class') == 'showing') {
                    // player 1's data is at position 0
                    gameData.whichCat[0] = event.target.id;
                    gameData.name[0] = event.target.innerHTML;
                    // console.log(gameData.whichCat);
                    console.log(`Cat name 1: ${gameData.name[0]}`);
                    player1cat.innerHTML = `<img src="images/${event.target.id}.svg">`;
                    player1catName.innerHTML = `${event.target.innerHTML}`;
                    player1cats.className = 'hidden';
                    player2cats.className = 'showing';
                    document.querySelector('#player2cats').style.animation ='opac .5s';
                    meow3.play();
                } else {
                    // player 2's data is at position 1
                    gameData.whichCat[1] = event.target.id;
                    // from glenda: updated the index from 0 to 1
                    gameData.name[1] = event.target.innerHTML;
                    // console.log(gameData.whichCat);
                    console.log(`Cat name 2: ${gameData.name[1]}`);
                    player2cat.innerHTML += `<img src="images/${event.target.id}.svg">`;
                    player2catName.innerHTML = `${event.target.innerHTML}`;
                    player2cats.className = 'hidden';
                    gameboard.className = 'showing';
                    names.className = 'showing';
                    document.getElementById('overlay').className = 'hidden';
                    document.getElementById('intro').className = 'hidden';
                    cutemeow.play();
                    document.querySelector('#maingame').style.animation ='opac 1s';
                    // console.log("set up the turn!");
                    setUpTurn();
                    showCurrentScore(); 
                }
            })
        }

        help.addEventListener ('click', function (event) {
            document.getElementById('rules').className = 'showing'; 
        })

        close.addEventListener ('click', function (event) {
            document.getElementById('rules').className = 'hidden'; 
        })

        document.addEventListener('keydown', function (event){
            if (event.key === 'Escape') {
                document.getElementById('rules').className = 'hidden';
            }
        });

        function setUpTurn() {
            instruct.innerHTML = `<h2>Pick a card for <strong>${gameData.players[gameData.index]}</strong></h2>`;
            actionArea.innerHTML = '<button id="roll">Pick a Card</button>';

            if (gameData.index == 0){
                player1cat.style.boxShadow = "5px 5px 31px 5px rgba(246,181,120,1)";
                player2cat.style.boxShadow = "none"; 
            }
            else {
                player2cat.style.boxShadow = "5px 5px 31px 5px rgba(199, 55, 158, 0.548)" ;
                player1cat.style.boxShadow = "none";  
            }

            game1.innerHTML = '';
            game2.innerHTML = '';
            sum.innerHTML = '';
            snake.innerHTML = '';
            score.style.paddingBottom = '0px';
            document.getElementById('snake').className = 'hidden';
            document.getElementById('game1').style.background = '#C974AC';
            document.getElementById('game2').style.background = '#C974AC';
            document.getElementById('roll').addEventListener('click', function(){
                throwDice();
                // console.log("roll the dice!");
                    shuffle.play();
            });
        }
        
        function throwDice(){
            actionArea.innerHTML = '';
            // get random values for the 1-6 for the score
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        
            instruct.innerHTML = `<h2>Pick a card for the ${gameData.players[gameData.index]}<h2>`;
        
            // put the dice images on the screen; the dice array index needs to be one less than roll1 and roll2
            game1.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">`;
            game2.innerHTML += `<img src="${gameData.dice[gameData.roll2-1]}">`;
            document.getElementById('game1').style.background = 'white';
            document.getElementById('game2').style.background = 'white';

            
            gameData.rollSum = gameData.roll1 + gameData.roll2;
            // console.log(gameData.rollSum);
            sum.innerHTML += `<h4>${gameData.rollSum}</h4>`;
        
            // if two 1's are rolled
            if (gameData.rollSum == 2){
                console.log('snake eyes');
                snake.innerHTML += '<h3>Oh snap! Cat Eyes!</h3>';
                gameData.score[gameData.index] = 0;
                document.getElementById('snake').className = 'showing';
                instruct.innerHTML = '';
                // switch players
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                score.style.paddingBottom = '90px';
                
                // show the current score
                showCurrentScore(); 
                meow.play();
                setTimeout(setUpTurn, 3000);
            }
        
            // if either die is a one
            else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
                console.log('one of the two dice was a 1');
                // switch player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                snake.innerHTML += `<h3>Sorry, one of your cards was a  one, switching to ${gameData.players[gameData.index]}</h3>`;
                document.getElementById('snake').className = 'showing';
                instruct.innerHTML = '';

                score.style.paddingBottom = '90px';

                setTimeout (setUpTurn, 3000);
                meow.play();
            }
        
            // if neither die is a 1
            else{
                console.log('the game proceeds');
        
                gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                actionArea.innerHTML = '<button id="rollagain">Pick Again</button> <div id=line3><div> <button id="pass">Pass</button>';
                instruct.innerHTML = `<h2>Yay you're score has <strong>INCREASED</strong>!</h2>`;

                document.getElementById('rollagain').addEventListener('click', function(){
                    setUpTurn();
                });
        
                document.getElementById('pass').addEventListener('click', function(){
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                    meow2.play();
                });
        
                checkWinningCondition();
            }
        }
        
        function checkWinningCondition(){
            if(gameData.score[gameData.index] > gameData.gameEnd){
                document.getElementById('winscreen').className = 'showing';
                console.log(gameData.name[gameData.index]);
                document.getElementById('help').className = 'hidden';
                document.getElementById('quit').className = 'hidden';

                squeak.play();
                cutemeow.play();

                // from glenda: added this code.
                winscreen.innerHTML += `<img src="images/${gameData.whichCat[gameData.index]}.svg">`;
                winscreen.innerHTML += `<h1>${gameData.name[gameData.index]} wins!</h1>`;
                winscreen.innerHTML += `<h2> with ${gameData.score[gameData.index]} points!</h2>`;

                actionArea.innerHTML = '';
                document.getElementById('newGame').addEventListener("click", function(){
                    location.reload();
                });

                // winner.innerHTML = `<h1>${gameData.player[gameData.index]}
                // wins</h1>`;
                // winner.innerHTML = `with ${gameData.score[gameData.index]} points!`;
                
            }
        
            else{
                // show current score...
                showCurrentScore(); 
            }
        }
        
        function showCurrentScore() {
            score1.innerHTML = `<h1>Score:</h1><p> ${gameData.score[0]}</p>`;
            score2.innerHTML = `<h1>Score:</h1><p> ${gameData.score[1]}</p>`;
        }
        // ${gameData.players[1]}
        // ${gameData.players[0]}
})();