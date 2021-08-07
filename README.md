# Project_4_game_show

OOP Game Show App:

  This program uses JavaScript and OOP (Object-Oriented Programming) to create the "Phrase Hunter" word guessing game by selecting a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.


How It Works:

•  The goal is to guess all the letters in a hidden, random phrase in 5 guesses or less. At the beginning, only the number of letters and words in the phrase is shown, represented by blank boxes on the screen.

•  Click the onscreen keyboard to guess letters in the phrase.

•  The letter is disabled on the onscreen keyboard and that letter cannot be selected again.

•  If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).

•  If the selected letter is not in the phrase, one of the hearts in the scoreboard is changed from a "live" heart to a "lost" heart.

•  Keep choosing letters until all the letters in the phrase are revealed.

• If the phrase is revealed before you run out of guesses, YOU WIN!!!

Play it here: https://shauncy777.github.io/Project_4_game_show/



Extra features:

Added code to ensure puzzle's words displayed with proper word wrapping to prevent one word being split on two lines (line 28 in Phrase.js).

Revealed puzzle's phrase to losing player (line 70 in Game.js).

Updated styles.css for an outline and slight scaling transformation to make letters stand out more when guessed. 

Thanks for stopping by and good luck!
