
const buttonContainer = document.querySelector('#container');
const resultContainer = document.createElement('div');
const resultText = document.createElement('p');
let humanScoreTotal = document.createElement('p');
let computerScoreTotal = document.createElement('p');


let humanScore = 0;
let computerScore = 0;

buttonContainer.addEventListener('click', (e) => {
    
    let target = e.target;
    if(humanScore < 5 && computerScore < 5){
        let computerSelection = getComputerChoice();
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
    }
    if(humanScore == 5) {playerWon(humanScore, computerScore)}
    else if(computerScore == 5) {playerLost(humanScore, computerScore)}
})

function getComputerChoice(){
    let computerDesicion;
    const computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (computerRandomNumber === 1) computerDesicion = "ROCK";
    else if(computerRandomNumber === 2) computerDesicion = "PAPER";
    else{computerDesicion = "SCISSORS";}

    return computerDesicion;
}
    
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
                computerScore++, playRoundText = `The user chose ${humanSelection}. \nComputer chose ${computerSelection}. \nYou lose!`};

    return {playRoundText, humanScore, computerScore};

}

function playerWon(humanScore, computerScore){
    let gameEndText = document.createElement('p');
    gameEndText.textContent = `You Won! Final result: User score - ${humanScore}
                                Computer score - ${computerScore}`

    resultContainer.appendChild(gameEndText);
    buttonContainer.appendChild(resultContainer);
}

function playerLost(humanScore, computerScore){
    let gameEndText = document.createElement('p');
    gameEndText.textContent = `You Lose! Final result: User score - ${humanScore}
                                Computer score - ${computerScore}`

    resultContainer.appendChild(gameEndText);
    buttonContainer.appendChild(resultContainer);
}
