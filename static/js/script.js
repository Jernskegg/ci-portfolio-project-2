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

}

// lose game
function lose() {

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
        console.log(result)

    })

    btnPaper.addEventListener("click", function () {
        paper();
    })

    btnScissors.addEventListener("click", function () {
        scissors();
    })

    btnLizard.addEventListener("click", function () {
        lizard();
    })

    btnSpock.addEventListener("click", function () {
        spock();
    })


}

function rock() {
    let nonPlayerChoice = numgen();
    let playerChoice = "Rock";
    let result = "";
    if (nonPlayerChoice == "Lizard" || nonPlayerChoice == "Scissors") {
        result = msg(playerChoice, nonPlayerChoice, win = 1);
        

    } else if (nonPlayerChoice == playerChoice) {
        result = msg(playerChoice, nonPlayerChoice, win = 2);

    } else {
        result = msg(playerChoice, nonPlayerChoice, win = 0);
    }
    return result;
}

function paper() {

}

function scissors() {

}

function lizard() {

}

function spock() {

}

function msg(playerChoice,nonPlayerChoice,win) {
    let result = "";
    if (win == 1) {
        result = `You chose ${playerChoice}, Conputer chose ${nonPlayerChoice}. ${playerChoice} beats ${nonPlayerChoice}. Round Won.`;
    } else if (win == 2) {
        result = `You chose ${playerChoice}, Conputer chose ${nonPlayerChoice}. Stalemate.`;
    } else {
        result = `You chose ${playerChoice}, Conputer chose ${nonPlayerChoice}. ${nonPlayerChoice} beats ${playerChoice}. Round lost.`;
    }
    return result;
}

/**
 * runs the how to play area and sets the game ID to display:block and the rest to Display:none
 */
function howToPlay() {
    document.getElementById("game").style.display = "none";
    document.getElementById("how").style.display = "block";

    let iUnderstand = document.getElementById("understand")

    iUnderstand.addEventListener("click", function () {
        document.getElementById("game").style.display = "block";
        document.getElementById("how").style.display = "none";
        return;
    })
}