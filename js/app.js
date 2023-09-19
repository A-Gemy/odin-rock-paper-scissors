// This array to let computer choose from
let arr = ["rock", "paper", "scissors"];
let winners = [];

// Selecting DOM elements
let btnEl = document.querySelectorAll(".selection");
let playerOutput = document.querySelector(".player-select");
let computerOutput = document.querySelector(".computer-select");
let winnerOutput = document.querySelector(".winner");
let gameWinner = document.getElementById("game-winner");
let gameDetails = document.getElementById("game-details");

let playing = true;
let restartGameBtn = document.getElementById("restart");

// Function for player choice and Computer choice
btnEl.forEach(function (btn) {
  btn.addEventListener("click", playRound);
});

// Play one Round
function playRound(e, round) {
  if (playing) {
    let playerSelection = e.target.value;
    let computerSelection = getComputerChoice();
    output(playerSelection, computerSelection, round);
  }
}

// Output Round
function output(playerChoice, computerChoice) {
  playerOutput.textContent = `You selected: ${playerChoice}`;
  computerOutput.textContent = `Computer selected: ${computerChoice}`;
  let winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  // console.log(winners);
  winnerOutput.textContent = winner;
  logsWins();
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
  if (playerWins === 5) {
    gameWinner.textContent = "YOU WON THE GAME, CONGRATULATIONS!";
    gameDetails.textContent = `You won ${playerWins}, Computer won ${computerWins}, and ${ties} ties.`;
    gameEnd();
  } else if (computerWins === 5) {
    gameWinner.textContent = "YOU LOSE THIS TIME, TRY AGAIN.";
    gameDetails.textContent = `Computer won ${computerWins}, You won ${playerWins}, and ${ties} ties.`;
    gameEnd();
  } else if (ties === 5) {
    gameWinner.textContent = "NOBODY WON!";
    gameDetails.textContent = `You reached ${ties} ties.`;
    gameEnd();
  }
}

function gameEnd() {
  restartGameBtn.style.display = "block";
  winners = [];
  playing = false;
}

restartGameBtn.addEventListener("click", restartGame);

function restartGame() {
  playing = true;
  playerOutput.textContent = "";
  computerOutput.textContent = "";
  winnerOutput.textContent = "";
  gameWinner.textContent = "";
  gameDetails.textContent = "";
  restartGameBtn.style.display = "none";
}
