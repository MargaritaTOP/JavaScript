document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('kmInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    const MILES_PER_KM = 0.621371;

    button.addEventListener('click', function() {
        const km = parseFloat(input.value);
        if (isNaN(km)) {
            result.textContent = 'Пожалуйста, введите действительное число.';
            return;
        }
        const miles = km * MILES_PER_KM;
        result.textContent = `Результат: ${km} км = ${miles} миль`;
    });
});