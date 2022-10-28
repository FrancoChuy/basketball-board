let scoreHomeOnePoint = document.getElementById("number1-home")
let homeScoreEl = document.getElementById("score-home")
let homeScore = 0

function increaseHomePlus1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}


let scoreHomeTwoPoints = document.getElementById("number2-home")

function increaseHomePlus2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

let scoreHomeThreePoints = document.getElementById("number3-home")

function increaseHomePlus3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


let scoreGuestOnePoint = document.getElementById("number1-guest")
let guestScoreEl = document.getElementById("score-guest")
let guestScore = 0

function increaseGuestPlus1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestPlus2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestPlus3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}