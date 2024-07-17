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
    const item = document.createElement("li");
    const list = document.querySelector("ol");

    // humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log(humanChoice);
    console.log(computerChoice);

    if(humanChoice == computerChoice) {

        const item = document.createElement("li");

        item.textContent = "You picked " + humanChoice + " The computer picked " + computerChoice + ". THIS ROUND IS A DRAW"
        list.appendChild(item)

        console.log("You both chose " + humanChoice + " it is a draw.")
        return "ch";
    }

    if(humanChoice == "scissors") {

        const item = document.createElement("li");

        if (computerChoice == "rock") {
            console.log("Rock beats Scissors, computer wins this round!")


            item.textContent = "You picked " + humanChoice + " The computer picked " + computerChoice + ". THE COMPUTER WINS THIS ROUND"
            list.appendChild(item)

            return "c";
        }

        else if(computerChoice == "paper") {
            console.log("Scissors beats Paper, you win this round!")


            item.textContent = "You picked " + humanChoice + " The computer picked " + computerChoice + ". YOU WIN THIS ROUND"
            list.appendChild(item)

            return "h";
        }
    }
    

    if(humanChoice == "rock") {

        

        if (computerChoice == "paper") {
            console.log("Paper beats rock, computer wins this round!")

            item.textContent = "You picked " + humanChoice + " The computer picked " + computerChoice + ". THE COMPUTER WINS THIS ROUND"
            list.appendChild(item)

            return "c";
        }

        else if(computerChoice == "scissors")  {
            console.log("Rock beats scissors, you wins this round!")

            item.textContent = "You picked " + humanChoice + " The computer picked " + computerChoice + ". YOU WIN THIS ROUND"
            list.appendChild(item)

            return "h";
        }
    }

    if(humanChoice == "paper") {

        if (computerChoice == "scissors") {
            console.log("Scissors beats Paper, computer wins this round!")

            item.textContent = "You picked " + humanChoice + " The computer picked " + computerChoice + ". THE COMPUTER WINS THIS ROUND"
            list.appendChild(item)

            return "c";
        }

        else if(computerChoice == "rock") {
            console.log("Paper beats Rock, you wins this round!")

            item.textContent = "You picked " + humanChoice + " The computer picked " + computerChoice + ". YOU WIN THIS ROUND"
            list.appendChild(item)
            
            return "h";
        }
    }

    return "incorrect input";
} 

function playGame() {
    //Reset function with play again button.
    //This will set all variables to original value 

    let humanScore = 0;
    let computerScore = 0;

    let roundWinner;
    let roundNumber =0;
    let playerSelection;
    let computerSelection;

    
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

        const divScores = document.createElement("div")

        const round = document.createElement("h2");
        const playerScore = document.createElement("h3");
        const compScore = document.createElement("h3");

        round.textContent = "Round: 0"; 
        playerScore.textContent = "YOU: " + humanScore;
        compScore.textContent = "COMPUTER: " + computerScore;

        

        divScores.appendChild(round)
        divScores.appendChild(playerScore)
        divScores.appendChild(compScore)
        


        content.appendChild(divScores);

        const playerLog = document.createElement("h4");
        playerLog.textContent = "Round Logs:"
        const bottomDiv = document.createElement("div");
        const list = document.createElement("ol");

        bottomDiv.appendChild(playerLog)
        bottomDiv.appendChild(list)

        content.appendChild(bottomDiv)
    




    //player select input

    rockButton.addEventListener('click', () => {
        roundNumber = roundNumber + 1;
        playerSelection = "Rock"

        //winner is found from what computer has chosen
        roundWinner = playRound("rock");
        //pass the winner to the update Scores function to change scoreboard
        updateScores(roundWinner);

        roundEnder(roundNumber);

        
    })

    paperButton.addEventListener('click', () => {
        roundNumber = roundNumber + 1;
        playerSelection = "Paper"

        roundWinner = playRound("paper");
        updateScores(roundWinner); 

        roundEnder(roundNumber);
    })

    scissorsButton.addEventListener('click', () => {
        roundNumber = roundNumber + 1;
        playerSelection = "Scissors"

       roundWinner = playRound("scissors");
       updateScores(roundWinner); 

       
       roundEnder(roundNumber)
       
       
    })

    function roundEnder(roundNumber){

        if(roundNumber % 5 == 0) {
            
            const finish = document.createElement("h2")

            if (humanScore > computerScore){
                finish.textContent = "YOU WIN THIS GAME!"
            }

            else if (computerScore > humanScore) {
                finish.textContent = "YOU LOSE THIS GAME!"
            }

            else {
                finish.textContent = "THIS GAME WAS A DRAW";
            }

            divButtons.removeChild(rockButton)
            divButtons.removeChild(paperButton)
            divButtons.removeChild(scissorsButton)

            const playAgainButton = document.createElement("button")
            playAgainButton.textContent = "Play Again"

            divButtons.appendChild(playAgainButton)

            content.appendChild(finish);
            

            playAgainButton.addEventListener('click', () => {

                window.location.reload();
                // humanScore = 0;
                // computerScore = 0;

                // roundWinner = null;
                // roundNumber = 0;
                // playerSelection = null

            


        })
    }
}
    
    
    

   function updateScores(winner) {

        if (winner == "c") {
        computerScore = computerScore + 1;
        }

        else if (winner == "h") {
            humanScore = humanScore + 1;
        }

        else if (winner == "ch"){
            computerScore = computerScore + 1;
            humanScore = humanScore + 1;
        }
        divScores.removeChild(playerScore);
        divScores.removeChild(compScore);
        divScores.removeChild(round);

        round.textContent = "Round: " + roundNumber;
        playerScore.textContent = "YOU: " + humanScore;
        compScore.textContent = "COMPUTER: " + computerScore;
        
        divScores.appendChild(round)
        divScores.appendChild(playerScore)
        divScores.appendChild(compScore)
        


    }


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


