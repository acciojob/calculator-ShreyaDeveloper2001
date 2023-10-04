//your code here
document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("input");
    let currentInput = "";
    let operator = "";

    function clearInput() {
        input.value = "";
        currentInput = "";
        operator = "";
    }

    document.getElementById("clr").addEventListener("click", function () {
        clearInput();
    });

    document.querySelectorAll(".buttons button").forEach((button) => {
        button.addEventListener("click", function () {
            if (button.id >= "0" && button.id <= "9") {
                currentInput += button.textContent;
                input.value = currentInput;
            } else if (button.id === "dot") {
                if (!currentInput.includes(".")) {
                    currentInput += ".";
                    input.value = currentInput;
                }
            } else if (button.id === "ans") {
                if (operator && currentInput) {
                    try {
                        currentInput = eval(input.value).toString();
                        input.value = currentInput;
                        operator = "";
                    } catch (error) {
                        if (error instanceof SyntaxError) {
                            input.value = "Error";
                            currentInput = "";
                            operator = "";
                        }
                    }
                }
            } else if (["plus", "minus", "multiply", "divide"].includes(button.id)) {
                if (currentInput) {
                    if (operator) {
                        currentInput = eval(input.value).toString();
                        input.value = currentInput;
                    }
                    operator = button.textContent;
                    currentInput = "";
                }
            }
        });
    });
});

