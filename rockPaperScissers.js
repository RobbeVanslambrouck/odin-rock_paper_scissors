console.log("welkom to Rock Paper Scissers");

function computerPlay() {
    let plays = ["Rock", "Paper", "Scissers"];
    return plays[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();

    if(p === c) {
        return "It's a Tie"
    }
    if (p === "rock" && c === "scissers" || 
        p === "paper" && c === "rock" || 
        p === "scissers" && c === "paper") {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    return "You Lose! " + computerSelection + " beats " + playerSelection;
}

function fiveRound() {
    playerScore = 0;

    for(let i=0; i < 5; i++) {
        let userInput = prompt("Type Rock, Paper or Scissers");
        
        result = playRound(userInput, computerPlay());
        console.log(result);
        if (result.toLowerCase().includes("you win")) {
            playerScore++;
        }
        if (result.toLowerCase().includes("you lose")) {
            playerScore--;
        }
    }

    if (playerScore < 0) {
        return "You Lost this game";
    }
    if (playerScore > 0) {
        return "You Won this game";
    }
    return "this game ends in a Tie"
}

function OnClickRound(playerSelection) {
    let result = playRound(playerSelection, computerPlay());
    console.log(result);
    return result;
}

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', () => OnClickRound("rock"));
btnPaper.addEventListener('click', () => OnClickRound("paper"));
btnScissors.addEventListener('click', () => OnClickRound("scissors"));
