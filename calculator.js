const buttons = document.querySelectorAll('.buttons');
const result = document.getElementById("result");

// displays numbers
function display() {
  buttons.addEventListener("click", function () {
    document.getElementById("result").value += button.innerText;
  });
}
 //solves problems
function solve() {
  eval(document.getElementById("result").value)
  document.getElementById("result").value = eval(document.getElementById("result").value);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("result").value += button.innerText;
  });
});

function clear() {
  result.addEventListener("click", () => {
    document.getElementById("result").value = "";
  })
}

display();
solve();
clear();