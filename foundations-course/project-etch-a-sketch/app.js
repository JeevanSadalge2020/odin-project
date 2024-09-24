const container = document.querySelector('.container');

let form = document.querySelector('form');

let number = 16;

function generateGrid(number) {
    for (let i = 1; i <= number; i++) {
        let article = document.createElement('article');
        for (let j = 1; j <= number; j++) {
            const div = document.createElement('div');
            div.classList.add('div')
            article.appendChild(div)
        }
        container.appendChild(article)
    }
}

generateGrid(number)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    container.innerHTML = ""
    let user_input_number = +document.querySelector('input').value;
    if (user_input_number > 30 || user_input_number < 2) {
        alert('Please enter a valid number')
        generateGrid(number)
    } else {
        generateGrid(user_input_number)
    }
})

document.querySelector('section').addEventListener('mouseover', (e) => {
    if (e.target.classList.value === 'div') {
        let [a, b, c] = generateRGB();
        e.target.style.backgroundColor = `rgb(${a}, ${b}, ${c})`
    }
})

function generateRGB() {
    let a = generateRandomNumber(255)
    let b = generateRandomNumber(255)
    let c = generateRandomNumber(255)
    return [a, b, c]
}

function generateRandomNumber(N) {
    return Math.floor(Math.random() * N);
}