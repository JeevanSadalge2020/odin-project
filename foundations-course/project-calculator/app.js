let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let firstNum = 0;
let secondNum = 0;

let operator_value = null;

let arr = [];

function operate(operator, n1, n2) {
  return operator(n1, n2);
}

document.querySelectorAll(".operator").forEach((operator) => {
  operator.addEventListener("click", (e) => {
    firstNum = displayField.innerText;
    clearDisplay();
    operator_value = [...e.target.classList].filter((cl) =>
      cl.includes("operator-")
    );
  });
});

let displayField = document.querySelector("#display");
let clearKey = document.querySelector(".key-clear");
let equalsKey = document.querySelector(".equals");

clearKey.addEventListener("click", clearDisplay);

function clearDisplay() {
  displayField.innerText = "0";
  firstNum = 0;
  secondNum = 0;
  operator_value = null;
}

function enter_into_display(num) {
  displayField.innerText = num;
}

document.querySelectorAll(".key-number").forEach((key) => {
  key.addEventListener("click", (e) => {
    let number = e.target.textContent;
    if (displayField.innerText === "0") {
      firstNum = "";
    }
    if (!operator_value) {
      firstNum = firstNum + number;
    }
    enter_into_display(firstNum);
  });
});
