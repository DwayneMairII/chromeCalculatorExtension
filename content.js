let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    document.querySelector('.display input').value = currentExpression;
}

function deleteLastCharacter() {
    currentExpression = currentExpression.slice(0, -1);
    document.querySelector('.display input').value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    document.querySelector('.display input').value = '';
}

function calculateResult() {
    try {
        // Replace '×' and '÷' with '*' and '/' for calculation purposes
        currentExpression = currentExpression.replace(/×/g, '*').replace(/÷/g, '/');
        // Use the eval function to evaluate the expression
        currentExpression = eval(currentExpression).toString();
        document.querySelector('.display input').value = currentExpression;
    } catch (error) {
        document.querySelector('.display input').value = 'Error';
        currentExpression = '';
    }
}

function createWindow() {
    alert('Additional functionality like scientific calculations can be implemented here!');
}
