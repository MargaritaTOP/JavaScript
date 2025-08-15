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
        let k = 0;
        let isPowerOfTwo = true;

        while (current > 1) {
            if (current % 2 !== 0) {
                isPowerOfTwo = false;
                break;
            }
            current = current / 2;
            k++;
        }

        if (isPowerOfTwo && current === 1) {
            result.textContent = `Показатель степени: ${k}`;
        } else {
            result.textContent = 'Ошибка: число не является степенью 2.';
        }
    });
});