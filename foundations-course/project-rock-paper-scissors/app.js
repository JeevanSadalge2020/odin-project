let humanScore = 0;
let computerScore = 0;

function gerComputerChoice() {
    let arr = ['rock', 'paper', 'scissors'];
    let ind = Math.floor(Math.random() * 3);
    return arr[ind];
}

function getHumanChoice() {
    let ul = document.querySelector('ul');
    let res = "";
    ul.addEventListener('click', (e) => {
        let target = e.target.textContent.toLowerCase();
        switch (target) {
            case target: 'rock'
                res = target
            case target: 'paper'
                res = target
            case target: 'scissors'
                res = target
        }
    })
    console.log('-', res);
    playGame(res)
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) humanScore++
    else computerScore++;
}

function playGame(humanChoice) {
    console.log('human', humanChoice);
    let computerChoice = gerComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score is : Human = ${humanScore} and Computer = ${computerScore}. ${humanScore >= computerScore ? 'You' : 'Computer'} won the game.`);
}