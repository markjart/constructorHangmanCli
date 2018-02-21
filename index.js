//setting up and and configuring required node.js modules  Found a few new ones to try out this time around.
var inquirer = require("inquirer"); //https://www.npmjs.com/package/inquirer
var isLetter = require("is-letter"); //https://www.npmjs.com/package/is-letter
var colors = require("colors"); //https://www.npmjs.com/package/colors
var Word = require("./word.js");
var Gallows = require("./gallows.js");
var hangManDisplay = Gallows.hangmansGallery.gallows;

//hangman game OBJECT ===========================================================

var hangman = {
	wordBank: Gallows.hangmansGallery.offenders,
	guessesRemaining: 10,
	guessedLetters: [],
	display: 0,
	currentWord: null,
		startGame: function() {
			var that = this;
				if(this.guessedLetters.length > 0){
				this.guessedLetters = [];
				}

			inquirer.prompt([{
				name: "play",
				type: "confirm",
				message: "Ready to play".input + " #Me".error + "Too".white + " Hangman?".debug
			}]).then(function(answer) {
				if (answer.play){
					that.newGame();
				}
				else {
				console.log("Goodbye!".error.bgWhite);
				}
		})},
	newGame: function() {
		if(this.guessesRemaining === 10) {
			clearScreen();
			console.log("Let's start!".info);
			var randNum = Math.floor(Math.random()*this.wordBank.length);
			this.currentWord = new Word(this.wordBank[randNum]);
			this.currentWord.getLets();
			console.log(colors.info("Guesses remaining: " + this.guessesRemaining + "\n")); 
			console.log(colors.blk.bgGreen(hangManDisplay[(this.display)+0]));
			console.log("\n==============================".mrica);		
			console.log(colors.info(this.currentWord.wordRender()));
			console.log("\n==============================".mrica);
			console.log(colors.input("Letters guessed: " + this.guessedLetters));
		this.keepPromptingUser();
		} else{
		this.resetGuessesRemaining();
		this.newGame();
    }
  },
  resetGuessesRemaining: function() {
    this.guessesRemaining = 10;
  },
  keepPromptingUser : function(){
	that = this;
		inquirer.prompt([{
		name: "chosenLtr",
		type: "input",
		message: "Choose a letter:".info,
		validate: function(value) {
			if(isLetter(value)){
			  return true;
			} 
			else{
			  return false;
			}
		}
    }]).then(function(ltr) {
      var letterReturned = (ltr.chosenLtr).toUpperCase();
      var guessedAlready = false;
        for(var i = 0; i<that.guessedLetters.length; i++){
          if(letterReturned === that.guessedLetters[i]){
            guessedAlready = true;
          }
        }
        if(guessedAlready === false){
          that.guessedLetters.push(letterReturned);
          var found = that.currentWord.checkIfLetterFound(letterReturned);
          if(found === 0){
			clearScreen();
            console.log("Incorrect!".warn);
            that.guessesRemaining--;
            that.display++;
            console.log(colors.info("Guesses remaining: " + that.guessesRemaining + "\n")); 
			baseScreen();
            console.log(colors.input("Letters guessed: " + that.guessedLetters));
          } else{
			clearScreen();
            console.log("Correct!".info);
              if(that.currentWord.didWeFindTheWord() === true){
                console.log(colors.info("Guesses remaining: " + that.guessesRemaining + "\n")); 
				baseScreen();
                console.log(colors.input("Letters guessed: " + that.guessedLetters));
                console.log("What the...?!  Why'd you let that bastard go?!".verbose);
              } else{
                console.log(colors.info("Guesses remaining: " + that.guessesRemaining + "\n")); 
				console.log(colors.blk.bgGreen(hangManDisplay[(that.display)+0]));
				console.log("\n==============================".mrica);
                console.log(colors.info(that.currentWord.wordRender()));
                console.log("\n==============================".mrica);
                console.log(colors.input("Letters guessed: " + that.guessedLetters));
              }
          }
          if(that.guessesRemaining > 0 && that.currentWord.wordFound === false) {
            that.keepPromptingUser();
          }else if(that.guessesRemaining === 0){
            console.log(colors.verbose("Game over!  Another one bites the dust!"));
            console.log(colors.verbose("That asshole's name was: " + that.currentWord.word));
          }
        } 
		else{
			clearScreen();
 			console.log(colors.info("\nGuesses remaining: " + that.guessesRemaining + "\n")); 
			baseScreen();	
            console.log(colors.warn("You've guessed that letter already. Try again."));
            that.keepPromptingUser();
          }
    });
  }
}

function baseScreen(){
	console.log(colors.blk.bgGreen(hangManDisplay[(that.display)-1]));
	console.log("\n==============================".mrica);
	console.log(colors.info(that.currentWord.wordRender()));
	console.log("\n==============================".mrica);
};

//Found this little function for clearing the command line and used it throughout object above to keep hangman display in same place.
function clearScreen () {
	process.stdout.write("\x1B[2J\x1B[0f");
};

clearScreen();
hangman.startGame();