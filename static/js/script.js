document.addEventListener("DOMContentLoaded", function () {
    //hides javascript error if javascript is running
    document.getElementById("support").style.display = "none";
    game();
});

/**
 * Generates random number between 1-5 and picks an option out of the array by using the number as the index.
 * @returns {string} returns a value for the choices array ("Rock", "Paper", "Scissors", "Lizard", "Spock")
 */
function nonPlayerChoiceGenerator() {
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    return choices[Math.floor(Math.random() * 5)];
}

/**
 * compares and checks if it should show a win message
 */
function win() {
    let oldwinscore = parseInt(document.getElementById(`wins`).innerText);
    if (oldwinscore >= 2) {
        switchDisplay("win");
    } else {
        document.getElementById("wins").innerText = ++oldwinscore;
    }
}

/**
 * compares and checks if it should show a win message
 */
function lose() {
    let oldLossScore = parseInt(document.getElementById(`losses`).innerText);
    if (oldLossScore >= 2) {
        switchDisplay("lose");
    } else {
        document.getElementById("losses").innerText = ++oldLossScore;
    }
}
/**
 * Initializes the game and adds eventlisteners to the game.
 */
function game() {
    switchDisplay("game");

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
        switchDisplay("howSection");
    });

    iUnderstand.addEventListener("click", function () {
        switchDisplay("game");
    });

    playAgain.addEventListener("click", function () {
        switchDisplay("game");
        resetScore();
    });

    retryGame.addEventListener("click", function () {
        switchDisplay("game");
        resetScore();
    });
}
/**
 * inputs user choice with oposing values for comparison.
 * @param {string} playerChoice - Player choice
 * @param {string} winningChoiceOne - oposing that should make comparison send a loss
 * @param {string} winningChoiceTwo - oposing that should make comparison send a loss
 */
function roundGame(playerChoice, winningChoiceOne, winningChoiceTwo) {
    let nonPlayerChoice = nonPlayerChoiceGenerator();
    if (nonPlayerChoice === winningChoiceOne || nonPlayerChoice === winningChoiceTwo) {
        result = RoundMessage(playerChoice, nonPlayerChoice,1);
    } else if (nonPlayerChoice === playerChoice) {
        result = RoundMessage(playerChoice, nonPlayerChoice,2);
    } else {
        result = RoundMessage(playerChoice, nonPlayerChoice,0);
    }
}
/**
 * updates the HTML to present the outcome message of the round to the user
 * @param {string} playerChoice - inputs of the players choice
 * @param {string} nonPlayerChoice - input of the computers choice
 * @param {number} state - input for the state of the game (1 = win, 2 = draw and else it would give the lose message)
 */
function RoundMessage(playerChoice, nonPlayerChoice, state) {
    let resultOne;
    let resultTwo;
    let resultThree;
    if (state === 1) {
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

/**
 * This function resets the score of the game after it is being called
 */
function resetScore() {
    document.getElementById("losses").innerText = 0;
    document.getElementById("wins").innerText = 0;
    document.getElementById("textOne").textContent = "Pick your move!";
    document.getElementById("textTwo").textContent = "";
    document.getElementById("textThree").textContent = "";
}

/**
 * Changes which style.display block should be shown from the input
 * 
 * @param {string} displayBlock id ("game","howsection","win","lose")
 */
function switchDisplay(displayBlock) {
    document.getElementById("game").style.display = "none";
    document.getElementById("howSection").style.display = "none";
    document.getElementById("win").style.display = "none";
    document.getElementById("lose").style.display = "none";
    document.getElementById(displayBlock).style.display = "block";
}