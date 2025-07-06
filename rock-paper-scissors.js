console.log("Hello World");

function getComputerChoice() {
    let computerChoiceResult = Math.random();
    if (computerChoiceResult <= 0.33) {
        return "Rock !";
    } else if (computerChoiceResult <= 0.66) {
        return "Paper !";
    } else {
        return "Scissors !";
    }
}