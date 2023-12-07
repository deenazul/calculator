const digits = document.querySelectorAll('.digit');
const ops = document.querySelectorAll('.operator');
const del = document.querySelector('#delete');
const dec = document.querySelector('#decimal');
const prevDisplay = document.querySelector('.prevDisplay');
const currDisplay = document.querySelector('.currDisplay');

let currentNum = "";
let previousNum = "";
let operator = "";

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    calc();
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    currentNum = "";
    previousNum = "";
    operator = "";
    currDisplay.textContent = "";
    prevDisplay.textContent = "";
})

digits.forEach((digit) => {
    digit.addEventListener('click', function(e){
        handleNum(e.target.textContent)
    })
})
function handleNum(number) {
    currentNum += number;
    currDisplay.textContent = currentNum;
}

ops.forEach((op) => {
    op.addEventListener('click', function(e){
        handleOp(e.target.textContent)
    })
})

function handleOp(op) {
  operator = op;
  previousNum = currentNum;
  prevDisplay.textContent = previousNum + " " + operator;
  currentNum = "";
  currDisplay.textContent = "";
}

function calc() {
    currentNum = Number(currentNum);
    previousNum = Number(previousNum);
    
    if (operator === "+"){
        previousNum = previousNum + currentNum;
        console.log("firstVal", currentNum, "secVal", previousNum);
    } else if (operator === "-"){
        previousNum = previousNum - currentNum;
    } else if (operator === "x"){
        previousNum = previousNum * currentNum;
    } else if (operator === "÷"){
        previousNum = previousNum / currentNum;
    }
    previousNum = previousNum.toString();
    displayResult();
}

function displayResult() {
    currDisplay.textContent = previousNum;
    prevDisplay.textContent = "";
    operator="";
    currentNum="";
}

