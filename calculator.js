document.querySelectorAll('.buttons').forEach(buttons => {
  buttons.addEventListener("click", function () {
    document.getElementById("result").value += button.innerText;
  });
});

btnEq.addEventListener('click', enter);


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
