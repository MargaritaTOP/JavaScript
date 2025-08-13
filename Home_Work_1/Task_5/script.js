// script.js
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('cInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const c = parseFloat(input.value);
        if (isNaN(c)) {
            result.textContent = 'Пожалуйста, введите действительное число.';
            return;
        }
        const f = c * 9 / 5 + 32;
        result.textContent = `Результат: ${c} °C = ${f} °F`;
    });
});