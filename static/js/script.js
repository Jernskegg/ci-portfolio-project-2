//hide javascript error if javascript is running
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("support").style.display = "none";
    initialize();
    game();
})

/**
 * Generates random number between 1-5 and retuns it as a string from an array to compare if it's a win or lose.
 * 1. rock
 * 2. paper
 * 3. scissors
 * 4. lizard
 * 5. spock
 */

function nonPlayerChoiceGenerator() {
    let num = Math.floor(Math.random() * 5);
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
    let choice = choices[num]
    return choice;
}

function initialize() {
    let howtp = document.getElementById("htp");
    howtp.addEventListener("click", function () {
        switchDisplay("none", "block", "none", "none")
    })
    let iUnderstand = document.getElementById("understand")
    iUnderstand.addEventListener("click", function () {
        switchDisplay("block", "none", "none", "none")
    })
    let playAgain = document.getElementById("playAgain")
    playAgain.addEventListener("click", function () {
        switchDisplay("block", "none", "none", "none")
        return;
    })
    let retryGame = document.getElementById("retry")
    retryGame.addEventListener("click", function () {
        switchDisplay("block", "none", "none", "none")
        return;
    })

}
// win game
function win() {
    let oldwinscore = parseInt(document.getElementById(`wins`).innerText);
    if (oldwinscore >= 2) {
        switchDisplay("none","none","block","none")
        resetScore();
    } else {
        document.getElementById("wins").innerText = ++oldwinscore;
    }
}

// lose game
function lose() {
    let oldLossScore = parseInt(document.getElementById(`losses`).innerText);
    if (oldLossScore >= 2) {
        switchDisplay("none", "none", "none", "block")
        resetScore();
    } else {
        document.getElementById("losses").innerText = ++oldLossScore;
    }
}
/**
 * runs the game area and sets the game ID to display:block and the rest to Display:none
 */
function game() {
    switchDisplay("block","none","none","none")

    let btnRock = document.getElementById("rock");
    let btnPaper = document.getElementById("paper");
    let btnScissors = document.getElementById("scissors");
    let btnLizard = document.getElementById("lizard");
    let btnSpock = document.getElementById("spock");

    btnRock.addEventListener("click", function () {
        roundGame("Rock", "lizard", "Scissors");
    })

    btnPaper.addEventListener("click", function () {
        roundGame("Paper", "Rock", "Spock");
    })

    btnScissors.addEventListener("click", function () {
        roundGame("Scissors", "Lizard", "Paper");
    })

    btnLizard.addEventListener("click", function () {
        roundGame("Lizard", "Paper", "Spock");
    })

    btnSpock.addEventListener("click", function () {
        roundGame("Spock", "Paper", "Scissors");
    })
}
/**
 *  inputs 3 values for comparison.
 * @param {string} playerChoice, text
 * @param {string} winningChoiceOne, 
 * @param {string} winningChoiceTwo, 
 */
function roundGame(playerChoice, winningChoiceOne, winningChoiceTwo) {
    let nonPlayerChoice = nonPlayerChoiceGenerator();
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
 * function / message generator from the results made in the button functions
 * 
 */
function RoundMessage(playerChoice, nonPlayerChoice, state) {
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
    return;
}

function resetScore() {
    let oldLossScore = parseInt(document.getElementById(`losses`).innerText);
    let oldwinscore = parseInt(document.getElementById(`wins`).innerText);
    document.getElementById("losses").innerText = 0;
    document.getElementById("wins").innerText = 0;
}
/**
 * This changes the display mode on
 * @param {string} block or none "displayGame" to "block" or "none" 
 * @param {string} displayHowToPlay 
 * @param {string} displayWinScreen 
 * @param {string} displayLoseScreen 
 */

function switchDisplay(displayGame, displayHowToPlay, displayWinScreen, displayLoseScreen) {
    document.getElementById("game").style.display = displayGame;
    document.getElementById("how").style.display = displayHowToPlay;
    document.getElementById("win").style.display = displayWinScreen;
    document.getElementById("lose").style.display = displayLoseScreen;
}