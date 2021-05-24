//hide javascript error if javascript is running


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("support").style.display = "none";
    let howtp = document.getElementById("htp");



    howtp.addEventListener("click", function () {
        howToPlay();
    })


    initialize();
    game();
})
/**
 * Generates random number between 1-5 and retuns it the options to compare if it's a win or lose.
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

}

// win game

function win() {
    let oldwinscore = parseInt(document.getElementById(`wins`).innerText);
    if (oldwinscore >= 2) {
        document.getElementById("game").style.display = "none";
        document.getElementById("how").style.display = "none";
        document.getElementById("win").style.display = "block";
        document.getElementById("lose").style.display = "none";
        reset();
    } else {
        document.getElementById("wins").innerText = ++oldwinscore;
    }

    let playAgain = document.getElementById("playAgain")
    playAgain.addEventListener("click", function () {
        document.getElementById("game").style.display = "block";
        document.getElementById("how").style.display = "none";
        document.getElementById("win").style.display = "none";
        document.getElementById("lose").style.display = "none";
        return;
    })
}

// lose game
function lose() {
    let oldLossScore = parseInt(document.getElementById(`losses`).innerText);
    if (oldLossScore >= 2) {
        document.getElementById("game").style.display = "none";
        document.getElementById("how").style.display = "none";
        document.getElementById("win").style.display = "none";
        document.getElementById("lose").style.display = "block";
        reset();
    } else {
        document.getElementById("losses").innerText = ++oldLossScore;
    }
    let retry = document.getElementById("retry")
    retry.addEventListener("click", function () {
        document.getElementById("game").style.display = "block";
        document.getElementById("how").style.display = "none";
        document.getElementById("win").style.display = "none";
        document.getElementById("lose").style.display = "none";
        return;
    })
}

/**
 * runs the game area and sets the game ID to display:block and the rest to Display:none
 */


function game() {
    document.getElementById("game").style.display = "block";
    document.getElementById("how").style.display = "none";

    let btnRock = document.getElementById("rock");
    let btnPaper = document.getElementById("paper");
    let btnScissors = document.getElementById("scissors");
    let btnLizard = document.getElementById("lizard");
    let btnSpock = document.getElementById("spock");
    let result = "";

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

function roundGame(playerChoice, conflictOne, conflictTwo) {
    let nonPlayerChoice = nonPlayerChoiceGenerator();
    if (nonPlayerChoice == conflictOne || nonPlayerChoice == conflictTwo) {
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

/**
 * runs the how to play area and sets the game ID to display:block and the rest to Display:none
 */
function howToPlay() {
    document.getElementById("game").style.display = "none";
    document.getElementById("how").style.display = "block";
    document.getElementById("win").style.display = "none";
    document.getElementById("lose").style.display = "none";

    let iUnderstand = document.getElementById("understand")

    iUnderstand.addEventListener("click", function () {
        document.getElementById("game").style.display = "block";
        document.getElementById("how").style.display = "none";
        document.getElementById("win").style.display = "none";
        document.getElementById("lose").style.display = "none";
        return;
    })
}

function reset() {
    let oldLossScore = parseInt(document.getElementById(`losses`).innerText);
    let oldwinscore = parseInt(document.getElementById(`wins`).innerText);
    document.getElementById("losses").innerText = 0;
    document.getElementById("wins").innerText = 0;

}