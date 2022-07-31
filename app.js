// Array of Choices
const choices = ["Rock","Paper","Scissors"]

// Function to get the computers selection
function getComputerChoice(){
    // Randomize selection based on collection size
    return choices[Math.floor(Math.random() * choices.length)];

}

// Helper class to determine if the user won
function isWinner(playerSelectionUPPER,computerSelectionUPPER){
    switch(true){
        // User Winning Scenarios
        case(playerSelectionUPPER ==="ROCK" && computerSelectionUPPER === "SCISSORS"):
            return true;

        case(playerSelectionUPPER ==="SCISSORS" && computerSelectionUPPER === "PAPER"):
            return true;

        case(playerSelectionUPPER ==="PAPER" && computerSelectionUPPER === "ROCK"):
            return true;

        default:
            return false;
    }
}

// Helper class to determine if the user lost
function isLoser(computerSelectionUPPER,playerSelectionUPPER){
    switch(true){
        // User Losing Scenarios
        case(computerSelectionUPPER ==="ROCK" && playerSelectionUPPER === "SCISSORS"):
            return true;

        case(computerSelectionUPPER ==="SCISSORS" && playerSelectionUPPER === "PAPER"):
            return true;

        case(computerSelectionUPPER ==="PAPER" && playerSelectionUPPER === "ROCK"):
            return true;
        default:
            return false;
    }
}

function playRound(playerSelection, computerSelection) {


    // Standardize Value Format
    let computerSelectionUPPER = computerSelection.toUpperCase();
    let playerSelectionUPPER = playerSelection.toUpperCase();

    // Generate Standard Response Messages
    let winnerMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
    let loserMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
    let tieMessage = `It's a tie! You both selected: ${playerSelection}`

    // Determine the winner
    switch(true){
        // User ties computer 
        case(playerSelectionUPPER === computerSelectionUPPER):
            return tieMessage;

        // User beats computer
        case(isWinner(playerSelectionUPPER, computerSelectionUPPER) == true):
            return winnerMessage;
        
        // Computer beats user
        case(isLoser(computerSelectionUPPER, playerSelectionUPPER) == true):
            return loserMessage;

        // User supplies invalid selection
        default:
            return "Please provide a valid selection.";
    }
  }

function game(){
    let userScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        // Prompt User for Input
        let playerSelection = prompt('Rock, Paper, or Scissors?');

        // Call function to get computer selection
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection,computerSelection);

        if (result.search("Win") != -1){
            userScore++;
        }else if(result.search("Lose") != -1){
            computerScore++;
        }
        // Log Result
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`User: ${userScore} vs Computer: ${computerScore}`)
    }
}

game();