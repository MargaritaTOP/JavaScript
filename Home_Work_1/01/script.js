document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('numberInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const number = parseFloat(input.value);
        if (isNaN(number)) {
            result.textContent = 'Пожалуйста, введите действительное число.';
            return;
        }
        const cubed = Math.pow(number, 3);
        result.textContent = `Результат: ${number} в 3-й степени = ${cubed}`;
    });
});