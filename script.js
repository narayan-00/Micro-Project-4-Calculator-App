function input(value) {
  const display = document.getElementById("display");
  if (display.textContent === "0" && /[*/+]/.test(value)) {
    return;
  }

  if (value === "*") {
    value = "x";
  }
  if (display.textContent === "0" && /[.]/.test(value)) {
    display.textContent += value;
    return;
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
    const resultWithPrecision = parseFloat(result.toFixed(3));

    document.getElementById("display").textContent = resultWithPrecision;
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

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key.match(/[0-9.+\-*/]|Enter/)) {
    event.preventDefault();
    if (key === "Enter") {
      calculate();
    } else {
      input(key);
    }
  }
});
