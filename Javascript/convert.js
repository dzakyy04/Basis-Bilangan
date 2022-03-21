// Convert Decimal
function decToBin(num) {
    return num.toString(2);
}

function decToOc(num) {
    return num.toString(8);
}

function decToHex(num) {
    return num.toString(16);
}

// Convert Binary
function binToDec(num) {
    return parseInt(num, 2);
}

function binToOc(num) {
    return decToOc(binToDec(num));
}

function binToHex(num) {
    return decToHex(binToDec(num));
}

// Convert Octal
function ocToDec(num) {
    return parseInt(num, 8);
}

function ocToBin(num) {
    return decToBin(ocToDec(num));
}

function ocToHex(num) {
    return decToHex(ocToDec(num));
}

// Convert Hexadecimal
function hexToDec(num) {
    return parseInt(num, 16);
}

function hexToBin(num) {
    return decToBin(hexToDec(num));
}

function hexToOc(num) {
    return decToOc(hexToDec(num));
}

// Convert basis bilangan
const inp = document.querySelectorAll("input");
for (let i = 0; i < inp.length; i++) {
    inp[0].addEventListener("input", function () {
        if (inp[0].className == "decimal") {
            inp[1].value = decToBin(parseFloat(inp[0].value));
            inp[2].value = decToOc(parseFloat(inp[0].value));
            inp[3].value = decToHex(parseFloat(inp[0].value));
        } else if (inp[0].className == "binary") {
            inp[1].value = binToDec(inp[0].value);
            inp[2].value = binToOc(inp[0].value);
            inp[3].value = binToHex(inp[0].value);
        } else if (inp[0].className == "octal") {
            inp[1].value = ocToDec(inp[0].value);
            inp[2].value = ocToBin(inp[0].value);
            inp[3].value = ocToHex(inp[0].value);
        } else if (inp[0].className == "hexadecimal") {
            inp[1].value = hexToDec(inp[0].value);
            inp[2].value = hexToBin(inp[0].value);
            inp[3].value = hexToOc(inp[0].value);
        }
    })
}

// Calculator Decimal
function plusDec(num1, num2) {
    return parseFloat(parseFloat(num1) + parseFloat(num2));
}

function minusDec(num1, num2) {
    return parseFloat(parseFloat(num1) - parseFloat(num2));
}

function timesDec(num1, num2) {
    return parseFloat(parseFloat(num1) * parseFloat(num2));
}

function divideDec(num1, num2) {
    return parseFloat(parseFloat(num1) / parseFloat(num2));
}

// Calculator Binary
function plusBin(num1, num2) {
    return decToBin(binToDec(num1) + binToDec(num2));
}

function minusBin(num1, num2) {
    return decToBin(binToDec(num1) - binToDec(num2));
}

function timesBin(num1, num2) {
    return decToBin(binToDec(num1) * binToDec(num2));
}

function divideBin(num1, num2) {
    return parseInt(decToBin(binToDec(num1) / binToDec(num2)));
}

function remainderBin(num1, num2, num3) {
    return decToBin(binToDec(num1) - binToDec(num2) * binToDec(num3));
}


// Calculator
const option = document.querySelectorAll("option");
const remainder = document.querySelector("label.remainder")
if (inp[0].className == "calcDec") {
    inp[0].addEventListener("input", function () {
        inp[1].addEventListener("input", function () {
            if (option[0].selected) {
                inp[2].value = plusDec(inp[0].value, inp[1].value);
            } else if (option[1].selected) {
                inp[2].value = minusDec(inp[0].value, inp[1].value);
            } else if (option[2].selected) {
                inp[2].value = timesDec(inp[0].value, inp[1].value);
            } else if (option[3].selected) {
                inp[2].value = divideDec(inp[0].value, inp[1].value);
            }
        })
    })
    inp[1].addEventListener("input", function () {
        inp[0].addEventListener("input", function () {
            if (option[0].selected) {
                inp[2].value = plusDec(inp[0].value, inp[1].value);
            } else if (option[1].selected) {
                inp[2].value = minusDec(inp[0].value, inp[1].value);
            } else if (option[2].selected) {
                inp[2].value = timesDec(inp[0].value, inp[1].value);
            } else if (option[3].selected) {
                inp[2].value = divideDec(inp[0].value, inp[1].value);
            }
        })
    })
} else if (inp[0].className == "calcBin") {
    inp[0].addEventListener("input", function () {
        inp[1].addEventListener("input", function () {
            if (option[0].selected) {
                inp[2].value = plusBin(inp[0].value, inp[1].value);
                remainder.style.display = "none";
            } else if (option[1].selected) {
                inp[2].value = minusBin(inp[0].value, inp[1].value);
                remainder.style.display = "none";
            } else if (option[2].selected) {
                inp[2].value = timesBin(inp[0].value, inp[1].value);
                remainder.style.display = "none";
            } else if (option[3].selected) {
                inp[2].value = divideBin(inp[0].value, inp[1].value);
                remainder.style.display = "flex";
                inp[3].value = remainderBin(inp[0].value, inp[1].value, inp[2].value);
            }
        })
    })
}