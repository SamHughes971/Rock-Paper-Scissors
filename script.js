// INITIAL STEPS FOR ROCK, PAPER SCISSORS GAME (OVERVIEW)

// 1) THE CONSOLE ASKS THE USER ROCK, PAPER, SCISSORS

// 2) STORE USER CHOICE INSIDE OF VARIABLE CALLED userChoice 

// 3) COMPUTER RANDOMLY CHOOSES ROCK, PAPER, SCISSORS

// 4) STORE COMPUTER CHOICE INSIDE OF VARIABLE 
// CALLED computerChoice

// 5) COMPARE computerChoice to userChoice

// 6) IF THE COMPUTER WINS, DISPLAY MESSAGE 'COMPUTER WON. 
// IF USER WINS, DISPLAY MESSAGE 'USER WON'


// Generate Computer's choice

function getComputerChoice(){
    let computerDesicion;
    //Generate random number between 1 and 3
    const computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    //Assign desicion based on random number generated
    if (computerRandomNumber === 1){
        computerDesicion = "Rock";
    }

    else if(computerRandomNumber === 2){
        computerDesicion = "Paper";
    }

    else{
        computerDesicion = "Scissors";
    }

    return computerDesicion;
}

console.log(getComputerChoice());

