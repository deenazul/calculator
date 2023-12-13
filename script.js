let currentNum = "";
let previousNum = "";
let operator = "";

const digits = document.querySelectorAll('.digit');
const ops = document.querySelectorAll('.operator');
const prevDisplay = document.querySelector('.prevDisplay');
const currDisplay = document.querySelector('.currDisplay');

const del = document.querySelector('#delete');
del.addEventListener('click', () => {
    delStr();
});

const dec = document.querySelector('#decimal');
dec.addEventListener('click', () => {
    addDecimal();
});
const equal = document.querySelector('#equal');
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
    } else if (operator === "-"){
        previousNum = previousNum - currentNum;
    } else if (operator === "%"){
        previousNum = previousNum % currentNum;
    } else if (operator === "x"){
        previousNum = previousNum * currentNum;
    } else if (operator === "÷"){
        if (currentNum <= 0){
            previousNum = "Error";
            displayResult();
            return
        }
        previousNum = previousNum / currentNum;
    }
    previousNum = roundNum(previousNum);
    previousNum = previousNum.toString();
    displayResult();
}

function roundNum(num) {
    return Math.round(num * 100) / 100;
}

function displayResult() {
    currDisplay.textContent = previousNum;
    prevDisplay.textContent = "";
    operator = "";
    currentNum = "";
}

function addDecimal() {
    if (!currentNum.includes('.')) {
        currentNum = currentNum + '.';
        currDisplay.textContent = currentNum;
    }
}

function delStr() {
    currentNum = currentNum.slice(0, -1);
    currDisplay.textContent = currentNum;
}