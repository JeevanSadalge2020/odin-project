let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let displayField = document.querySelector("#display");
let clearKey = document.querySelector(".key-clear");
let equalsKey = document.querySelector(".operator-equals");
let deleteKey = document.querySelector(".delete");

let operand1;
let operand2;
let operator_value = null;

let number_keys =
  document.querySelectorAll(".key-number"); /* These are numerical keys */

let operator_keys =
  document.querySelectorAll(
    ".operator"
  ); /* These are mathematical operation keys */

operator_keys.forEach((key) => {
  key.addEventListener("click", () => {
    highlight()
  });
});

function highlight(key){
  
}

number_keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    let key_text = e.target.textContent;
    if (+displayField.textContent === 0) {
      /* If display has 0 in it */
      displayText(key_text);
    } else {
      /* If display has any other number in it, then concatenate that number */
      let old_text = displayField.textContent;
      displayText(old_text + key_text);
    }
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
  operand1 = "";
  operand2 = "";
  operator_value = null;
  document
    .querySelectorAll(".operator-active")
    .forEach((key) => key.classList.remove("operator-active"));
}
