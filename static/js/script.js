//hide javascript error if javascript is running
document.getElementById("support").style.display = "none";

document.addEventListener("DOMContentLoaded", function () {

    let howtp = document.getElementById("htp");



    howtp.addEventListener("click", function () {
        howToPlay();
    })



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
function numgen() {
    let num = Math.floor(Math.random() * 5);
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
    let choice = choices[num]
    return choice;
}

// win game

function win() {
    let oldwinscore = parseInt(document.getElementById(`wins`).innerText);
    if (oldwinscore >= 2) {
        document.getElementById("game").style.display = "none";
        document.getElementById("how").style.display = "none";
        document.getElementById("win").style.display = "block";
        document.getElementById("lose").style.display = "none";
    } else {
        document.getElementById("wins").innerText = ++oldwinscore;
    }
}

// lose game
function lose() {
    let oldLossScore = parseInt(document.getElementById(`losses`).innerText);
    if (oldLossScore >= 2) {
        document.getElementById("game").style.display = "none";
        document.getElementById("how").style.display = "none";
        document.getElementById("win").style.display = "none";
        document.getElementById("lose").style.display = "block";
    } else {
        document.getElementById("losses").innerText = ++oldLossScore;
    }
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
        result = rock();
        return result;
    })

    btnPaper.addEventListener("click", function () {
        result = paper();
    })

    btnScissors.addEventListener("click", function () {
        result = scissors();
    })

    btnLizard.addEventListener("click", function () {
        result = lizard();
    })

    btnSpock.addEventListener("click", function () {
        result = spock();
    })
}

function rock() {
    let nonPlayerChoice = numgen();
    let playerChoice = "Rock";
    if (nonPlayerChoice == "Lizard" || nonPlayerChoice == "Scissors") {
        result = msg(playerChoice, nonPlayerChoice, state = 1);
    } else if (nonPlayerChoice == playerChoice) {
        result = msg(playerChoice, nonPlayerChoice, state = 2);
    } else {
        result = msg(playerChoice, nonPlayerChoice, state = 0);
    }
    return result;
}

function paper() {
    let nonPlayerChoice = numgen();
    let playerChoice = "paper";
    if (nonPlayerChoice == "Rock" || nonPlayerChoice == "Spock") {
        result = msg(playerChoice, nonPlayerChoice, state = 1);
    } else if (nonPlayerChoice == playerChoice) {
        result = msg(playerChoice, nonPlayerChoice, state = 2);
    } else {
        result = msg(playerChoice, nonPlayerChoice, state = 0);
    }
    return;
}

function scissors() {
    let nonPlayerChoice = numgen();
    let playerChoice = "Scissors";
    if (nonPlayerChoice == "Lizard" || nonPlayerChoice == "Paper") {
        result = msg(playerChoice, nonPlayerChoice, state = 1);
    } else if (nonPlayerChoice == playerChoice) {
        result = msg(playerChoice, nonPlayerChoice, state = 2);
    } else {
        result = msg(playerChoice, nonPlayerChoice, state = 0);
    }
    return;
}

function lizard() {
    let nonPlayerChoice = numgen();
    let playerChoice = "Lizard";
    if (nonPlayerChoice == "Paper" || nonPlayerChoice == "Spock") {
        result = msg(playerChoice, nonPlayerChoice, state = 1);
    } else if (nonPlayerChoice == playerChoice) {
        result = msg(playerChoice, nonPlayerChoice, state = 2);
    } else {
        result = msg(playerChoice, nonPlayerChoice, state = 0);
    }
    return;
}

function spock() {
    let nonPlayerChoice = numgen();
    let playerChoice = "Spock";
    if (nonPlayerChoice == "Rock" || nonPlayerChoice == "Scissors") {
        result = msg(playerChoice, nonPlayerChoice, state = 1);
    } else if (nonPlayerChoice == playerChoice) {
        result = msg(playerChoice, nonPlayerChoice, state = 2);
    } else {
        result = msg(playerChoice, nonPlayerChoice, state = 0);
    }
    return;
}
/**
 * function / message generator from the results made in the button functions
 * 
 */
function msg(playerChoice, nonPlayerChoice, state) {
    let resultOne = "";
    let resultTwo = "";
    let resultThree = "";
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