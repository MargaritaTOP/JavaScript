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

        let output = '';
        let current = number;


        while (current >= 0) {
            output += current + (current >= 0 ? ', ' : '');
            current--;
        }

        // If number is negative, count up to 0
        while (current <= 0) {
            output += current + (current <= 0 ? ', ' : '');
            current++;
        }

        result.textContent = output || '0';
    });
});