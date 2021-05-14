document.addEventListener("DOMContentLoaded", function () {
    let howtp = document.getElementById("htp");
    let iUnderstand = document.getElementById("understand")
    let btnRock = document.getElementById("rock");
    let btnPaper = document.getElementById("paper");
    let btnScissors = document.getElementById("scissors");
    let btnLizard = document.getElementById("lizard");
    let btnSpock = document.getElementById("spock");


    howtp.addEventListener("click", function () {
        howToPlay();
    })

    iUnderstand.addEventListener("click", function () {
        game();
    })
    
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
let num = Math.floor(Math.random() * 5) + 1;
return num;
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

}

function rock(){
   numgen();
   let num = numgen();
   if (num == 1 || num == 2) {
       console.log("win");
       console.log(num)
   }  else {
       console.log("lose");
       console.log(num)
   }
}

function paper(){
   
}

function scissors(){
    
}

function lizard(){
    
}

function spock(){
    
}

/**
 * runs the how to play area and sets the game ID to display:block and the rest to Display:none
 */
function howToPlay() {
    document.getElementById("game").style.display = "none";
    document.getElementById("how").style.display = "block";
}