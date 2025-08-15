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

        let current = n;
        let isPowerOfThree = true;

        while (current > 1) {
            if (current % 3 !== 0) {
                isPowerOfThree = false;
                break;
            }
            current = current / 3;
        }

        result.textContent = isPowerOfThree && current === 1 ? 'TRUE' : 'FALSE';
    });
});