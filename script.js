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
}

function negate(e) {
}

function backspace(e) {
}

function addDecimal() {
}

function compute(e) {
}

function appendNum(e) {
}

function changeOperation(e) {
}







