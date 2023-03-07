(function () {
    'use strict';
    console.log('reading js');


const startGame= document.querySelector('#startgame');
const gameControl = document.getElementById('gamecontrol');
const game1 = document.getElementById('game1');
const game2 = document.getElementById('game2');
const sum = document.getElementById('sum');
const instruct = document.getElementById('instruct');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const actionArea = document.getElementById('actions');
const cats = document.querySelectorAll('.cats');
const player1cats = document.querySelector('#player1cats');
const player2cats = document.querySelector('#player2cats');
const gameboard = document.querySelector('#gameboard');
const player1cat = document.querySelector('#player1cat');
const player2cat = document.querySelector('#player2cat');
const shuffle = new Audio('audio/shuffle.m4a');
const meow = new Audio('audio/meow.m4a');
const gameData = {
    dice: ['images/dice1.svg', 'images/dice2.svg', 'images/dice3.svg', 'images/dice4.svg', 'images/dice5.svg', 'images/dice6.svg'],
    players: ['player 1', 'player 2'],
    whichCat: ['', ''],
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
    console.log(`index: ${gameData.index}`);

    gameControl.innerHTML = '<h2>The Game Has Started<h2>';
    gameControl.innerHTML = '<button id="quit">Quit Game?</button>';

    document.getElementById('quit').addEventListener("click", function(){
        location.reload();
    });

}); 

        // console.log(gameData);

        for (const cat of cats) {
            cat.addEventListener('click', function (event) {
                console.log(event.target.id);
                // if player1cats section is showing
                if (player1cats.getAttribute('class') == 'showing') {
                    // player 1's data is at position 0
                    gameData.whichCat[0] = event.target.id;
                    console.log(gameData.whichCat);
                    player1cat.innerHTML = `<img src="images/${event.target.id}.svg">`;
                    player1cats.className = 'hidden';
                    player2cats.className = 'showing';
                    meow.play();
                } else {
                    // player 2's data is at position 1
                    gameData.whichCat[1] = event.target.id;
                    console.log(gameData.whichCat);
                    player2cat.innerHTML += `<img src="images/${event.target.id}.svg">`;
                    player2cats.className = 'hidden';
                    gameboard.className = 'showing';
                    document.getElementById('overlay').className = 'hidden';
                    document.getElementById('intro').className = 'hidden';
                    meow.play();
                    // console.log("set up the turn!");
                    setUpTurn();
                }
            })
        }

        function setUpTurn() {
            instruct.innerHTML = `<h2>Roll the dice for <strong>${gameData.players[gameData.index]}</strong></h2>`;
            actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
            game1.innerHTML = '';
            game2.innerHTML = '';
            sum.innerHTML = '';
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
        
            instruct.innerHTML = `<h2>Roll the dice for the ${gameData.players[gameData.index]}<h2>`;
        
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
                instruct.innerHTML += '<h3>Oh snap! Snake eyes!</h3>';
                gameData.score[gameData.index] = 0;
                // switch players
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                
                // show the current score
                showCurrentScore(); 
        
                setTimeout(setUpTurn, 2000);
            }
        
            // if either die is a one
            else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
                console.log('one of the two dice was a 1');
                // switch player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                instruct.innerHTML += `<h3>Sorry, one of your rolls was a  one, switching to ${gameData.players[gameData.index]}</h3>`;
        
                setTimeout (setUpTurn, 2000);
            }
        
            // if neither die is a 1
            else{
                console.log('the game proceeds');
        
                gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                actionArea.innerHTML = '<button id="rollagain">Roll again</button> <div id=line3><div> <button id="pass">Pass</button>';
        
                document.getElementById('rollagain').addEventListener('click', function(){
                    setUpTurn();
                });
        
                document.getElementById('pass').addEventListener('click', function(){
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                });
        
                checkWinningCondition();
            }
        }
        
        function checkWinningCondition(){
            if(gameData.score[gameData.index] > gameData.gameEnd){
                score.innerHTML = `<h3>${gameData.players[gameData.index]}
                wins with ${gameData.score[gameData.index]} points!</h3>`;
        
                gameControl.innerHTML = '<button id="newGame">New Game?</button>';
                actionArea.innerHTML = '';
                document.getElementById('newGame').addEventListener("click", function(){
                    location.reload();
                });
            }
        
            else{
                // show current score...
                showCurrentScore(); 
            }
        }
        
        function showCurrentScore() {
            score1.innerHTML = `<h1>Score:</h1><p> ${gameData.score[1]}</p>`;
            score2.innerHTML = `<h1>Score:</h1><p> ${gameData.score[0]}</p>`;
        }
        // ${gameData.players[1]}
        // ${gameData.players[0]}
})();