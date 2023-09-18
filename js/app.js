// This array to let computer choose from
let arr = ["rock", "paper", "scissors"];
let winners = [];
// Select Elements
let playerOutput = document.querySelector(".player-select");
let computeOutput = document.querySelector(".computer-select");
let winnerOutput = document.querySelector(".winner");

/************************
----- UI - Version -----
***********************/

let btnEl = document.querySelectorAll(".selection");
btnEl.forEach(function (btn) {
  btn.addEventListener("click", getPlayerSelection);
});

/*********************/
function getPlayerSelection(e) {
  playerOutput.textContent = `You selected: ${e.target.innerHTML.toLowerCase()}`;
  let computerSelection = getComputerChoice();
  // console.log(computerSelection);
  let winner = checkWinner(e.target.innerHTML.toLowerCase(), computerSelection);
  winnerOutput.textContent = winner;
  winners.push(winner);
  logRound(e.target.innerHTML.toLowerCase(), computerSelection, winner, round);
}
/********************/

// play one round
function playRound(round) {
  const playerSelection = getPlayerSelection();
  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
  // console.log(winner);
}

// Function for computer random choice
function getComputerChoice() {
  let comSelection = arr[Math.floor(Math.random() * arr.length)];
  computeOutput.textContent = `Computer selected: ${comSelection}`;
  return comSelection;
}

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

// logs wins
function logsWins() {
  let playerWins = winners.filter((item) => item == "You Win!").length;
  let computerWins = winners.filter((item) => item == "You Lose!").length;
  let ties = winners.filter((item) => item == "Tie").length;

  console.log("Results:");
  console.log("Player wins:", playerWins);
  console.log("Computer wins:", computerWins);
  console.log("Ties:", ties);

  if (playerWins > computerWins) {
    console.log("********************");
    console.log("YOU WON THE GAME, CONGRATULATIONS!");
    console.log("********************");
  } else if (playerWins < computerWins) {
    console.log("********************");
    console.log("YOU LOSE THIS TIME, TRY AGAIN.");
    console.log("********************");
  } else {
    console.log("********************");
    console.log("NOBODY WON!");
    console.log("********************");
  }
  winners = [];
}

// log rounds
function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  round++;
  console.log("Player choose:", playerChoice);
  console.log("Computer choose:", computerChoice);
  console.log(winner);
  console.log("--------------------");
}

// Start of the game - Commented
// function game() {
//   // play 5 Rounds
//   for (let i = 1; i <= 5; i++) {
//     playRound(i);
//   }
//   playRound();
//   logsWins();
// }
