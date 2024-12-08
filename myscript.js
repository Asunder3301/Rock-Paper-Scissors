function getComputerChoice() {
    let number = Math.floor(Math.random() * 3); 

    switch(number) {
        case 0 : number = "Rock";                    
                    break;
        case 1 : number = "Paper";
                    break;
        case 2 : number = "Scissors";
                    break;
        default : break;
    }

    return number;
}

let humanScore = 0;
let computerScore = 0;
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".computerScore");

function updateScore () {
    playerScore.textContent = `Your Score: ${humanScore}`;
    compScore.textContent = `Computer Score: ${computerScore}`;
}

updateScore();

function playGame() {

    function playRound(humanChoice, computerChoice) {

        const container = document.querySelector(".container");
        const results = document.querySelector(".results");

        humanChoice = humanChoice.toUpperCase();
        computerChoice = computerChoice.toUpperCase();
    
        if (humanChoice == computerChoice ) {
            results.textContent = "Draw!";
            container.append(results);
        } else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
            results.textContent = "Computer Wins!";
            container.append(results);
            computerScore += 1;
            humanScore += 0;
        } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
            results.textContent = "You Win!";
            container.append(results);
            computerScore += 0;
            humanScore += 1;
        } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
            results.textContent = "You Win!";
            container.append(results);
            computerScore += 0;
            humanScore += 1;
        } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
            results.textContent = "Computer Wins!";
            container.append(results);
            computerScore += 1;
            humanScore += 0;
        } else if (humanChoice == "SCISSORS" && "ROCK") {
            results.textContent = "Computer Wins!";
            container.append(results);
            computerScore += 1;
            humanScore +=  0;
        } else if (humanChoice == "SCISSORS" && "PAPER") {
            results.textContent = "You Win!";
            container.append(results);
            computerScore += 0;
            humanScore += 1;
        }

    updateScore();  

    gameWinner = document.querySelector(".gameWinner");
    if (humanScore == 5) {
        gameWinner.textContent = "Game over! You win the game!";
        container.appendChild(declareWinner);
        rockButton.removeEventListener("click", handleRockClick);
        paperButton.removeEventListener("click", handlePaperClick);
        scissorsButton.removeEventListener("click", handleScissorsClick);
    } else if (computerScore == 5) {
        gameWinner.textContent = "Game over! You lost the game!";
        container.appendChild(declareWinner);
        rockButton.removeEventListener("click", handleRockClick);
        paperButton.removeEventListener("click", handlePaperClick);
        scissorsButton.removeEventListener("click", handleScissorsClick);
    }

  }

    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");

    function handleRockClick () {
        playRound("ROCK", getComputerChoice());
    }
    function handlePaperClick () {
        playRound("PAPER", getComputerChoice());
    }
    function handleScissorsClick () {
        playRound("SCISSORS", getComputerChoice());
    }

    rockButton.addEventListener("click", handleRockClick);
    paperButton.addEventListener("click", handlePaperClick);
    scissorsButton.addEventListener("click", handleScissorsClick);

}
   
playGame();