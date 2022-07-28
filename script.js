
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

console.log(getComputerChoice()); // Used console log to check that the function is working and generating expected results

// STEP TWO: Allow the user to input a selection between rock, paper, and scissors, and convert it to lowercase
const playerSelection = prompt('Type "rock", "paper", or "scissors" to make a choice!').toLowerCase();

console.log(playerSelection); // Used console log to check that user input is being stored correctly in playerSelection variable