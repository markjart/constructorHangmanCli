/* Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
	An array of new Letter objects representing the letters of the underlying word
	A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
	A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js) */
	
//reuired CONSTRUCTOR file
var Letter = require("./letter.js");

//Word Object per above spces.
function Word(wrd) {
	var that = this;
	this.word = wrd;
	this.letters = [];
	this.wordFound = false;
	this.getLets = function() {
		for(var i = 0; i<that.word.length; i++){
		var newLetter = new Letter(that.word[i]);
		this.letters.push(newLetter);
		}
	};
	this.didWeFindTheWord = function() {
		if(this.letters.every(function(lttr){
			return lttr.appear === true;
		})){
		this.wordFound = true;
		return true;
		}
	};
	this.checkIfLetterFound = function(guessedLetter) {
		var whatToReturn = 0;
		this.letters.forEach(function(lttr){
			if(lttr.letter === guessedLetter){
				lttr.appear = true;
				whatToReturn++;
			}
		})
		return whatToReturn;
	};
	this.wordRender = function() {
		var display = "";
		that.letters.forEach(function(lttr){
			var currentLetter = lttr.letterRender();
			display+= currentLetter;
		});
		return display;
	};
}
module.exports = Word;