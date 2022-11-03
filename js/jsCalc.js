let result = 0;
let operationOptions = ["divide", "multiply", "subtract", "add"];
let chosenOperation = "";

function updateDisplay(value) {
    let display = document.getElementById("display");
    let secondaryDisplay = document.getElementById("secondary-display");

    if (display.innerHTML === "0" && operationOptions.indexOf(value) === -1) {
        if (value === "decimal") {
            display.innerHTML = "0.";
        } else if (value === "negative-value") {
            if (display.innerHTML.indexOf("-1") === -1) {
                display.innerHTML = "-" + display.innerHTML;
            } else if (display.innerHTML.indexOf("-1" > -1)) {
                display.innerHTML = display.innerHTML.slice(1, display.innerHTML.lenght);
            }
        } else {
            display.innerHTML = value;
        };
    } else if (operationOptions.indexOf(value) >= 0) {

        if (result === display.innerHTML) {
        // Operand was pressed twice
            chosenOperation === value;
        } else if (chosenOperation === "") {
        // Dealing without an initial operand
            chosenOperation = value;
            result = display.innerHTML;
            secondaryDisplay.innerHTML = result;
            display.innerHTML = 0;
        } else {
        // Dealing with a set operand
            result = calculate(result, display.innerHTML, chosenOperation);
            secondaryDisplay.innerHTML = result;
            display.innerHTML = 0;
            chosenOperation = value;
        }

    } else if (value === "equals") {
        display.innerHTML = calculate(result, display.innerHTML, chosenOperation);
        result = 0;
        chosenOperation = "";
        secondaryDisplay.innerHTML = result;

    } else if (value === "decimal") {
        if (display.innerHTML.indexOf(".") === -1) {
            display.innerHTML += ".";
        }

    } else if (value === "negative-value") {
        if (display.innerHTML.indexOf("-1") === -1) {
            display.innerHTML = "-" + display.innerHTML;
        } else if (display.innerHTML.indexOf("-1" > -1)) {
            display.innerHTML = display.innerHTML.slice(1, display.innerHTML.lenght);
        }

    } else {
    display.innerHTML += value;
    };
};

function clearDisplay() {
    let display = document.getElementById("display");
    let secondaryDisplay = document.getElementById("secondary-display");
    result = 0;
    display.innerHTML = 0;
    secondaryDisplay.innerHTML = result;
}

function calculate(firstNumber, secondNumber, operation) {
    let result;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    switch(operation) {
        case "add":
            result = firstNumber + secondNumber;
            break;
        case "subtract":
            result = firstNumber - secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;
        case "divide":
            result = firstNumber / secondNumber;
            break;
        default:
            console.log("Calculate switch missing something.");
    }
    return result.toString();
}
