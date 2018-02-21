//REQUIRE colors node package to add color to the display.

var colors = require("colors"); //https://www.npmjs.com/package/colors

colors.setTheme({
	mrica: "america",
	silly: "rainbow",
	input: "grey",
	verbose: "cyan",
	prompt: "grey",
	info: "green",
	data: "gray",
	help: "cyan",
	warn: "yellow",
	debug: "blue",
	error: "red",
	white: "white",
	maga: "magenta",
	blk: "black"
});

// OBJECT of Top #MeToo offenders (array) and gallows (array) which are used to drive the game and display
exports.hangmansGallery = {
  offenders:[
	"HARVEY WEINSTEIN",
	"BILL OREILLY",
	"WOODY ALLEN",
	"BILL COSBY",
	"ROMAN POLANSKI",
	"RUSSEL SIMMONS",
	"MATT LAUER",
	"ROY MOORE",
	"CHARLIE ROSE",
	"DONALD TRUMP",
	"LOUIS CK",
	"KEVIN SPACEY",
	"JAMES TOBACK"],
	gallows: [
		"                   \n" +
		"                   \n" +	
		"                   \n" +
		"                   \n" +
		"                   \n" +
		"                   \n" +
		"                   \n" +
		"                   \n" +
		"                   \n" +
		"*******************".mrica,
		"                   \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n" +
		"*******************".mrica, 
		"____________".debug + "       \n " +
		"|         | ".debug + "      \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n" +
		"*******************".mrica,
		"____________".debug + "       \n " +
		"|         | ".debug + "      \n " +
		"|".debug + "         O".white +"       \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n" +
		"*******************".mrica,
		"____________".debug + "       \n " +
		"|         | ".debug + "      \n " +
		"|".debug + "         O".white +"       \n " +
		"|".debug + "         |".white +"       \n " +
		"|".debug + "         |".white +"       \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n" +
		"*******************".mrica,
		"____________".debug + "       \n " +
		"|         | ".debug + "      \n " +
		"|".debug + "         O".white +"       \n " +
		"|".debug + "         |".white +"       \n " +
		"|".debug + "         |".white +"       \n " +
		"|".debug + "         !".white +"       \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n" +
		"*******************".mrica,
		"____________".debug + "       \n " +
		"|         |       \n " +
		"|".debug + "         O".white +"       \n " +
		"|".debug + "        /|".white +"       \n " +
		"|".debug + "        \\|".white +"       \n " +
		"|".debug + "         !".white +"       \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n" +
		"*******************".mrica,
		"____________".debug + "       \n " +
		"|         | ".debug + "      \n " +
		"|".debug + "         O".maga +"       \n " +
		"|".debug + "        /|\\ ".white +"     \n " +
		"|".debug + "        \\|/".white +"      \n " +
		"|".debug + "         !".white +"       \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n" +
		"*******************".mrica, 
		"____________".debug + "       \n " +
		"|         |       \n " +
		"|".debug + "         O".maga +"       \n " +
		"|".debug + "        /|\\ ".white +"     \n " +
		"|".debug + "        \\|/".white +"      \n " +
		"|".debug + "        /!".white +"       \n " +
		"|".debug + "       /  ".white +"       \n " +
		"|".debug + "                 \n " +
		"|".debug + "                 \n" +
		"*******************".mrica,
		"____________".debug + "       \n " +
		"|         |       \n " +
		"|".debug + "         O".maga + "       \n " +
		"|".debug + "        /|\\ ".white +"     \n " +
		"|".debug + "        \\|/".white +"      \n " +
		"|".debug + "        /".white + "!".maga + "\\".white + "      \n " +
		"|".debug + "       /   \\".white + "     \n " +
		"|".debug + "         *".blk + "       \n " +
		"|".debug + "        ***".blk + "      \n" +
		"*********".mrica + "*****".blk + "*****".mrica]
};