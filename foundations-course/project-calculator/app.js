let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let firstNum = 0;
let secondNum = 0;

let displayField = document.querySelector("#display");
let clearKey = document.querySelector(".key-clear");
let equalsKey = document.querySelector(".operator-equals");
let plusMinusKey = document.querySelector(".operator-plus-minus");

let operator_value = null;

function operate(operator, n1, n2) {
  return operator(n1, n2);
}

document.querySelectorAll(".operator").forEach((operator) => {
  operator.addEventListener("click", (e) => {
    firstNum = displayField.innerText;
    operator_value = [...e.target.classList].filter((cl) =>
      cl.includes("operator-")
    );
    switch (operator_value[0]) {
      case "operator-multiply":
        operator_value = multiply;
        break;
      case "operator-plus":
        operator_value = add;
        break;
      case "operator-minus":
        operator_value = subtract;
        break;
      case "operator-divide":
        operator_value = divide;
        break;
      default:
        break;
    }
  });
});

clearKey.addEventListener("click", clearDisplay);

function clearDisplay() {
  displayField.innerText = "0";
  firstNum = "";
  secondNum = "";
  operator_value = null;
}

function enter_into_display(num) {
  displayField.innerText = num;
}

document.querySelectorAll(".key-number").forEach((key) => {
  key.addEventListener("click", (e) => {
    let number = e.target.textContent;
    if (!operator_value) {
      if (displayField.innerText === "0") {
        firstNum = number;
      } else {
        firstNum += number;
      }
      enter_into_display(firstNum);
    } else {
      if (displayField.innerText === "0") {
        secondNum = "";
      } else {
        secondNum += number;
      }
      enter_into_display(secondNum);
    }
  });
});

equalsKey.addEventListener("click", (e) => {
  enter_into_display(operate(operator_value, +firstNum, +secondNum));
});

plusMinusKey.addEventListener("click", (e) => {
  let number = e.target.textContent;
  if (displayField.innerText === "0") {
    firstNum = "-";
  } else {
    firstNum += number;
  }
  enter_into_display(firstNum);
});
