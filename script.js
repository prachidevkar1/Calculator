let result = document.getElementById('result');

// Append value to the result input
function appendValue(value) {
  result.value += value;
}

// Clear the result input
function clearResult() {
  result.value = '';
}

// Perform the calculation
function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert('Invalid operation');
  }
}
