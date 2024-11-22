console.log(getComputerChoice());

function getComputerChoice() {
    let number = Math.floor(Math.random() * 2);

    switch(number) {
        case 0 : number = "Rock";
                break;
        case 1 : number = "Paper";
                break
        case 2 : number = "Scissor"; 
                break;
    }

    return number;
};





















