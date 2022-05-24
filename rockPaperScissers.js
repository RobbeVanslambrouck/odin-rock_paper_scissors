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
    if (p === "rock" && c === "scissers" || p === "paper" && c === "rock" || p === "scissers" && c === "paper") {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    return "Lose Win! " + computerSelection + " beats " + playerSelection;
}
