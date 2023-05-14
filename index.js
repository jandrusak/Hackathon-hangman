// "use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



// console.log("hello world")
let finalWord = ["hello",
"robot",
"jazz",
"whisper",
"price",
"past"]

// let selectWord = ""
let chancesLeft = 6
let guessWord = [];
let theAnswer = finalWord[Math.floor(Math.random()*finalWord.length) ];
// console.log(theAnswer)

const gameBoard = () => {
    if (guessWord.length ===0) {
    for (let i = 0; i < theAnswer.length; i++) {
        guessWord.push("_")
    } }
    console.log(guessWord.join(""))
}
const userInput = (letter) => {
 for(let i = 0; i < theAnswer.length; i++) {
    if(letter === theAnswer[i]) {
        guessWord[i] = letter 
    }
 } 
    if(!theAnswer.includes(letter)) {
        console.log("sorry, try again")
        chancesLeft--
        console.log(`here are your chances left: ${chancesLeft}`)
    } 
    gameBoard()
};

const checkForWIn = () => {
    // return guessWord.join('') === selectWord
    if (!guessWord.includes("_")) {
        console.log("you win!")
    } else if (chancesLeft===0){
        console.log("loser!")
    }
}

const hangman = (letter) => {
    userInput(letter)
    checkForWIn()
    // console.log('The word is: ' + guessWord.join(''))
}

console.log('Lets Play!')

gameBoard()

// prompt in terminal
const getPrompt = () => {
	rl.question('type a letter guess: ', (letter) => {
		hangman(letter);
		getPrompt();
	}); 
};
if (typeof describe === 'function') {
	// theAnswer = 'hello';
	describe('hangman()', () => {
		it('should be of type function', () => {
			assert.equal(typeof hangman, 'function');
		});
	});
} else {
	getPrompt();
}



