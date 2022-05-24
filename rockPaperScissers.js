console.log("welkom to Rock Paper Scissors");

function computerPlay() {
    let plays = ["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();

    if(p === c) {
        return "Tie"
    }
    if (p === "rock" && c === "scissors" || 
        p === "paper" && c === "rock" || 
        p === "scissors" && c === "paper") {
        return "player wins";
    }
    return "computer wins";
}

function isPlayerWinner(result) {
    if (result.toLowerCase().includes("player")) {
        return true;
    }
    return false;
}

function isComputerWinner(result) {
    if (result.toLowerCase().includes("computer")) {
        return true;
    }
    return false;
}

function GameHasWinner(playerScore, computerScore, winningScore) {
    if (playerScore === winningScore) {
        return "player";
    }

    if (computerScore === winningScore) {
        return "computer";
    }
    return "";
}

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const divResult = document.querySelector('#result');
const divPlayerScore = document.querySelector('#playerScore');
const divComputerScore = document.querySelector('#computerScore');
const divPlayerSelection = document.querySelector('#playerSelection');
const divComputerSelection = document.querySelector('#computerSelection');
const pRoundInicator = document.querySelector('#roundInicator');

btnRock.addEventListener('click', () => OnClickRound("rock", computerPlay()));
btnPaper.addEventListener('click', () => OnClickRound("paper", computerPlay()));
btnScissors.addEventListener('click', () => OnClickRound("scissors", computerPlay()));

function OnClickRound(playerSelection, computerSelection) {
    let result = playRound(playerSelection, computerSelection);
    roundCount++;
    const roundString = function() { 
        return "ROUND " + roundCount + ": "
    }
    let message = "Tie";
    console.log(result);
    if (isPlayerWinner(result)) {
        playerScore++;
        message = "You have won this round";
    }
    if (isComputerWinner(result)) {
        computerScore++;
        message = "You have lost this round";
    }
    updateUI(playerSelection, computerSelection, message);
    return result;
}

function updateUI(playerSelection, computerSelection, result) {
    divResult.textContent = result;
    pRoundInicator.textContent = "Round " + roundCount
    divPlayerSelection.textContent = playerSelection;
    divComputerSelection.textContent = computerSelection;   
    divPlayerScore.textContent = "Your score: " + playerScore;
    divComputerScore.textContent = "CPU score: " + computerScore;
    let winner = GameHasWinner(playerScore, computerScore, 5);
    if (winner != "") {
        roundCount = 0;
        if (winner === "player") {
            divResult.textContent = "You Have Won the Game!!!"
        }
        if (winner === "computer") {
            divResult.textContent = "You Have Lost the Game!!!"
        }
        playerScore = 0;
        computerScore = 0;
    }
}

updateUI("", "", "Chose Rock Paper Scissors")