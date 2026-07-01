const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function getComputerChoice() {
  const result = Math.floor(Math.random() * 3 + 1);
  if (result == ROCK) return "rock";
  if (result == PAPER) return "paper";
  if (result == SCISSORS) return "scissors";
}
