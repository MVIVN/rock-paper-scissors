
// STEP ONE: Write a function which lets the computer choose randomly between rock, paper, and scissors

function getComputerChoice() {
    // Define a list/array of three choices between Rock, Paper and Scissors
    let choices = ["rock", "paper", "scissors"];

    // Make the computer randomly choose between one of the choices
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    //   For future ref, <Math.random()> generates a random number between 0 and 1, which will likely have a decimal point
    //   Multiplying by <*choices.length> multiplies that decimal by the length of the array
    //   Finally, <Math.floor> which wraps the whole operation rounds down the decimal to the nearest whole number

    // Return the result of the computer's choice
    return computerChoice;
}

const computerSelection = getComputerChoice(); // Store the computer's random choice in a variable for later
console.log(`Computer chose: ${computerSelection}`); // Used console log to check that the function is working and generating expected results



// STEP TWO: Allow the user to input a selection between rock, paper, and scissors, and convert it to lowercase

const playerSelection = prompt('Type "rock", "paper", or "scissors" to make a choice!').toLowerCase();
console.log(`Player chose: ${playerSelection}`); // Used console log to check that user input is being stored correctly in playerSelection variable



// STEP THREE: Create a function to play one round of Rock, Paper, Scissors and return a result. Log the result in the console

function playRound(playerSelection, computerSelection) {
    // Used conditional statements to check for all gameplay scenarios and return a result
    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats scissors!");
        return "win";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats rock!");
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats paper!");
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock!");
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats scissors!");
        return "lose";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats paper!");
        return "win";
    }

}

// console.log(playRound(playerSelection, computerSelection)) // Used console log to check that function is working as expected



// STEP FOUR: Create a function called game() which actually keeps score and reports a winner or a loser at the end of 5 rounds
 function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        if (playRound(playerSelection, computerSelection) === "win") {
            playerScore += 1;
        } else if (playRound(playerSelection, computerSelection) === "lose") {
            computerScore +=1;
        }
    }

    if (playerScore === computerScore) {
        return "It's a draw!"
    } else if (playerScore > computerScore) {
        return "You win! Congratulations!"
    } else {
        return "You lose! Better luck next time!"
    }
 }

 game();