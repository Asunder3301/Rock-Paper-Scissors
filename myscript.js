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



















