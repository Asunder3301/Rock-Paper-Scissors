// picks rock, paper or scissors randomly
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


// gets human choice
function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?");
    return choice;
}

let humanScore = 0;
let comupterScore = 0;


// plays a singl round and determines winner of the round
function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    console.log(humanChoice, computerChoice);

    if (humanChoice == computerChoice ) {
        console.log("Draw!");
    } else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        console.log("Computer Wins!");
        comupterScore += 1;
        humanScore += 0;
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        console.log("You Win!");
        comupterScore += 0;
        humanScore += 1;
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        console.log("You Win!");
        comupterScore += 0;
        humanScore += 1;
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        console.log("Computer Wins!");
        comupterScore += 1;
        humanScore += 0;
    } else if (humanChoice == "SCISSORS" && "ROCK") {
        console.log("Computer Wins!");
        comupterScore += 1;
        humanScore +=  0;
    } else if (humanChoice == "SCISSORS" && "PAPER") {
        console.log("You Win!");
        comupterScore += 0;
        humanScore += 1;
    }

}
   
function playGame() {

    console.log("Rock, Paper or Scissors?");

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Player Score:${humanScore} Computer Score:${comupterScore}`);
    }

    if (humanScore > comupterScore)  {
            console.log("You Win The Game!");
    } else if (humanScore < comupterScore) {
            console.log("computer Wins The Game!");
    }    
    
}


playGame();








