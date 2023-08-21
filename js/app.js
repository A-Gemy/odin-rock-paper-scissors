// This array to let computer choose from
let arr = ["rock", "paper", "scissors"];

// Function for random choice
function getComputerChoice() {
  let choice = arr[Math.floor(Math.random() * arr.length)];
  return choice;
}

// Test the result
console.log(getComputerChoice());
