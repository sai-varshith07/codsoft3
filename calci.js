function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
