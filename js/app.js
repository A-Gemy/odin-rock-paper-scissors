// This array to let computer choose from
let arr = ["rock", "paper", "scissors"];

// Function for random choice
function getComputerChoice() {
  let choice = arr[Math.floor(Math.random() * arr.length)];
  return choice;
}

// Invoke getComputerChoice function and store returned value into a variable
const computerSelection = getComputerChoice();
console.log(`Computer select: ${computerSelection}`);

// Ask user for choose and store the value into a variable
const playerSelection = prompt(
  "enter your choice (rock/paper/scissors):"
).toLowerCase();
console.log(`Player select: ${playerSelection}`);

// This function compare between player and computer choice and print the winner
function playRound(playerSelection, computerSelection) {
  // Solution with ternary
  if (playerSelection == computerSelection) {
    return console.log("It's a draw.");
  } else if (playerSelection == "rock") {
    return computerSelection == "paper"
      ? console.log("You Lose. Paper beats Rock")
      : console.log("You Win! Rock beats Scissors");
  } else if (playerSelection == "paper") {
    return computerSelection == "rock"
      ? console.log("You Win! Paper beats Rock.")
      : console.log("You lose, Scissors beats Paper");
  } else if (playerSelection == "scissors") {
    return computerSelection == "rock"
      ? console.log("You lose, Rock beats Scissors.")
      : console.log("You Win! Scissors beats Paper.");
  } else {
    return console.log("Invalid Input");
  }
}

console.log(playRound(playerSelection, computerSelection));
