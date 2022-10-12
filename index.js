let homeScore = document.getElementById("homescore")
let guestScore = document.getElementById("guestscore")
let newGame = document.getElementById("newGameBtn")
let countH = 0
let countG = 0

function fcnH1() {
    countH += 1
    homeScore.textContent = countH
}

function fcnH2() {
    countH += 2
    homeScore.textContent = countH
}

function fcnH3() {
    countH += 3
    homeScore.textContent = countH
}

function fcnG1() {
    countG += 1
    guestScore.textContent = countG
}

function fcnG2() {
    countG += 2
    guestScore.textContent = countG
}

function fcnG3() {
    countG += 3
    guestScore.textContent = countG
}

function gameReset() {
    countH = 0
    countG = 0
    homeScore.textContent = countH
    guestScore.textContent = countG
}