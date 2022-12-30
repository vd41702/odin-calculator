/* DOM elements */
outputScreen = document.querySelector(".output");
clearBtn = document.querySelector("#clear");
negateBtn = document.querySelector("#negate");
deleteBtn = document.querySelector("#delete");
decimalBtn = document.querySelector("#decimal");
equalsBtn = document.querySelector("#equals");

numberBtns = document.querySelectorAll(".numberButton");
opBtns = document.querySelectorAll(".operation");

/* variables necessary for script */
var currentOp = "";
var firstOperand = 0;
var secondOperand = 0;


/* event listeners */
clearBtn.addEventListener("click", clear());
negateBtn.addEventListener("click", negate());
deleteBtn.addEventListener("click", backspace());
decimalBtn.addEventListener("click", addDecimal());
equalsBtn.addEventListener("click", compute());

for(numBtn of numberBtns) {
    numBtn.addEventListener("click", appendNum());
}

for(opBtn of opBtns) {
    opBtn.addEventListener("click", changeOperation);
}



/* script functions */
function clear(e) {
    currentOp = "";
    firstOperand = 0;
    secondOperand = 0;
    outputScreen.innerText = "";

    for(opBtn of opBtns) {
        opBtn.classList.remove("activeOperation");
    }
}

function negate(e) {
    outputScreen.innerText = -1 * parseFloat(outputScreen.innerText);
}

function backspace(e) {
    outputScreen.innerText = outputScreen.innerText.slice(0,outputScreen.innerText.length-1);
}

function addDecimal() {
    if(outputScreen.innerText.contains(".")) {
        alert("oops! you already have a decimal");
        return;
    }
    outputScreen.innerText += ".";
}

function compute(e) {
}

function appendNum(e) {
}

function changeOperation(e) {
}







