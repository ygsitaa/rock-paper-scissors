let humanScore = 0;
let computerScore = 0;

const humanSelection = function getHumanChoice() {
            let humanResult = prompt("Rock, Paper or Scissors ?").toLowerCase();
            if (humanResult === "rock") {
                return "rock";
            } else if (humanResult === "paper") {
                return "paper";
            } else if (humanResult === "scissors") {
                return "scissors";
            }
        }
const computerSelection = function getComputerChoice() {
            if (Math.random() <= 0.33) {
                return "rock";
            } else if (Math.random() <= 0.66) {
                return "paper";
            } else {
                return "scissors";
            }
        }

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock") && (computerChoice === "scissors")) {
            humanScore++;
            console.log("You win, Rock beats Scissors !");
        } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
            computerScore++;
            console.log("You lost, Paper beats Rock !");
        } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
            humanScore++;
            console.log("You win, Paper beats Rock !");
        } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
            computerScore++;
            console.log("You lost, Scissors beats Paper !");
        } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
            humanScore++;
            console.log("You win, Scissors beats Paper !");
        } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
            computerScore++;
            console.log("You lost, Rock beats Scissors !");
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie !");
        }
    }
    
    for (let i = 1; i <= 5; i++) {
        playRound(humanSelection(), computerSelection());
    }
}

playGame();