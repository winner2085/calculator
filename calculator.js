document.addEventListener('DOMContentLoaded', function() {
    var textbox = document.querySelector("#result");
    var numButtons = document.querySelectorAll(".buttons");
    
    numButtons.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        textbox.value += this.value;
      });
    });
});

function solve() {
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide' ||

  if(action === 'calculate') {
    const firstValue = calculater.dataset.firstValue;
    const operator = calculater.dataset.operator;
    const secondValue = displayedNum;

    display.textContent = calculate(firstValue, operator, secondValue);
  }

  const calculate = (n1, operator, n2) => {
    let result = '';
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2);
    }
    return result;
  }
}

solve ()