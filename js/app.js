/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

'use strict';


// Global var to create new instance of Game object
let game = new Game();


// Selecting "Start Game" button
const startButton = document.getElementById('btn__reset');


// Event listener for "Start Game" button
startButton.addEventListener('click', () => { 
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
