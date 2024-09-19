let humanScore = 0;
let computerScore = 0;

function gerComputerChoice() {
    let arr = ['rock', 'paper', 'scissors'];
    let ind = Math.floor(Math.random() * 3);
    return arr[ind];
}

function getHumanChoice() {
    return prompt('Enter your choice')
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) humanScore++
    else computerScore++;
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = gerComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`Score is : Human = ${humanScore} and Computer = ${computerScore}. ${humanScore >= computerScore ? 'You' : 'Computer'} won the game.`);
}

playGame()