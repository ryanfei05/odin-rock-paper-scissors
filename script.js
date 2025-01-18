function getComputerChoice() {
    let x = Math.floor(Math.random() * 3); 
    if (x == 0) {
        return "rock";
    } else if (x == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors? ");
    if (choice.toUpperCase() == "ROCK") {
        return "rock";
    } else if (choice.toUpperCase() == "PAPER") {
        return "paper";
    } else if (choice.toUpperCase() == "SCISSOR") {
        return "scissor";
    } else {
        console.log("invalid choice! Please try again");
        return getHumanChoice();
    }
}





let humanScore = 0;
let computerScore = 0;
const result = document.querySelector("#result")
const score = document.querySelector("#score")
const winner = document.querySelector("#winner")

const rock_btn = document.querySelector("#rock");
const paper_btn = document.querySelector("#paper");
const scissor_btn = document.querySelector("#scissor");

score.textContent = "humanScore: " + humanScore + " computerScore: " + computerScore;
winner.textContent = "";

const rockClickHandler = () => playRound("rock", getComputerChoice());
const paperClickHandler = () => playRound("paper", getComputerChoice());
const scissorClickHandler = () => playRound("scissor", getComputerChoice());

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissor") || (humanChoice == "scissor" && computerChoice == "rock")) {
        computerScore++;
        result.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
    } else if ((humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissor" && computerChoice == "paper") || (humanChoice == "rock" && computerChoice == "scissor")){
        humanScore++;
        result.textContent = "You win! " + humanChoice + " beats " + computerChoice;
    } else {
        result.textContent = "You tie! " + humanChoice + " is the same as " + computerChoice;
    }
    score.textContent = "Score: " + humanScore + " Computer: " + computerScore;

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == 5) {
            winner.textContent = "You win! With a score of " + humanScore + " to " + computerScore;
        } else {
            winner.textContent = "You lose! With a score of " + humanScore + " to " + computerScore;

        }
        rock_btn.removeEventListener("click", rockClickHandler)
        paper_btn.removeEventListener("click", paperClickHandler)
        scissor_btn.removeEventListener("click", scissorClickHandler)
        
    } 
}




rock_btn.addEventListener("click", rockClickHandler)
paper_btn.addEventListener("click", paperClickHandler)
scissor_btn.addEventListener("click", scissorClickHandler)








