document.addEventListener('DOMContentLoaded', function () {
  let textbox = document.querySelector("#result");
  let numButtons = document.querySelectorAll(".buttons");

  //when the user clicks on a button
  numButtons.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      let value = this.value;
    });
  });

  let firstValue = '';
  let secondValue = '';
  let operator = '';
  let isSecondValue = false;
    
  //clear calculator
  function clear() {
    if(value === 'C') {
      firstValue = '';
      secondValue = '';
      operator = '';
      textbox.value = '';
      isSecondValue = false;
      //equal button
    } else if (value === "=") { 
      if (firstValue && secondValue && operator) {
        textbox.value = calculate(firstValue, operator, secondValue);
        firstValue = textbox.value;
        secondValue = '';
        operator = '';
        isSecondValue = false;
      }
    }
  }
    
  function solve() {
    if (['+', '-', '*', '/'].includes(value)) {
      operator = value;
      firstValue = textbox.value;
      textbox.value = '';
      isSecondValue = true;
    } else {
      if (isSecondValue) {
        secondValue += value;
      }else {
        firstValue += value;
      } 
      textbox.value += value;
  }
    
  const calculate = (n1, operator, n2) => {
    let result = '';
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    
    if (operator === '+') {
      result = n1 + n2;
    } else if (operator === '-') {
      result = n1 - n2;
    } else if (operator === '*') {
      result = n1 * n2;
    } else if (operator === '/') {
      result = n1 / n2;
    }
    return result;
    }
  }
});




solve()
clear()