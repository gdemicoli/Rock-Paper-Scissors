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

function playRound(input) {
    let humanChoice = input;
    let computerChoice = getComputerChoice();

    // humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log(humanChoice);
    console.log(computerChoice);

    if(humanChoice == computerChoice) {
        console.log("You both chose " + humanChoice + " it is a draw.")
        return "ch";
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

    return "incorrect input";
} 

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    let roundWinner;


    const content = document.querySelector("body")

    const divButtons = document.createElement("div")

    const rockButton = document.createElement("button");
    const scissorsButton = document.createElement("button");
    const paperButton = document.createElement("button");

    rockButton.textContent = "Rock";
    scissorsButton.textContent = "Scissors";
    paperButton.textContent = "Paper";

    divButtons.appendChild(rockButton)
    divButtons.appendChild(paperButton)
    divButtons.appendChild(scissorsButton)

    content.appendChild(divButtons);

    //player select input

    rockButton.addEventListener('click', () => {

        //winner is found from what computer has chosen
        roundWinner = playRound("rock");
        //pass the winner to the update Scores function to change scoreboard
    })

    paperButton.addEventListener('click', () => {
        playRound("paper");
    })

    scissorsButton.addEventListener('click', () => {
       roundWinner = playRound("scissors");
       updateScores(roundWinner); 
       
    })
    
    const divScores = document.createElement("div")

    

    divScores.appendChild("")

    content.appendChild(divScores);
    


    // console.log("Best of 5 rounds") 
    // for (let i = 0; i < 5; i++) {

        // console.log("ROUND " + (i + 1));
    //    console.log("The current score is: YOU: " + humanScore + " COMPUTER: " + computerScore)

    //     roundWinner = playRound();

        
    //     while(roundWinner == "incorrect input"){
    //         console.log("Round not counted, please enter a valid input")
    //         roundWinner = playRound();
    //     }

    //     if (roundWinner == "c") {
    //         computerScore = computerScore + 1;
    //     }

    //     else if (roundWinner == "h") {
    //         humanScore = humanScore + 1;
    //     }

    //     else if (roundWinner == "ch"){
    //         computerScore = computerScore + 1;
    //         humanScore = humanScore + 1;
    //     }
    // }

    // if (humanScore > computerScore){
    //     console.log("You win!")
    // }

    // else {
    //     console.log("Computer wins!");
    // }

}







playGame()


