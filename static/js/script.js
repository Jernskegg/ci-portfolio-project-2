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

    btnRock.addEventListener("click", function () {
        rock();
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
    numgen();
    let num = numgen();
    if (num == "Lizard" || num == "Scissors") {
        console.log("win");
        console.log(num);
    } else {
        console.log("lose");
        console.log(num);
    }
    return;
}

function paper() {
    numgen();
    let num = numgen();
    if (num == "Rock" || num == "Spock") {
        console.log("win");
        console.log(num);
    } else {
        console.log("lose");
        console.log(num);
    }
    return;
}

function scissors() {
    numgen();
    let num = numgen();
    if (num == "Lizard" || num == "Paper") {
        console.log("win");
        console.log(num);
    } else {
        console.log("lose");
        console.log(num);
    }
    return;
}

function lizard() {
    numgen();
    let num = numgen();
    if (num == "Paper" || num == "spock") {
        console.log("win");
        console.log(num);
    } else {
        console.log("lose");
        console.log(num);
    }
    return;
}

function spock() {
    numgen();
    let num = numgen();
    if (num == "Rock" || num == "Scissors") {
        console.log("win");
        console.log(num);
    } else {
        console.log("lose");
        console.log(num);
    }
    return;
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