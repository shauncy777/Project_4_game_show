/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

'use strict';

// Class that handles creation of Phrase objects
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

// Displays phrase in browser
    addPhraseToDisplay () {
        const phraseUL = document.querySelector('#phrase ul');
        let phraseChars = this.phrase.split('');
        phraseChars.forEach(singleChar => {  
            let listItem = document.createElement('li');
            phraseUL.appendChild(listItem);
            listItem.innerHTML = singleChar;
                if (singleChar !== ' '){
                    listItem.className = `hide letter ${singleChar}`;
                } else {
                    listItem.className = 'space';
                }            
        });

// Ensures phrase is displayed with proper word wrapping on page    
        phraseUL.innerHTML = `<span class="word" style="display:inline-block">` + phraseUL.innerHTML;
        phraseUL.innerHTML += `</span>`;
        const replaceString = `</span><li class="space"> </li><span class="word" style="display:inline-block">`;
        let ulHTML = phraseUL.innerHTML;
        phraseUL.innerHTML = ulHTML.replace(/<li class="space"> <\/li>/g, replaceString);
    }

// Checks if chosen letter is in phrase
    checkLetter(letter) {
            return this.phrase.includes(letter);
        }
    

// Changes className to show correct guessed letters
    showMatchedLetter(letter) {
        const correct = document.querySelectorAll( '.phrase, li');
            for ( let i = 0; i < correct.length; i ++ ) {
                if (correct[i].innerHTML === letter) {
                    correct[i].className = 'show'; 
                }
            }
    }



}
