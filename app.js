// Array of Choices
const choices = ["Rock","Paper","Scissors"]

// Function to get the computers selection
function getComputerChoice(){
    // Randomize selection based on collection size
    return choices[Math.floor(Math.random() * choices.length)];

}

function playRound(playerSelection, computerSelection) {
    // Standardize Value Format
    let computerSelectionUPPER = computerSelection.toUpperCase();
    let playerSelectionUPPER = playerSelection.toUpperCase();

    console.log(playerSelectionUPPER);
    console.log(computerSelectionUPPER);

    // Generate Standard Response Messages
    let winnerMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
    let loserMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;

    // Determine the winner
    switch(true){
        // User Ties with Computer 
        case(playerSelectionUPPER === computerSelectionUPPER):
            return `It's a tie! You both selected: ${playerSelection}`;

        // User Winning Scenarios
        case(playerSelectionUPPER ==="ROCK" && computerSelectionUPPER === "SCISSORS"):
            return winnerMessage;

        case(playerSelectionUPPER ==="SCISSORS" && computerSelectionUPPER === "PAPER"):
            return winnerMessage;

        case(playerSelectionUPPER ==="PAPER" && computerSelectionUPPER === "ROCK"):
            return winnerMessage;


        // User Losing Scenarios
        case(computerSelectionUPPER ==="ROCK" && playerSelectionUPPER === "SCISSORS"):
            return loserMessage;

        case(computerSelectionUPPER ==="SCISSORS" && playerSelectionUPPER === "PAPER"):
            return loserMessage;

        case(computerSelectionUPPER ==="PAPER" && playerSelectionUPPER === "ROCK"):
            return loserMessage;

        default:
            return "Please provide a valid selection.";
    }
  }


// Prompt User for Input
let playerSelection = prompt('Rock, Paper, or Scissors?')

// Call function to get computer selection
const computerSelection = getComputerChoice();

// Log Result
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));