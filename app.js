// Array of Choices
const choices = ["Rock","Paper","Scissors"]

// Function to get the computers selection
function getComputerChoice(){
    // Randomly selection based on collection size
    return choices[Math.floor(Math.random() * choices.length)];

}

// Prompt User for Input
let userChoice = prompt('Rock, Paper, or Scissors?')

function playRound(playerSelection, computerSelection) {
    // Standardize Value Format
    let computerSelectionUPPER = computerSelection.toUpperCase();
    let playerSelectionUPPER = playerSelection.toUpperCase();

    // Determine the winner
    switch(true){
        // User Ties with Computer 
        case(computerSelectionUPPER === computerSelectionUPPER):
            return `It's a tie! You both selected: ${playerSelection}`;

        // User Winning Scenarios

        // User Losing Scenarios
    }
  }

  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));