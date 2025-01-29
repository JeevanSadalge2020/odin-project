let displayField = document.querySelector("#display");
let clearKey = document.querySelector(".key-clear");
let equalsKey = document.querySelector(".operator-equals");
let deleteKey = document.querySelector(".delete");

let operator_active = false;

let eval_keys = document.querySelectorAll(".key-number, .operator");

let equation = "";

let number_keys =
  document.querySelectorAll(".key-number"); /* These are numerical keys */

let operator_keys =
  document.querySelectorAll(
    ".operator"
  ); /* These are mathematical operation keys */

operator_keys.forEach((key) => {
  key.addEventListener("click", () => {
    operator_active = true;
  });
});

number_keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    let key_text = key.textContent;
  });
});

eval_keys.forEach((key) => {
  key.addEventListener("click", () => {
    let operator = "";
    if (key.classList.contains("operator-multiply")) {
      operator = "*";
    } else if (key.classList.contains("operator-minus")) {
      operator = "-";
    } else if (key.classList.contains("operator-plus")) {
      operator = "+";
    } else if (key.classList.contains("operator-divide")) {
      operator = "/";
    } else {
      operator = key.textContent;
    }
    equation += operator;
    console.log("equation", equation);
  });
});

function readDisplay() {
  return displayField.textContent;
}

function displayText(text) {
  displayField.textContent = text;
}

clearKey.addEventListener("click", () => {
  reset();
});

equalsKey.addEventListener("click", () => {
  let result = eval(equation);
  if (result) displayText(result);
});

deleteKey.addEventListener("click", () => {
  let text_deleted = displayField.textContent.slice(0, -1);
  if (text_deleted) {
    displayText(text_deleted);
  } else {
    /* If there is nothing to delete, then display 0 */
    clearDisplay();
  }
});

function clearDisplay() {
  displayField.innerText = "0";
}

function reset() {
  clearDisplay();
  equation = "";
  operator_active = false;
  document
    .querySelectorAll(".operator-active")
    .forEach((key) => key.classList.remove("operator-active"));
}
