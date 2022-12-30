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
var displayedOperand = null;
var storedOperand = null;
var hasDecimal = false;


/* event listeners */
clearBtn.addEventListener("click", clear);
negateBtn.addEventListener("click", negate);
deleteBtn.addEventListener("click", backspace);
decimalBtn.addEventListener("click", addDecimal);
equalsBtn.addEventListener("click", compute);

for(numBtn of numberBtns) {
    numBtn.addEventListener("click", appendNum);
}

for(opBtn of opBtns) {
    opBtn.addEventListener("click", changeOperation);
}



/* script functions */
function clear(e) {
    currentOp = "";
    displayedOperand = null;
    storedOperand = null;
    hasDecimal = false;
    updateScreen();

    for(opBtn of opBtns) {
        opBtn.classList.remove("activeOperator");
    }
}

function negate(e) {
    if(displayedOperand === null) {
        return;
    }
    displayedOperand *= -1;
    updateScreen();
}

function backspace(e) {
    //check for display length of more than 0;
    if(outputScreen.innerText.slice(-1) === ".") { //checking for deletion of decimal
        hasDecimal = false;
    }
    outputScreen.innerText = outputScreen.innerText.slice(0,-1);
    displayedOperand = parseFloat(outputScreen.innerText);
}

function addDecimal(e) {
    hasDecimal = true; //not sure if this variable is needed tbh
    outputScreen.innerText += ".";
}

function compute(e) {
    //TODO: need to add div by 0 check, and ensure both operands are valid
    if(storedOperand === null || displayedOperand === null) {
        storedOperand = displayedOperand;
        displayedOperand = 0;
        return;
    }
    switch (currentOp) {
        case "+":
            storedOperand = storedOperand + displayedOperand;
            break;
        
        case "-":
            storedOperand = storedOperand - displayedOperand;
            break;

        case "x":
            storedOperand = storedOperand * displayedOperand;
            break;

        case "÷":
            if(displayedOperand == 0) {
                alert("oops! dividing by 0 is not currently supported on this calculator :)");
                return;
            }
            storedOperand = storedOperand / displayedOperand;
            break;
    
        default:
            break;
    }
    outputScreen.innerText = round(storedOperand);
}

function appendNum(e) {
    
    if(displayedOperand === null) {
        displayedOperand = parseInt(e.target.innerText);
    } else {
        displayedOperand = parseFloat(outputScreen.innerText + e.target.innerText);
    }
    updateScreen();
}

function changeOperation(e) {
    if(displayedOperand !== null) { 
        //This means that a number was input, and we are not just switching operation modes
        compute(e);
        displayedOperand = null;
    }
    currentOp = e.target.innerText; //update operator mode
    
    for(opBtn of opBtns) {
        opBtn.classList.remove("activeOperator");
    }
    e.target.classList.toggle("activeOperator");

}

function updateScreen() {
    if(displayedOperand === null) {
        outputScreen.innerText = "0";
    } else {
        outputScreen.innerText = round(displayedOperand);
    }
}

function round(num) {
    s = num + "";
    if(s.length > 15) {
        s = num.toExponential(5);
    }
    return s;
}







