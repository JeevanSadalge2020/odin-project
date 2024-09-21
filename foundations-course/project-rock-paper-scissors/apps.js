const ul = document.querySelector('#list');
const yourScore_span = document.querySelector('#yourScore')
const computerScore_span = document.querySelector('#computerScore')

let humanScore = 0;
let computerScore = 0;

computerScore_span.textContent = computerScore
yourScore_span.textContent = humanScore

ul.addEventListener('click', (e) => playGame(e))

function getComputerChoice() {
    let arr = ['rock', 'paper', 'scissors'];
    let ind = Math.floor(Math.random() * 3);
    return arr[ind];
}

function playGame(e) {
    if (humanScore >= 5 || computerScore >= 5) {
        document.querySelector('h1').textContent = `${humanScore > computerScore ? "You Won" : "You Lose"}`

        computerScore_span.textContent = computerScore
        yourScore_span.textContent = humanScore
    } else {
        let computerChoice = getComputerChoice();
        let humanChoice = e.target.textContent.toLowerCase();

        if (computerChoice === humanChoice) humanScore++
        else computerScore++

        if (humanScore < 5 && computerScore < 5) {
            computerScore_span.textContent = computerScore
            yourScore_span.textContent = humanScore
        }
    }
}