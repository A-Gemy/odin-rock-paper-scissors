// This array to let computer choose from
let arr = ["rock", "paper", "scissors"];
let winners = [];

// Start of the game
function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  logsWins();
}

// play one round
function playRound(round) {
  const playerSelection = getPlayerSelection();
  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
  // console.log(winner);
}

// Function for player choice playerSelection
function getPlayerSelection() {
  // Take user input
  let input = prompt("Paper, Rock or Scissors");
  // Make sure player select an option
  while (input == null) {
    input = prompt("Paper, Rock or Scissors");
  }
  input = input.toLowerCase();
  // Validate user input
  let check = validate(input);
  while (check == false) {
    input = prompt("Please choose one of: Paper, Rock or Scissors");
    while (input == null) {
      input = prompt("Paper, Rock or Scissors");
    }
    input = input.toLowerCase();
    check = validate(input);
  }
  return input;
}

// Function for computer random choice
function getComputerChoice() {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Validation of user input
function validate(input) {
  return arr.includes(input);
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
  console.log("Player choose:", playerChoice);
  console.log("Computer choose:", computerChoice);
  console.log(winner);
  console.log("--------------------");
}
