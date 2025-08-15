document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const number = parseInt(numberInput.value);

        if (isNaN(number)) {
            result.textContent = 'Пожалуйста, введите действительное число.';
            return;
        }

        // Using ternary operator to check if the number is divisible by 5
        result.textContent = number % 5 === 0 ? 'Число кратно 5' : 'Число не кратно 5';
    });
});