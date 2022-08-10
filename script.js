
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

function getPlayerChoice() {
    // let playerChoice = prompt('Type "rock", "paper", or "scissors" to make a choice!').toLowerCase();
    return playerChoice;
}

let outcome; // create a variable to store the outcome of each game in the function below

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        outcome = "It's a draw!\n ";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        outcome = "You win! Rock beats scissors!\n ";
        return "win";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        outcome = "You lose! Paper beats rock!\n ";
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        outcome = "You lose! Scissors beats paper!\n ";
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        outcome = "You win! Paper beats rock!\n ";
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        outcome = "You lose! Rock beats scissors!\n ";
        return "lose";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        outcome = "You win! Scissors beats paper!\n ";
        return "win";
    }

}

 function game() {
    let playerScore = 0;
    let computerScore = 0;

    // for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(`You chose: ${playerSelection}!\nComputer chose: ${computerSelection}!`)

        if (playRound(playerSelection, computerSelection) === "win") {
            console.log(outcome);
            playerScore += 1;
        } else if (playRound(playerSelection, computerSelection) === "lose") {
            computerScore +=1;
            console.log(outcome);
        } else {
            console.log(outcome);
        }
    // }

    console.log(`FINAL SCORES\nPlayer: ${playerScore}\nComputer: ${computerScore}\n `);

    if (playerScore === computerScore) {
        console.log("It's a draw!");
    } else if (playerScore > computerScore) {
        console.log("You win! Congratulations!");
    } else {
        console.log("You lose! Better luck next time!");
    }
 }

 game();