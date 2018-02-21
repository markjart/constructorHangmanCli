/* Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
	A string value to store the underlying character for the letter
	A boolean value that stores whether that letter has been guessed yet
	A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
	A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly */
	
// CONSTRUCTOR Function per above specs.
var Letter = function(ltr) {
  this.letter = ltr;
  this.appear = false;
  this.letterRender = function() {
    if(this.letter == " "){ 
      this.appear = true;
      return " ";
    }if(this.appear === false){ 
      return " _";
    } else{ 
      return this.letter;
    }
  };
};

// export to word.js
module.exports = Letter;

