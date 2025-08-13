console.log("Hello World")

// 0 = "rock"
// 1 = "paper"
// 2 = "scissors"

// getComputerChoice function
function getComputerChoice() {

    // use Math.random() to determine computerChoice
    let computerInt = Math.floor(Math.random() * 3)

    // test with console.log()
    // console.log(computerInt)

    // return computerChoice as number value
    return computerInt
};

// getHumanChoice function
function getHumanChoice() {

    // prompt human for rock, paper, or scissors
    let humanChoice = prompt("Rock, Paper, or Scissors?")

    // prompt changed toLowerCase() to remove case sensitivity
    humanChoice = humanChoice.toLowerCase()

    // test with console.log()
    // console.log(humanChoice)

    // return humanChoice as number value
    if (humanChoice == "rock")
        return 0
    else if (humanChoice == "paper")
        return 1
    else if (humanChoice == "scissors")
        return 2
};
    
// helper function to convert number value to word for playRound() console.log output
function convertNumberToWord(choice) {
    if (choice == 0)
        return "Rock"
    else if (choice == 1)
        return "Paper"
    else if (choice == 2)
        return "Scissors"
}

// playRound function - parameters getComputerChoice, getHumanChoice
function playRound(computerChoice, humanChoice) {

    let humanChoiceWord = convertNumberToWord(humanChoice)
    let computerChoiceWord = convertNumberToWord(computerChoice)

    // console.log() results
    if (humanChoice == computerChoice) {
        console.log("Tie!");
    } else if (humanChoice == computerChoice + 1 || humanChoice == computerChoice - 2) {
        console.log("You win! " + humanChoiceWord + " beats " + computerChoiceWord)
        humanScore++ // increment humanScore variable
    } else {
        console.log("You lose! " + computerChoiceWord + " beats " + humanChoiceWord)
        computerScore++ // increment computerScore variable
    }
};

// create humanScore variable
let humanScore = 0;

// create computerScore variable
let computerScore = 0;

// playGame function
function playGame() {
    let i = 0

    // sets number of rounds
    let gameRounds = 5

    // calls playRound()
    while (i < gameRounds) {

        // prompt for new humanSelection
        const computerSelection = getComputerChoice()
        const humanSelection = getHumanChoice()

        // play round
        playRound(humanSelection, computerSelection)

        // console.log() current scores
        console.log("Player score: " + humanScore)
        console.log("Computer score: " + computerScore)

        // increments game round counter
        i++;
    }
};
    
// calls playGame()
playGame()