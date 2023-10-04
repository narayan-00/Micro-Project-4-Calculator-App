function input(value) {
  value = value.toString();
  const display = document.getElementById("display");
  if (display.textContent === "0" && /[*/+]/.test(value)) {
    return;
  }
  if (value === "*") {
    value = "x";
  }

  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
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
