console.log("App loaded");

import Calculator from "./calculator.js";

const calc = new Calculator();
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

function updateDisplay() {
    display.textContent = calc.currentvalue;
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.number) {
            calc.appendNumber(btn.dataset.number);
        } else if (btn.dataset.operator) {
            calc.chooseOperator(btn.dataset.operator);
        } else if (btn.dataset.action) {
            switch (btn.dataset.action) {
                case 'clear':
                    calc.reset();
                    break;
                case 'delete':
                    calc.delete();
                    break;
                case 'equals':
                    calc.compute();
                    break;
            }
        }

        updateDisplay();
    });
});

updateDisplay(); // Initial render


