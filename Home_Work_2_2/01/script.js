document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const count = parseInt(numberInput.value);

        if (isNaN(count) || count < 0) {
            result.textContent = 'Пожалуйста, введите действительное неотрицательное число.';
            return;
        }

        let output = '';
        let i = 0;

        // Using WHILE loop to append '#' count times
        while (i < count) {
            output += '#';
            i++;
        }

        result.textContent = output;
    });
});