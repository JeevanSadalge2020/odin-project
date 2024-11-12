let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let displayField = document.querySelector("#display");
let clearKey = document.querySelector(".key-clear");
let equalsKey = document.querySelector(".operator-equals");
let deleteKey = document.querySelector(".delete");

let number_keys = document.querySelectorAll(".key-number");

number_keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    let key_text = e.target.textContent;
    if (+displayField.textContent === 0) {
      display(key_text);
    } else {
      let old_text = displayField.textContent;
      display(old_text + key_text);
    }
  });
});

function display(text) {
  displayField.textContent = text;
}

clearKey.addEventListener("click", () => {
  displayField.textContent = "0";
});

deleteKey.addEventListener("click", () => {
  let text_deleted = displayField.textContent.slice(0, -1);
  display(text_deleted);
});
