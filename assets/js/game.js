
// global variables to hold basic game structure
var bands = ["decendents", "misfits", "fuagzi", "jfa", "adolescents", "circle jerks"];
var words = [];
var guessedLetters = [];
var userWins = 0;
var userLose = 0;

// variables getting id from html

var userGuess = document.getElementById("userGuess");
var guessedLetters = document.getElementById("guessedLetters");
var userWins = document.getElementById("userWins");
var userLose = document.getElementById("userLose");

// create functionn to get random word
var randomBand = bands[Math.floor(Math.random()*bands.length)];
console.log(randomBand);

//take bands and replace with "_"
for (var i = 0; i < randomBand.length; i++) {
   words[i] = "_";
   console.log(words);
   document.getElementById("word").innerHTML = words.join(" ");
}

var remainingLetters = randomBand.length;
// onletter key up code
document.onkeyup = function(event){
// creating the event for user keyup
    var letter = event.key.toLowerCase();
    
// capture user innput with keyup
    console.log(letter);

//check userinput with letters in array

// statement for guessing a word

// for loop for replacing letters in random bands



}

