const zeroButton = document.getElementById("zero").value = 0
const oneButton = document.getElementById("one").value = 1
const twoButton = document.getElementById("two").value = 2
const threeButton = document.getElementById("three").value = 3
const fourButton = document.getElementById("four").value = 4
const fiveButton = document.getElementById("five").value = 5
const sixButton = document.getElementById("six").value = 6
const sevenButton = document.getElementById("seven").value = 7
const eightButton = document.getElementById("eight").value = 8
const nineButton = document.getElementById("nine").value = 9
const addButton = document.getElementById("add")
const subButton = document.getElementById("sub")
const multButton = document.getElementById("mult")
const divButton = document.getElementById("div")
const ansButton = document.getElementById("ans")
const clearButton = document.getElementById("clear")

let currentInput = "";
let operation = null;

function clearDisplay(){
    clearButton.addEventListener('click', () => {
        document.getElementById("display").value = "";
        currentInput = "";
        operation = null;
     });
}

function addToDisplay(value){
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function setOperation(op){
    operation = op;
    currentInput +=  `${op}`;
    document.getElementById("display").value = currentInput;
}

function calculate(){
    const [operand1,_,operand2] = currentInput.split(" ");
    let result;

    switch(operation){
        
    }
}
