document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        if (button.hasAttribute('data-value')) {
            button.addEventListener('click', function () {
                appendToDisplay(button.getAttribute('data-value'));
            });
        }

        if (button.hasAttribute('data-action')) {
            button.addEventListener('click', function () {
                const action = button.getAttribute('data-action');
                if (action === 'deleteLastCharacter') {
                    deleteLastCharacter();
                } else if (action === 'clearDisplay') {
                    clearDisplay();
                } else if (action === 'calculateResult') {
                    calculateResult();
                }
            });
        }
    });
});

function appendToDisplay(value) {
    const display = document.querySelector('input[name="display"]');
    display.value += value;
}

function deleteLastCharacter() {
    const display = document.querySelector('input[name="display"]');
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    const display = document.querySelector('input[name="display"]');
    display.value = '';
}

function calculateResult() {
    const display = document.querySelector('input[name="display"]');
    let expression = display.value;

    expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

    try {
        const result = evaluateExpression(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function evaluateExpression(expression) {
    expression = expression.replace(/(\d+\.?\d*)\s*([\*\/])\s*(\d+\.?\d*)/g, (match, num1, operator, num2) => {
        if (operator === '*') {
            return parseFloat(num1) * parseFloat(num2);
        } else if (operator === '/') {
            return parseFloat(num1) / parseFloat(num2);
        } else {
            return -1;
        }
    });

    expression = expression.replace(/(\d+\.?\d*)\s*([\+\-])\s*(\d+\.?\d*)/g, (match, num1, operator, num2) => {
        if (operator === '+') {
            return parseFloat(num1) + parseFloat(num2);
        } else if (operator === '-') {
            return parseFloat(num1) - parseFloat(num2);
        } else {
            return -1;
        }
    });

    return expression;
}
