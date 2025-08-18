// console.log("Hello World")

// 0 = "rock"
// 1 = "paper"
// 2 = "scissors"

function getComputerChoice() {
    let computerInt = Math.floor(Math.random() * 3)
    return computerInt
};

function getHumanChoice() {
    let returnValue
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    rockButton.addEventListener("click", () => {
        returnValue = 0
    }); 
    paperButton.addEventListener("click", () => {
        returnValue = 1
    });
    scissorsButton.addEventListener("click", () => {
        returnValue = 2
    });

    return returnValue;
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

    console.log(`Player Choice: ${humanChoiceWord}`)
    console.log(`Computer Choice: ${computerChoiceWord}`)

    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (humanChoice === computerChoice + 1 || humanChoice === computerChoice - 2) {
        console.log(`You win! ${humanChoiceWord} beats ${computerChoiceWord}`)
        scores.humanScore++
    } else {
        console.log(`You lose! ${computerChoiceWord} beats ${humanChoiceWord}`)
        scores.computerScore++
    }
};

function displayScore(computerScore, humanScore) {
    console.log(`Player Score: ${humanScore} | Computer Score: ${computerScore}`)
};

function scoresFunc() {
    const scores = {
        computerScore: 0,
        humanScore: 0
    }
    return scores
};

function playGame() {
    scores = scoresFunc()
    let i = 1

    // sets number of rounds
    let maxScore = 5

    // calls playRound()
    if (scores.computerScore < maxScore && scores.humanScore < maxScore) {
        // prompt for new humanSelection
        // const computerSelection = getComputerChoice()
        // const humanSelection = getHumanChoice()
        
        console.log("Round " + i)

        // play round

        const rockButton = document.getElementById("rock");
        const paperButton = document.getElementById("paper");
        const scissorsButton = document.getElementById("scissors");

        let computerSelection = getComputerChoice()
        // let humanSelection = getHumanChoice()

        const bttn = document.querySelector(".game-buttons");

        bttn.addEventListener("click", () => {
            return computerSelection = getComputerChoice()
        });
        // bttn.addEventListener("click", () => {
        //     playRound(computerSelection, humanSelection);
        // });

        rockButton.addEventListener("click", () => {
            playRound(computerSelection, 0)});
        paperButton.addEventListener("click", () => {
            playRound(computerSelection, 1)});
        scissorsButton.addEventListener("click", () => {
            playRound(computerSelection, 2)});

        // console.log() current scores
        bttn.addEventListener("click", () => {
            displayScore(scores.computerScore, scores.humanScore);
        });



        // const btn = document.querySelector("button");

        // btn.addEventListener("click", playRound(computerSelection, humanSelection));
        // playRound(computerSelection, humanSelection)

        // increments game round counter
        i++;


    }
};

let humanChoice = getHumanChoice()
console.log(humanChoice)

// calls playGame()
// playGame()