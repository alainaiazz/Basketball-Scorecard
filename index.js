// one point 

let homeScored = document.getElementById("home-score")
let currentScore = 0


//Home 

function onePointHome() {
    currentScore += 1
    homeScored.textContent = currentScore
}

function twoPointsHome() {
    currentScore += 2
    homeScored.textContent = currentScore
}

function threePointsHome() {
    currentScore += 3
    homeScored.textContent = currentScore
}

let guestScored = document.getElementById("guest-score")

//Guest 

function onePointGuest() {
    currentScore += 1
    guestScored.textContent = currentScore
}

function twoPointsGuest() {
    currentScore += 2
    guestScored.textContent = currentScore
}

function threePointsGuest() {
    currentScore += 3
    guestScored.textContent = currentScore
}