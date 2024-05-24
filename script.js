
const userRock = document.querySelector('#rock');
const userPaper = document.querySelector('#paper');
const userScissors = document.querySelector('#scissors')

let humanScore = 0;
let computerScore = 0;

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

let computerSelection = getComputerChoice();
userRock.addEventListener('click', () => {
    playRound("ROCK", computerSelection)
});
userPaper.addEventListener('click', () => {
    playRound("PAPER", computerSelection)
});
userScissors.addEventListener('click', () => {
    playRound("SCISSORS", computerSelection)
});

    
function playRound(humanSelection, computerSelection){
    
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
    return humanScore, computerScore;

}











// //Play rock paper scissors 'numOfRounds' times
// function playGame(numOfRounds){
//     for(let i = 0; i < numOfRounds; i++){
//         //Retrieve players decision from function 
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         playRound(humanSelection, computerSelection);
//         console.log(`User score: ${humanScore}\nComputer score: ${computerScore}`);
//     }
// }

// playGame(5)
