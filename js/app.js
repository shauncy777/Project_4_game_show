/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/*
Note for the reviewer:

I am hoping to receive an "Exceeds Expectations" grade and would prefer that you fail the project with
notes so that I can remedy those issues and resubmit should the project not pass initially.
Thanks so much for your time and consideration!
*/

'use strict';

// Global var to reference for event listeners
let game = '';

// Selecting "Start Game" button
const startButton = document.getElementById('btn__reset');

// Event listener for "Start Game" button
startButton.addEventListener('click', () => { 
    game = new Game;
    game.startGame();

});

// Adds listener for mouse clicks on displayed game keyboard
document.getElementById('qwerty').addEventListener('click', (e)  => { 
    if (e.target.tagName === 'BUTTON'){
        game.handleInteraction(e.target);
    }
});

// Enables keyboard functionality
document.addEventListener('keydown', (e) => { 
    let pressedKey = e.key;
    let keys = document.getElementsByClassName('key');
        for (let i = 0; i < keys.length; i ++){
            if (pressedKey === keys[i].textContent && keys[i].disabled !== true){
                game.handleInteraction(keys[i]);
        }
    }
});
