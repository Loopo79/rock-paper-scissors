const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const result = Math.floor(Math.random() * 3 + 1);
  if (result === ROCK) return "rock";
  if (result === PAPER) return "paper";
  if (result === SCISSORS) return "scissors";
}

function getPlayerChoice() {
  let result = prompt("Enter rock, paper, or scissors:");
  result = result.toLowerCase();
  if (OPTIONS.includes(result)) return result;
  return getPlayerChoice();
}
