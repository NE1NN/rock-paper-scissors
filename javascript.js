// Functions //
function getComputerChoice (){
    // Returns a random int from 0 to 2
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a draw! Both players picked rock!";
        }
        else if (computerSelection === "paper") {
            return "You lose! Paper beats rock!";
        }
        else {
            return "You win! Rock beats scissors!";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock!";
        }
        else if (computerSelection === "paper") {
            return "It's a draw! Both players picked paper!";
        }
        else {
            return "You lose! Scissors beat paper!";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors!";
        }
        else if (computerSelection === "paper") {
            return "You win! Scissors beats paper!";
        }
        else {
            return "It's a draw! Both players picked scissors!";
        }
    }
    else {
        return "Invalid input";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Pick something");
        playerChoice = playerChoice.toLowerCase();
        console.log(playRound(playerChoice, getComputerChoice()));
    }
}

game();