document.addEventListener("DOMContentLoaded", function () {
    let howtp = document.getElementById("htp");
    let iUnderstand = document.getElementById("understand")

    howtp.addEventListener("click", function () {
        howToPlay();
    })

    iUnderstand.addEventListener("click", function () {
        game();
    })

})

// random num gen
function numgen() {

}

// win game

function win() {

}

// lose game
function lose() {

}

// game
function game() {
    document.getElementById("game").style.display = "block";
    document.getElementById("how").style.display = "none";

}

// how to play
function howToPlay() {
    document.getElementById("game").style.display = "none";
    document.getElementById("how").style.display = "block";
}