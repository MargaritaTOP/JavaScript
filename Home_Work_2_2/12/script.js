document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const n = parseInt(numberInput.value);

        if (isNaN(n) || n <= 1) {
            result.textContent = 'Пожалуйста, введите действительное число больше 1.';
            return;
        }

        let isPrime = true;


        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }

        result.textContent = isPrime ? `${n} - простое число` : `${n} - не простое число`;
    });
});