function input(value) {
  const display = document.getElementById("display");
  if (display.textContent === "0" && /[x/+.]/.test(value)) {
    return;
  }
  if (value === "*") {
    value = "x";
  }
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function calculate() {
  const displayValue = document.getElementById("display").innerText;
  try {
    const result = eval(displayValue.replace(/x/g, "*"));
    document.getElementById("display").innerText = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function delet() {
  const text = (document.getElementById("display").innerText = "0");
}
function deleteFromRight() {
  const display = document.getElementById("display");
  const currentText = display.textContent;
  if (currentText.length > 0) {
    display.textContent = currentText.slice(0, -1);
  }
  if (display.textContent.length === 0) {
    display.textContent = "0";
  }
}
