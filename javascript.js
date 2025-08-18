// 0 = "rock"
// 1 = "paper"
// 2 = "scissors"

function getComputerChoice() {
    let computerInt = Math.floor(Math.random() * 3)
    return computerInt
};
    
function convertNumberToWord(choice) {
    if (choice === 0)
        return "Rock"
    else if (choice === 1)
        return "Paper"
    else if (choice === 2)
        return "Scissors"
}

function playRound(computerChoice, humanChoice) {
    let computerChoiceWord = convertNumberToWord(computerChoice)
    let humanChoiceWord = convertNumberToWord(humanChoice)
    
    if (humanChoice === computerChoice) {
        roundResults.textContent = `Tie!`
    } else if (humanChoice === computerChoice + 1 || humanChoice === computerChoice - 2) {
        roundResults.textContent = `You win! ${humanChoiceWord} beats ${computerChoiceWord}`
        humanScore++
    } else {
        roundResults.textContent = `You lose! ${computerChoiceWord} beats ${humanChoiceWord}`
        computerScore++
    }

    if (computerScore === maxScore || humanScore === maxScore) {
        endGame();

    }
};

function displayScore(computerScore, humanScore) {
    displayHumanScore.textContent = `Human Score: ${humanScore}`;
    displayComputerScore.textContent = `Computer Score: ${computerScore}`;
};

function newGame() {
    newGameButton.addEventListener("click", playGame);
    newGameButton.addEventListener("click", () => {
        
        rockButton.style.visibility = "visible";
        paperButton.style.visibility = "visible";
        scissorsButton.style.visibility = "visible";
        newGameButton.style.visibility = "hidden";
    })
}

function endGame() {
    if (computerScore === maxScore) {
        roundResults.textContent = `Computer wins!`
    } else {
        roundResults.textContent = `Player wins!`
    }
    gameButton.addEventListener("click", () => {
        rockButton.style.visibility = "hidden";
        paperButton.style.visibility = "hidden";
        scissorsButton.style.visibility = "hidden";
        // newGameButton.style.visibility = "visible";
    })
};

function playGame() {
    computerScore = 0
    humanScore = 0
    let computerSelection = getComputerChoice()

    // while (computerScore < maxScore && humanScore < maxScore) {
    gameButton.addEventListener("click", () => {
        return computerSelection = getComputerChoice()
    });

    rockButton.addEventListener("click", () => {
        playRound(computerSelection, 0)});
    paperButton.addEventListener("click", () => {
        playRound(computerSelection, 1)});
    scissorsButton.addEventListener("click", () => {
        playRound(computerSelection, 2)});

    gameButton.addEventListener("click", () => {
        displayScore(computerScore, humanScore);
    });

};



const newGameButton = document.getElementById("new-game");
const gameButton = document.querySelector(".game-buttons");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

const roundResults = document.querySelector(".round-results");
const displayHumanScore = document.getElementById("human-score");
const displayComputerScore = document.getElementById("computer-score");

rockButton.style.visibility = "hidden";
paperButton.style.visibility = "hidden";
scissorsButton.style.visibility = "hidden";

newGame()