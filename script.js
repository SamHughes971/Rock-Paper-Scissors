const buttonContainer = document.querySelector('#container');

const resultContainer = document.createElement('div');
const resultText = document.createElement('p');
let humanScoreTotal = document.createElement('p');
let computerScoreTotal = document.createElement('p');


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
let humanScore = 0;
let computerScore = 0;

buttonContainer.addEventListener('click', (e) => {

    
    let target = e.target;
    let resultRound = ' ';

    switch(target.id){
        case 'rock':  resultRound = playRound("ROCK", computerSelection); break;
        case 'paper':  resultRound = playRound("PAPER", computerSelection);break;
        case 'scissors':  resultRound = playRound("SCISSORS", computerSelection);break;
    }
    resultText.textContent = resultRound.playRoundText;
    humanScoreTotal.textContent = `User score: ` + resultRound.humanScore;
    computerScoreTotal.textContent = `Computer score: ` + resultRound.computerScore;    
    
    resultRound = '';
    resultContainer.appendChild(resultText);
    resultContainer.appendChild(humanScoreTotal);
    resultContainer.appendChild(computerScoreTotal);
    buttonContainer.appendChild(resultContainer);
    

    console.log(humanScore)
    console.log(typeof(humanScore))
    

});
    
function playRound(humanSelection, computerSelection){
    let playRoundText = '';

    if(humanSelection === computerSelection){
        playRoundText = `The user chose ${humanSelection}.\nComputer chose ${computerSelection}. \nIts a tie!`;
        
    } else if(humanSelection == "ROCK" && computerSelection == "SCISSORS"
            || humanSelection == "PAPER" && computerSelection == "ROCK"
            || humanSelection == "SCISSORS" && computerSelection == "PAPER")
            {   
                humanScore++ , playRoundText = `The user chose ${humanSelection}. \nComputer chose ${computerSelection}. \nYOU WON!`}
            else{
                computerScore ++, playRoundText = `The user chose ${humanSelection}. \nComputer chose ${computerSelection}. \nYou lose!`};

    return {playRoundText, humanScore, computerScore};

}
