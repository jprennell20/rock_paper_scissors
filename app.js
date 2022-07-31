// Array of Choices
const choices = ["Rock","Paper","Scissors"]

//Function to get the computers selection
function getComputerChoice(){
    // Randomly select 
    return choices[Math.floor(Math.random()* choices.length)];

}

let userChoice = prompt('Rock, Paper, or Scissors?')

function playRound(playerSelection, computerSelection) {
    let computerSelectionUPPER = computerSelection.toUpperCase();
    let playerSelectionUPPER = playerSelection.toUpperCase();
    switch(true){
        case(computerSelectionUPPER === computerSelectionUPPER):
            return `It's a tie! You both selected: ${playerSelection}`;
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));