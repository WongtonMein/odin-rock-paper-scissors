console.log("Hello World")

// 0 = "rock"
// 1 = "paper"
// 2 = "scissors"

// GET COMPUTER CHOICE FUNCTION
function getComputerChoice() {

    // USE MATH.RANDOM TO DETERMINE
    let computerInt = Math.floor(Math.random() * 3)

    // TEST WITH CONSOLE.LOG
    console.log(computerInt)

    // RETURN COMPUTER CHOICE
    return computerInt
};

// GET HUMAN CHOICE FUNCTION
function getHumanChoice() {
    return null
};

    // PROMPT HUMAN FOR ROCK, PAPER, OR SCISSORS
        // NOT CASE SENSITIVE
    // TEST WITH CONSOLE.LOG
    // RETURN HUMAN CHOICE
    
function playRound(humanChoice, computerChoice) {
    return null
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// CREATE HUMANSCORE VARIABLE
let humanScore = 0;

// CREATE COMPUTERSCORE VARIABLE
let computerScore = 0;

playRound(humanSelection, computerSelection)

// PLAYROUND FUNCTION
    // GETCOMPUTERCHOICE FUNCTION
    // GETHUMANCHOICE FUNCTION
    // CONSOLE.LOG RESULTS
    // INCREMENT ____SCORE VARIABLES