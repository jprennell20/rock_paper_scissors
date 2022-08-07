// Initialize Variables
const choices = ["Rock","Paper","Scissors"]
let userScore = 0;
let computerScore = 0;

// Function to get the computers selection
function getComputerChoice(){
    // Randomize selection based on collection size
    return choices[Math.floor(Math.random() * choices.length)];

}

// Add Event Listener to Rock to Initiate a Round
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playRound("Rock",getComputerChoice());
});

// Add Event Listener to Paper to Initiate a Round
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playRound("Paper",getComputerChoice());
});

// Add Event Listener to Scissors to Initiate a Round

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playRound("Scissors",getComputerChoice());
});

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
            console.log(tieMessage);
            break;

        // User beats computer
        case(isWinner(playerSelectionUPPER, computerSelectionUPPER) == true):
            // Increment user score and update score display 
            ++userScore;
            let userScoreDisplay = document.getElementById('user-score');
            userScoreDisplay.textContent = `User: ${userScore}`;
            console.log(winnerMessage);
            break;
        
        // Computer beats user
        case(isLoser(computerSelectionUPPER, playerSelectionUPPER) == true):
            // Increment user score and update score display
            ++computerScore;
            let compScoreDisplay = document.getElementById('comp-score');
            compScoreDisplay.textContent = `Computer: ${computerScore}`;
            console.log(loserMessage);
            break;

        // User supplies invalid selection
        default:
            alert("Please provide a valid selection.");
    }

    if(userScore >= 5){
        alert("You've Defeated the Computer!!")
    }else if(computerScore >= 5){
        alert("You've Been Crushed by The Computer...");
    }
  }

// function game(){
//     let userScore = 0;
//     let computerScore = 0;
//     for(let i = 0; i < 5; i++){
//         // Prompt User for Input
//         let playerSelection = prompt('Rock, Paper, or Scissors?');

//         // Call function to get computer selection
//         const computerSelection = getComputerChoice();

//         let result = playRound(playerSelection,computerSelection);

//         if (result.search("Win") != -1){
//             userScore++;
//         }else if(result.search("Lose") != -1){
//             computerScore++;
//         }
//         // Log Result
//         console.log(playerSelection);
//         console.log(computerSelection);
//         console.log(playRound(playerSelection, computerSelection));
//         console.log(`User: ${userScore} vs Computer: ${computerScore}`)
//     }
// }

// game();