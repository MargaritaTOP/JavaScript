document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const number = parseFloat(numberInput.value);

        if (isNaN(number)) {
            result.textContent = 'Пожалуйста, введите действительное число.';
            return;
        }

        if (number > 0) {
            result.textContent = 'Число положительное';
        } else if (number < 0) {
            result.textContent = 'Число отрицательное';
        } else {
            result.textContent = 'Число равно нулю';
        }
    });
});