document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const n = parseInt(numberInput.value);

        if (isNaN(n) || n <= 0) {
            result.textContent = 'Пожалуйста, введите действительное положительное число.';
            return;
        }

        let current = Math.abs(n);
        let digits = [];

        while (current > 0) {
            digits.push(current % 10);
            current = Math.floor(current / 10);
        }

        if (n === 0) {
            digits.push(0);
        }

        result.textContent = `Цифры числа: ${digits.join(', ')}`;
    });
});