document.addEventListener("DOMContentLoaded", function () {
    //hides javascript error if javascript is running
    document.getElementById("support").style.display = "none";
    game();
});

/**
 * Generates random number between 1-5 and retuns it as a string from an array to compare if it's a win or lose.
 * @returns {"random choice"}
 * 1. rock
 * 2. paper
 * 3. scissors
 * 4. lizard
 * 5. spock
 */

function nonPlayerChoiceGenerator() {
    let num = Math.floor(Math.random() * 5);
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let choice = choices[num];
    return choice;
}

// win game
function win() {
    let oldwinscore = parseInt(document.getElementById(`wins`).innerText);
    if (oldwinscore >= 2) {
        switchDisplay("none", "none", "block", "none");
    } else {
        document.getElementById("wins").innerText = ++oldwinscore;
    }
}

// lose game
function lose() {
    let oldLossScore = parseInt(document.getElementById(`losses`).innerText);
    if (oldLossScore >= 2) {
        switchDisplay("none", "none", "none", "block");
    } else {
        document.getElementById("losses").innerText = ++oldLossScore;
    }
}
/**
 * Initializes the game and adds eventlisteners to the game.
 */
function game() {
    switchDisplay("block", "none", "none", "none");

    let btnRock = document.getElementById("rock");
    let btnPaper = document.getElementById("paper");
    let btnScissors = document.getElementById("scissors");
    let btnLizard = document.getElementById("lizard");
    let btnSpock = document.getElementById("spock");
    let btnHowToPlay = document.getElementById("howToPlay");
    let iUnderstand = document.getElementById("understand");
    let playAgain = document.getElementById("playAgain");
    let retryGame = document.getElementById("retry");
    //Game Buttons
    btnRock.addEventListener("click", function () {
        roundGame("Rock", "lizard", "Scissors");
    });

    btnPaper.addEventListener("click", function () {
        roundGame("Paper", "Rock", "Spock");
    });

    btnScissors.addEventListener("click", function () {
        roundGame("Scissors", "Lizard", "Paper");
    });

    btnLizard.addEventListener("click", function () {
        roundGame("Lizard", "Paper", "Spock");
    });

    btnSpock.addEventListener("click", function () {
        roundGame("Spock", "Paper", "Scissors");
    });
    //Win lose and how to play buttons
    btnHowToPlay.addEventListener("click", function () {
        switchDisplay("none", "block", "none", "none");
    });

    iUnderstand.addEventListener("click", function () {
        switchDisplay("block", "none", "none", "none");
    });

    playAgain.addEventListener("click", function () {
        switchDisplay("block", "none", "none", "none");
        resetScore();
    });

    retryGame.addEventListener("click", function () {
        switchDisplay("block", "none", "none", "none");
        resetScore();
    });
}
/**
 *  inputs 3 values for comparison.
 * @param {string} playerChoice, text
 * @param {string} winningChoiceOne, 
 * @param {string} winningChoiceTwo, 
 */
function roundGame(playerChoice, winningChoiceOne, winningChoiceTwo) {
    let nonPlayerChoice = nonPlayerChoiceGenerator();
    let result;
    let state;
    if (nonPlayerChoice == winningChoiceOne || nonPlayerChoice == winningChoiceTwo) {
        result = RoundMessage(playerChoice, nonPlayerChoice, state = 1);
    } else if (nonPlayerChoice == playerChoice) {
        result = RoundMessage(playerChoice, nonPlayerChoice, state = 2);
    } else {
        result = RoundMessage(playerChoice, nonPlayerChoice, state = 0);
    }
    return;
}
/**
 * this function updates the HTML to present the outcome of the round to the user
 * @param {"Players input"}
 * @param {"computers input"}
 * @param
 */
function RoundMessage(playerChoice, nonPlayerChoice, state) {
    let resultOne;
    let resultTwo;
    let resultThree;
    if (state == 1) {
        resultOne = `You chose ${playerChoice}, Computer chose ${nonPlayerChoice}.`;
        resultTwo = `${playerChoice} beats ${nonPlayerChoice}.`;
        resultThree = `Round Won.`;
        document.getElementById("textThree").style.color = "green";
        win();
    } else if (state == 2) {
        resultOne = `You chose ${playerChoice}, Computer chose ${nonPlayerChoice}.`;
        resultTwo = "";
        resultThree = `Stalemate.`;
        document.getElementById("textThree").style.color = "blue";
    } else {
        resultOne = `You chose ${playerChoice}, Computer chose ${nonPlayerChoice}.`;
        resultTwo = ` ${nonPlayerChoice} beats ${playerChoice}.`;
        resultThree = `Round lost.`;
        document.getElementById("textThree").style.color = "red";
        lose();
    }

    document.getElementById("textOne").textContent = resultOne;
    document.getElementById("textTwo").textContent = resultTwo;
    document.getElementById("textThree").textContent = resultThree;
}

function resetScore() {
    document.getElementById("losses").innerText = 0;
    document.getElementById("wins").innerText = 0;
    document.getElementById("textOne").textContent = "Pick your move!";
    document.getElementById("textTwo").textContent = "";
    document.getElementById("textThree").textContent = "";
}
/**
 * This changes the display mode on style.display from the input
 * 
 * @param {string} displayGame
 * @param {string} displayHowToPlay 
 * @param {string} displayWinScreen 
 * @param {string} displayLoseScreen 
 */

function switchDisplay(displayGame, displayHowToPlay, displayWinScreen, displayLoseScreen) {
    document.getElementById("game").style.display = displayGame;
    document.getElementById("howSection").style.display = displayHowToPlay;
    document.getElementById("win").style.display = displayWinScreen;
    document.getElementById("lose").style.display = displayLoseScreen;
}