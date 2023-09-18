// This array to let computer choose from
let arr = ["rock", "paper", "scissors"];
let winners = [];

// Selecting DOM elements
let btnEl = document.querySelectorAll(".selection");
let playerOutput = document.querySelector(".player-select");
let computerOutput = document.querySelector(".computer-select");
let winnerOutput = document.querySelector(".winner");

// Function for player choice and Computer choice
btnEl.forEach(function (btn) {
  btn.addEventListener("click", playRound);
});

// Play one Round
function playRound(e) {
  let playerSelection = e.target.value;
  let computerSelection = getComputerChoice();
  output(playerSelection, computerSelection);
}

// Output Round
function output(playerChoice, computerChoice) {
  playerOutput.textContent = `You selected: ${playerChoice}`;
  computerOutput.textContent = `Computer selected: ${computerChoice}`;
  let winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  // console.log(winners);
  winnerOutput.textContent = winner;
}

// Function for computer random choice
function getComputerChoice() {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Compare two choices and select winner
function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

function logsWins() {
  let playerWins = winners.filter((item) => item == "You Win!").length;
  let computerWins = winners.filter((item) => item == "You Lose!").length;
  let ties = winners.filter((item) => item == "Tie").length;
  if (playerWins > computerWins) {
    console.log("YOU WON THE GAME, CONGRATULATIONS!");
  } else if (playerWins < computerWins) {
    console.log("YOU LOSE THIS TIME, TRY AGAIN.");
  } else {
    console.log("NOBODY WON!");
  }
}
