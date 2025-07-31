const buttons = document.querySelectorAll("button");

const results = document.querySelector("div.results");
const para = document.createElement("para");

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

function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock") && (computerChoice === "scissors")) {
            humanScore++;
            results.textContent = `${humanScore} / ${computerScore} - You win, Rock beats Scissors !`;
            // console.log(`${humanScore} / ${computerScore} - You win, Rock beats Scissors !`);
        } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
            computerScore++;
            results.textContent = `${humanScore} / ${computerScore} - You lost, Paper beats Rock !`;
            // console.log(`${humanScore} / ${computerScore} - You lost, Paper beats Rock !`);
        } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
            humanScore++;
            results.textContent = `${humanScore} / ${computerScore} - You win, Paper beats Rock !`;
            // console.log(`${humanScore} / ${computerScore} - You win, Paper beats Rock !`);
        } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
            computerScore++;
            results.textContent = `${humanScore} / ${computerScore} - You lost, Scissors beats Paper !`;
            // console.log(`${humanScore} / ${computerScore} - You lost, Scissors beats Paper !`);
        } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
            humanScore++;
            results.textContent = `${humanScore} / ${computerScore} - You win, Scissors beats Paper !`;
            // console.log(`${humanScore} / ${computerScore} - You win, Scissors beats Paper !`);
        } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
            computerScore++;
            results.textContent = `${humanScore} / ${computerScore} - You lost, Rock beats Scissors !`;
            // console.log(`${humanScore} / ${computerScore} - You lost, Rock beats Scissors !`);
        } else if (humanChoice === computerChoice) {
            results.textContent = `${humanScore} / ${computerScore} - It's a tie !`;
            // console.log(`${humanScore} / ${computerScore} - It's a tie !`);
        }
    }

// function playGame() {
    // function playRound(humanChoice, computerChoice) {
    //     if ((humanChoice === "rock") && (computerChoice === "scissors")) {
    //         humanScore++;
    //         console.log(`${humanScore} / ${computerScore} - You win, Rock beats Scissors !`);
    //     } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
    //         computerScore++;
    //         console.log(`${humanScore} / ${computerScore} - You lost, Paper beats Rock !`);
    //     } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
    //         humanScore++;
    //         console.log(`${humanScore} / ${computerScore} - You win, Paper beats Rock !`);
    //     } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
    //         computerScore++;
    //         console.log(`${humanScore} / ${computerScore} - You lost, Scissors beats Paper !`);
    //     } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
    //         humanScore++;
    //         console.log(`${humanScore} / ${computerScore} - You win, Scissors beats Paper !`);
    //     } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
    //         computerScore++;
    //         console.log(`${humanScore} / ${computerScore} - You lost, Rock beats Scissors !`);
    //     } else if (humanChoice === computerChoice) {
    //         console.log(`${humanScore} / ${computerScore} - It's a tie !`);
    //     }
    // }
    
    // for (let i = 1; i <= 5; i++) {
    //     playRound(humanSelection(), computerSelection());
    // }
// }

// playGame();

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const playerSelection = button.value;
        playRound(playerSelection, computerSelection());
    });
});

// const playerSelection = buttons.value;
// buttons.addEventListener("click", playRound(playerSelection, computerSelection));