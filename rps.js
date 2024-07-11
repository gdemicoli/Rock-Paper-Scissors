function getComputerChoice(){

    let choice = Math.random() * 3;

 

    if (choice >= 0 && choice < 1) {
        return "scissors";
    }

    else if (choice >= 1 && choice < 2){
        return "paper";
    }

    else {
        return "rock";
    }

}

function getHumanChoice() {
    let response = prompt("Type: paper, scissors or rock and click ok.");
    return response;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log(humanChoice);
    console.log(computerChoice);

    if(humanChoice == computerChoice) {
        console.log("You both chose " + humanChoice + "it is a draw.")
    }

    if(humanChoice == "scissors") {

        if (computerChoice == "rock") {
            console.log("Rock beats Scissors, computer wins this round!")

            return "c";
        }

        else if(computerChoice == "paper") {
            console.log("Scissors beats Paper, you win this round!")

            return "h";
        }
    }
    

    if(humanChoice == "rock") {

        if (computerChoice == "paper") {
            console.log("Paper beats rock, computer wins this round!")

            return "c";
        }

        else if(computerChoice == "scissors")  {
            console.log("Rock beats scissors, you wins this round!")

            return "h";
        }
    }

    if(humanChoice == "paper") {

        if (computerChoice == "scissors") {
            console.log("Scissors beats Paper, computer wins this round!")

            return "c";
        }

        else if(computerChoice == "rock") {
            console.log("Paper beats Rock, you wins this round!")

            return "h";
        }
    }

    return " incorrect input";
} 

playRound();


let humanScore = 0;
let computerScore = 0;

