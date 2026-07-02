const roundCountInput = document.querySelector("#round-count-input");
const roundCountForm = document.querySelector("#round-count-form");

const

const resultDisplay = document.querySelector("#result-display");



function display(text) {
  resultDisplay.textContent += text + "\n";
}

function getComputerChoice() {
  let result = Math.floor(Math.random() * 3 + 1);
  if (result === 1) return "rock";
  if (result === 2) return "paper";
  if (result === 3) return "scissors";
}

function getPlayerChoice() {
  let result = prompt("Enter rock, paper, or scissors:");
  if (result !== null) {
    result = result.toLowerCase();
    if (["rock", "paper", "scissors"].includes(result)) return result;
  }
  return getPlayerChoice();
}

function playRound() {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  let output = {
    result: "",
    playerChoice: playerChoice,
    computerChoice: computerChoice,
  };

  if (
    (computerChoice == "rock" && playerChoice == "paper") ||
    (computerChoice == "paper" && playerChoice == "scissors") ||
    (computerChoice == "scissors" && playerChoice == "rock")
  ) {
    output.result = "win";
  } else if (computerChoice == playerChoice) {
    output.result = "draw";
  } else {
    output.result = "lose";
  }
  return output;
}

function getRoundCount() {
  let roundCount = Number(roundCountInput.value);
  if (roundCount < 1 || 100 < roundCount) {
    alert("Number of round should be between 1 and 100");
    return -1;
  }
  return roundCount;
}

function startGame(round_count) {
  let playerWinCount = 0;
  let computerWinCount = 0;

  roundCountInput.disabled = true;

  for (let i = 0; i < round_count; i++) {
    let result = playRound();
    display(
      `You played ${result.playerChoice} and the computer played ${result.computerChoice}`,
    );
    if (result.result == "win") {
      display(`You won round ${i + 1}`);
      playerWinCount++;
    } else if (result.result == "lose") {
      display(`You lost round ${i + 1}`);
      computerWinCount++;
    } else if (result.result == "draw") {
      display(`You drew round ${i + 1}`);
    }
  }

  if (playerWinCount > computerWinCount) {
    display("You won the game :)");
  } else if (playerWinCount < computerWinCount) {
    display("You lost the game :(");
  } else {
    display("The game resulted in a tie...");
  }
  display(`${playerWinCount}:${computerWinCount}`);
  roundCountInput.disabled = false;
}

roundCountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let roundCount = getRoundCount();
  if (roundCount !== -1) {
    startGame(roundCount);
  }
});
