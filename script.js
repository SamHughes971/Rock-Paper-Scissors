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
        computerDesicion = "ROCK";
    }

    else if(computerRandomNumber === 2){
        computerDesicion = "PAPER";
    }

    else{
        computerDesicion = "SCISSORS";
    }

    return computerDesicion;
}

// Generate user's choice

function getHumanChoice(){
    //humanInput ask user to enter prompt (string);
    const humanInput = prompt("rock, paper, scissors?: ")
    // humanDesicion transforms humanInput to uppercase (toUpperCase()) to make
    // everything equal
    const humanDesicion = humanInput.toUpperCase();

    if (humanDesicion === "ROCK"
        |humanDesicion === "PAPER" 
        |humanDesicion === "SCISSORS"){

        return humanDesicion;
    }
    else{
        return console.log("Invalid operation. Please try again");
    }
}

// Declare score variables

let humanScore = 0;
let computerScore = 0;

//Retrieve players decision from function 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Create logic to play one game of rock, paper scissors

if(humanSelection === computerSelection){
    console.log(`The user chose ${humanSelection}.\nComputer chose ${computerSelection}. \nIts a tie!`);
    
} else if(humanSelection == "ROCK" && computerSelection == "SCISSORS"
        || humanSelection == "PAPER" && computerSelection == "ROCK"
        || humanSelection == "SCISSORS" && computerSelection == "PAPER")
        {
            console.log(`The user chose ${humanSelection}. \nComputer chose ${computerSelection}. \nYOU WON!`);
            humanScore ++;}

        else{
            console.log(`The user chose ${humanSelection}. \nComputer chose ${computerSelection}. \nYou lose!`);
            computerScore ++;}





