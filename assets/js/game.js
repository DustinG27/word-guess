// global variables to hold basic game structure
var bands = ["decendents", "misfits", "fuagzi", "jfa", "adolescents", "circle jerks"];

// variables getting id from html
var word = document.getElementById("word");
var userGuess = document.getElementById("userGuess");
var guessedLetters = document.getElementById("guessedLetters");
var userWins = document.getElementById("userWins");
var userLose = document.getElementById("userLose");

// create functionn to get random word
var randomBand = bands[Math.floor(Math.random()*bands.length)];
console.log(randomBand);

// capture user innput with keyup

//check userinput with letters in array
