function getComputerChoice() {
  const result = Math.floor(Math.random() * 3 + 1);
  if (result === 0) return "rock";
  if (result === 1) return "paper";
  if (result === 2) return "scissors";
}

function getPlayerChoice() {
  let result = prompt("Enter rock, paper, or scissors:");
  result = result.toLowerCase();
  const OPTIONS = ["rock", "paper", "scissors"];
  if (OPTIONS.includes(result)) return result;
  return getPlayerChoice();
}

function playRound() {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  let output = { result: "", playerChoice: "", computerChoice: "" };

  if (
    (computerChoice == "rock" && playerChoice == "paper") ||
    (computerChoice == "paper" && playerChoice == "scissors") ||
    (computerChoice == "scissors" && playerChoice == "rock")
  ) {
    return "win";
  }
  if (computerChoice == playerChoice) return "draw";
  return "lose";
}
