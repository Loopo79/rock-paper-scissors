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

function startGame() {
  let round_count = 5;
  let playerWinCount = 0;
  let computerWinCount = 0;

  for (let i = 0; i < round_count; i++) {
    let result = playRound();
    console.log(
      `You played ${result.playerChoice} and the computer played ${result.computerChoice}`,
    );
    if (result.result == "win") {
      console.log(`You won round ${i + 1}`);
      playerWinCount++;
    } else if (result.result == "lose") {
      console.log(`You lost round ${i + 1}`);
      computerWinCount++;
    } else if (result.result == "draw") {
      console.log(`You drew round ${i + 1}`);
    }
  }

  if (playerWinCount > computerWinCount) {
    console.log("You won the game :)");
  } else if (playerWinCount < computerWinCount) {
    console.log("You lost the game :(");
  } else {
    console.log("The game resulted in a tie...");
  }
}
