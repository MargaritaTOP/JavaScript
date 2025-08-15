document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const divisor = parseInt(numberInput.value);

        if (isNaN(divisor) || divisor <= 0) {
            result.textContent = 'Пожалуйста, введите действительное положительное число.';
            return;
        }

        let multiples = [];

        for (let i = 1; i <= 100; i++) {
            if (i % divisor === 0) {
                multiples.push(i);
            }
        }

        if (multiples.length === 0) {
            result.textContent = `Нет чисел от 1 до 100, кратных ${divisor}.`;
        } else {
            result.textContent = `Числа, кратные ${divisor}: ${multiples.join(', ')}`;
        }
    });
});