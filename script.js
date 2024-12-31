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



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissor") || (humanChoice == "scissor" && computerChoice == "rock")) {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        } else if ((humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissor" && computerChoice == "paper") || (humanChoice == "rock" && computerChoice == "scissor")){
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        } else {
            console.log("You tie! " + humanChoice + " is the same as " + computerChoice);
        }
    
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore < computerScore) {
        console.log("You lose! With a score of " + humanScore + " to " + computerScore);
    } else if (humanScore > computerScore) {
        console.log("You win! With a score of " + humanScore + " to " + computerScore);
    } else {
        console.log("You tie! With a score of " + humanScore + " to " + computerScore);
    }
}

console.log(playGame());




