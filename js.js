let display = document.getElementById("display");

let equation = "";
let result = 0;

function clearDisplay() {
  equation = "";
  result = 0;
  display.value = "";
}

function backspace() {
  equation = equation.slice(0, -1);
  display.value = equation;
}

function appendSymbol(symbol) {
  equation += symbol;
  display.value = equation;
}

function calculate() {
  try {
    result = eval(equation);
    display.value = result;
    equation = result;
  } catch (error) {
    display.value = "Error";
  }
}
