// Functions //
function getComputerChoice (){
    // Returns a random int from 0 to 2
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    }
    else if (choice === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            return "It's a draw! Both players picked rock!";
        }
        else if (computerSelection === "Paper") {
            return "You lose! Paper beats rock!";
        }
        else {
            return "You win! Rock beats scissors!";
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You win! Paper beats rock!";
        }
        else if (computerSelection === "Paper") {
            return "It's a draw! Both players picked paper!";
        }
        else {
            return "You lose! Scissors beat paper!";
        }
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "You lose! Rock beats scissors!";
        }
        else if (computerSelection === "Paper") {
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
        console.log(playRound(playerChoice, getComputerChoice()));
    }
}

game();