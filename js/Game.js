/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

'use strict';

// Variable storing the start screen
const startScreenOverlay = document.getElementById('overlay');

// Class that handles creation of Game objects
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

// Stores and implements  the use of phrases in each game
    createPhrases() {
        let phraseArray = [
            new Phrase("Actions speak louder than words"),
            new Phrase("You are acting out of pocket"),
            new Phrase("Look what the cat dragged in"),
            new Phrase("Suspension of disbelief"),
            new Phrase("I can not believe it is not butter"),
        ]

        return phraseArray;
    }
// Returns one of the phrases stored in the phraseArray var by selecting random array index
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

// Hides start screen and displays blank puzzle
    startGame() {
        startScreenOverlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

 // Returns a var that indicates player has selected all of the puzzle letters   
    checkForWin(){
        const notGuessedLetters = document.getElementsByClassName('hide');
        return notGuessedLetters.length === 0;
    }

// Changes blue heart to blank heart to indicate that life was lost on incorrect guesses
    removeLife () {
        let heartImgs = document.getElementsByTagName('img');
        heartImgs[this.missed].src = 'images/lostHeart.png';
        this.missed +=1;
            if (this.missed >= 5) {
                this.gameOver();
            }
    }

// Browser displays message to let player know if they won or lost
    gameOver(gameWon){
        let gameOverMessage = document.querySelector('#game-over-message');
        startScreenOverlay.style.display = 'inherit';
            if (gameWon) {
                gameOverMessage.innerHTML = 'Great job!';
                startScreenOverlay.className = 'win';
            } else {
                const phraseUL = document.querySelector('#phrase ul');

// Displays losing message and reveals answer to player
                gameOverMessage.innerHTML = `Sorry, better luck next time! The answer was : <br><br> ${phraseUL.textContent}` ;
                startScreenOverlay.className = 'lose';
            }
    }

// Handles onscreen button clicks that trigger display to change accordingly
    handleInteraction(button){
        button.disabled = true;
        const guessedLetter = button.textContent;
        const correct = this.activePhrase.checkLetter(guessedLetter);
            if(!correct){
                button.classList.add('wrong');
                this.removeLife();       
            } else {
                if (correct){
                    button.classList.add('chosen');
                    this.activePhrase.showMatchedLetter(guessedLetter);
                    const gameWon = this.checkForWin();
                        if (gameWon){
                            this.gameOver(gameWon);
                        }
                }
            }
    }

}