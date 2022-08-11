// Global variables
let playerScore = 0;
let computerScore = 0;
let outcome = 'Good luck!'; // stores outcome of each round. defaults to "good luck" at the start of a new game

const gameOutcomes = [
    "It's a draw!\n ",                    //0
    "You win! Rock beats scissors!\n ",   //1
    "You lose! Paper beats rock!\n ",     //2
    "You lose! Scissors beats paper!\n ", //3
    "You win! Paper beats rock!\n ",      //4
    "You lose! Rock beats scissors!\n ",  //5
    "You win! Scissors beats paper!\n "   //6
];


// Functions
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerChoice() {
    // let playerChoice = prompt('Type "rock", "paper", or "scissors" to make a choice!').toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        showOutcome(gameOutcomes[0]);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        showOutcome(gameOutcomes[1]);
        return "win";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        showOutcome(gameOutcomes[2]);
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        showOutcome(gameOutcomes[3]);
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        showOutcome(gameOutcomes[4]);
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        showOutcome(gameOutcomes[5]);
        return "lose";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        showOutcome(gameOutcomes[6]);
        return "win";
    }
}

function showOutcome(displayResult) {
    resultBox.textContent = displayResult;
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    console.log(`You chose: ${playerSelection}!\nComputer chose: ${computerSelection}!`)

    if (playRound(playerSelection, computerSelection) === "win") {
        playerScore += 1;
    } else if (playRound(playerSelection, computerSelection) === "lose") {
        computerScore += 1;
    }

    userScore.innerHTML = `<h2>YOU: <span id='score-tick'>${playerScore}<span></h2>`;
    pcScore.innerHTML = `<h2>COMPUTER: <span id='score-tick'>${computerScore}<span></h2>`;
}

function endGame(userTotal, computerTotal) {
    if ((userTotal === 5) || (computerTotal === 5)) {
        choices.remove();
        container.insertBefore(finalResult, scores);
        if (userTotal > computerTotal) {
            finalResult.innerHTML =
                `<h2>You win! Congratulations!</h2>
                <h2>FINAL SCORES</h2>
                <h3>You: ${userTotal}</h3>
                <h3>Computer: ${computerTotal}\n</h3>`;
        } else {
            finalResult.innerHTML = 
                `<h2>You lose! Better luck next time!</h2>
                <h2>FINAL SCORES</h2>
                <h3>You: ${userTotal}</h3>
                <h3>Computer: ${computerTotal}</h3>`;
        }
    }
}




// DOM manipulation
const container = document.querySelector('#container');
const headline = document.querySelector('#headline');
const choices = document.querySelector('#choices');
const scores = document.querySelector('#scores');

const userScore = document.querySelector('#player-score');
const pcScore = document.querySelector('#computer-score');
const scoreSpan = document.createElement('span');
scoreSpan.setAttribute('id', 'score-tick')
userScore.innerHTML = `<h2>YOU: <span id='score-tick'>${playerScore}<span></h2>`;
pcScore.innerHTML = `<h2>COMPUTER: <span id='score-tick'>${computerScore}<span></h2>`;

const resultBox = document.createElement('div');
resultBox.setAttribute('id', 'results');
resultBox.setAttribute('style', 'border: 2px solid black; background-color: white; color: green; font-size: 2rem;');
resultBox.textContent = outcome;
container.appendChild(resultBox);

const finalResult = document.createElement('div');
finalResult.setAttribute('id', 'finalScores');
finalResult.setAttribute('style', 'border: 2px solid black; background-color: black; color: gold; font-size: 2rem; text-align: center;');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === "rock-btn") {
            game("rock");
            endGame(playerScore, computerScore);
        } else if (button.id === "paper-btn") {
            game("paper");
            endGame(playerScore, computerScore);
        } else if (button.id === "scissors-btn") {
            game("scissors");
            endGame(playerScore, computerScore);
        }
    });
});
