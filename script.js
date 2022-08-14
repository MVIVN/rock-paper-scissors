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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        showOutcome(gameOutcomes[0]);
        chosenWeapon.classList.add('draw');
        enemyWeapon.classList.add('draw');
        chosenWeapon.innerHTML = '<img src="img/user-draw.png">';
        enemyWeapon.innerHTML = '<img src="img/pc-draw.png">';
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        showOutcome(gameOutcomes[1]);
        chosenWeapon.classList.add('chosen');
        chosenWeapon.innerHTML = '<img src="img/user-rock-win.png">';
        enemyWeapon.innerHTML = '<img src="img/pc-scissors-lose.png">';
        return "win";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        showOutcome(gameOutcomes[2]);
        enemyWeapon.classList.add('chosen');
        chosenWeapon.innerHTML = '<img src="img/user-rock-lose.png">';
        enemyWeapon.innerHTML = '<img src="img/pc-paper-win.png">';
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        showOutcome(gameOutcomes[3]);
        enemyWeapon.classList.add('chosen');
        chosenWeapon.innerHTML = '<img src="img/user-paper-lose.png">';
        enemyWeapon.innerHTML = '<img src="img/pc-scissors-win.png">';
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        showOutcome(gameOutcomes[4]);
        chosenWeapon.classList.add('chosen');
        chosenWeapon.innerHTML = '<img src="img/user-paper-win.png">';
        enemyWeapon.innerHTML = '<img src="img/pc-rock-lose.png">';
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        showOutcome(gameOutcomes[5]);
        enemyWeapon.classList.add('chosen');
        chosenWeapon.innerHTML = '<img src="img/user-scissors-lose.png">';
        enemyWeapon.innerHTML = '<img src="img/pc-rock-win.png">';
        return "lose";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        showOutcome(gameOutcomes[6]);
        chosenWeapon.classList.add('chosen');
        chosenWeapon.innerHTML = '<img src="img/user-scissors-win.png">';
        enemyWeapon.innerHTML = '<img src="img/pc-paper-lose.png">';
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

    userScore.innerHTML = `<h2>YOU: </h2><div id='score-tick'>${playerScore}<div>`;
    pcScore.innerHTML = `<h2>COMPUTER: </h2><div id='score-tick'>${computerScore}<div>`;
}

function endGame(userTotal, computerTotal) {
    if ((userTotal === 5) || (computerTotal === 5)) {
        weapons.remove();
        enemyWeapons.remove();
        if (userTotal > computerTotal) {
            container.insertBefore(finalResultWin, scores);
            finalResultWin.innerHTML =
                `<h2>You win! Congratulations!</h2>
                <h2>FINAL SCORES</h2>
                <h3>You: ${userTotal} ..... Computer: ${computerTotal}</h3>
                Would you like to play again?`;
            finalResultWin.appendChild(endGameBtns);
        } else {
            container.insertBefore(finalResultLose, scores);
            finalResultLose.innerHTML = 
                `<h2>You lose! Better luck next time!</h2>
                <h2>FINAL SCORES</h2>
                <h3>You: ${userTotal} ..... Computer: ${computerTotal}</h3>
                Would you like to play again?`;
            finalResultLose.appendChild(endGameBtns);
        }
    } else { return;}
}

function restartGame() {
    finalResultWin.remove(); finalResultLose.remove();
    playerBox.insertBefore(weapons, chosenWeapon);
    enemyBox.appendChild(enemyWeapons);
    chosenWeapon.innerHTML = '<img src="img/choose-weapon.gif">';
    enemyWeapon.innerHTML = '<img src="img/waiting.gif">';
    playerScore = 0;
    computerScore = 0;
    userScore.innerHTML = `<h2>YOU: </h2><div id='score-tick'>${playerScore}<div>`;
    pcScore.innerHTML = `<h2>COMPUTER: </h2><div id='score-tick'>${computerScore}<div>`;
    outcome = "Good Luck!";
    showOutcome(outcome);
}

function terminateGame() {
    showOutcome("Game Over!");
    chosenWeapon.innerHTML = '<img src="img/user-draw.png">';
    enemyWeapon.innerHTML = '<img src="img/pc-draw.png">';
    chosenWeapon.classList.add('chosen');
    enemyWeapon.classList.add('chosen');

    finalResultWin.innerHTML =
    `<h2>Thank you for playing!!</h2>
    <h2>Hope you enjoyed the game!</h2>
    <h3>If you change your mind,</h3>
    <h3>refresh the page to play again!</h3>`;
    
    finalResultLose.innerHTML =
    `<h2>Thank you for playing!!</h2>
    <h2>Hope you enjoyed the game!</h2>
    <h3>If you change your mind,</h3>
    <h3>refresh the page to play again!</h3>`;
}



// DOM manipulation
const container = document.querySelector('#container');
const headline = document.querySelector('#headline');
const choices = document.querySelector('#choices');
const scores = document.querySelector('#scores');

const userScore = document.querySelector('#player-score');
const pcScore = document.querySelector('#computer-score');
// const scoreDiv = document.createElement('div');
// scoreDiv.setAttribute('id', 'score-tick');
userScore.innerHTML = `<h2>YOU: </h2><span id='score-tick'>${playerScore}<span>`;
pcScore.innerHTML = `<h2>COMPUTER: </h2><span id='score-tick'>${computerScore}<span>`;

const resultBox = document.createElement('div');
resultBox.setAttribute('id', 'results');
resultBox.textContent = outcome;
container.insertBefore(resultBox, scores);

const playerBox = document.querySelector('#the-player');
const enemyBox = document.querySelector('#the-challenger');
const weapons = document.querySelector('#weapons');
const enemyWeapons = document.querySelector('#enemy-weapons');
const chosenWeapon = document.querySelector('#chosen-weapon');
const enemyWeapon = document.querySelector('#enemy-chosen-weapon');

chosenWeapon.addEventListener('transitionend', removeTransition);
function removeTransition() {
    this.classList.remove('chosen');
    this.classList.remove('draw');
}

enemyWeapon.addEventListener('transitionend', removeTransition);
function removeTransition() {
    this.classList.remove('chosen');
    this.classList.remove('draw');
}

chosenWeapon.innerHTML = '<img src="img/choose-weapon.gif">';
enemyWeapon.innerHTML = '<img src="img/waiting.gif">';

const finalResultWin = document.createElement('div');
finalResultWin.setAttribute('id', 'finalWin');
const finalResultLose = document.createElement('div');
finalResultLose.setAttribute('id', 'finalLose');

const restartBtn = document.createElement('button');
restartBtn.setAttribute('id', 'restart-button');
restartBtn.setAttribute('onclick', 'restartGame()');
restartBtn.textContent = "YES";
const endBtn = document.createElement('button');
endBtn.setAttribute('id', 'end-button');
endBtn.setAttribute('onclick', 'terminateGame()');
endBtn.textContent = "NO";
const endGameBtns = document.createElement('div');
endGameBtns.setAttribute('id', 'final-btns-div');
endGameBtns.appendChild(restartBtn);
endGameBtns.appendChild(endBtn);

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

// preload images
const images = document.createElement('div');
images.innerHTML = `
<img src="img/user-draw.png"></img>;
<img src="img/pc-draw.png">;
<img src="img/user-rock-win.png">;
<img src="img/pc-scissors-lose.png">;
<img src="img/user-rock-lose.png">;
<img src="img/pc-paper-win.png">;
<img src="img/user-paper-lose.png">;
<img src="img/pc-scissors-win.png">;
<img src="img/user-paper-win.png">;
<img src="img/pc-rock-lose.png">;
<img src="img/user-scissors-lose.png">;
<img src="img/pc-rock-win.png">;
<img src="img/user-scissors-win.png">;
<img src="img/pc-paper-lose.png">;
<img src="img/choose-weapon.gif">;
<img src="img/waiting.gif">;
`
