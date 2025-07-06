console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    if (Math.random() <= 0.33) {
        return "rock";
    } else if (Math.random() <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    let humanResult = prompt("Rock, Paper or Scissors ?");
    if (humanResult === "rock") {
        return "rock";
    } else if (humanResult === "paper") {
        return "paper";
    } else if (humanResult === "scissors") {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        humanScore++;
        console.log("You win, Rock beats Scissors !");
    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
        computerChoice++;
        console.log("You lost, Paper beats Rock !");
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        humanScore++;
        console.log("You win, Paper beats Rock !");
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        computerChoice++;
        console.log("You lost, Scissors beats Paper !");
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        humanScore++;
        console.log("You win, Scissors beats Paper !");
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        computerChoice++;
        console.log("You lost, Rock beats Scissors !");
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie !");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);