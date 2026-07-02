const roundCountInput = document.querySelector("#round-count-input");
const playerInputSection = document.querySelector("#player-input-section");
const resultDisplay = document.querySelector("#result-display");
const resetButton = document.querySelector("#reset-button");
const roundCountForm = document.querySelector("#round-count-form");

class GameState {
    constructor() {
        this.isRunning = false;
        this.roundCount = 5;
        this.currentRoundCount = 1;
        this.playerWinCount = 0;
        this.computerWinCount = 0;
    }

    reset() {
        this.isRunning = false;
        this.roundCount = 5;
        this.currentRoundCount = 1;
        this.playerWinCount = 0;
        this.computerWinCount = 0;
    }
}

const State = new GameState();

function setupGame() {
    if (State.isRunning) return true;

    let roundCount = Number(roundCountInput.value);

    if (roundCount < 1 || 100 < roundCount) {
        alert("Number of round should be between 1 and 100");
        return false;
    }
    roundCountInput.disabled = true;
    State.roundCount = roundCount;

    State.isRunning = true;
    return true;
}

function resetGame() {
    State.reset();
    resultDisplay.textContent = "";
    roundCountInput.disabled = false;
}

function display(text) {
    resultDisplay.textContent += text + "\n";
}

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3 + 1);
    if (result === 1) return "rock";
    if (result === 2) return "paper";
    if (result === 3) return "scissors";
}

function evalRound(playerChoice, computerChoice) {
    if (
        (computerChoice == "rock" && playerChoice == "paper") ||
        (computerChoice == "paper" && playerChoice == "scissors") ||
        (computerChoice == "scissors" && playerChoice == "rock")
    ) {
        return "win";
    } else if (computerChoice == playerChoice) {
        return "draw";
    } else {
        return "lose";
    }
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let result = evalRound(playerChoice, computerChoice);
    display(`Player   : ${playerChoice}`);
    display(`Computer : ${computerChoice}`);

    let output = `Round ${State.currentRoundCount}: `;
    if (result == "win") {
        output += "won!";
        State.playerWinCount++;
    } else if (result == "lose") {
        output += "lost";
        State.computerWinCount++;
    } else if (result == "draw") {
        output += "drawn";
    }
    display(output);
    State.currentRoundCount++;
}

function evalGameEnd() {
    if (State.playerWinCount > State.computerWinCount) {
        display("You won the game :)");
    } else if (State.playerWinCount < State.computerWinCount) {
        display("You lost the game :(");
    } else {
        display("The game resulted in a tie...");
    }
    display(`${State.playerWinCount}:${State.computerWinCount}`);
}

playerInputSection.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
        if (!setupGame()) return;
        let playerChoice = e.target.value;

        if (State.currentRoundCount < State.roundCount) {
            playRound(playerChoice);
        } else if (State.currentRoundCount == State.roundCount) {
            playRound(playerChoice);
            evalGameEnd();
        } else {
            resetGame();
        }
    }
});

resetButton.addEventListener("click", resetGame);

roundCountForm.addEventListener("submit", (e) => e.preventDefault());
