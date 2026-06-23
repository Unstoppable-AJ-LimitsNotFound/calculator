//Basic Functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


let num1;
let operator;
let num2;

const operations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

function operate(num1, operator, num2) {
  const action = operations[operator];

  if (!action) {
    console.error(`Invalid operator: ${operator}`);
    return null;
  }

  return action(num1, num2);
}


// const buttonContainer = document.querySelector("#button-container");

// for (let i = 0; i < 18; i++) {
//   const calcBtn = document.createElement("button");
//   calcBtn.classList.add("calcBtn");

//   if (i === 0) {
//     calcBtn.id = "clearBtn";
//   }

//   buttonContainer.appendChild(calcBtn);
// }