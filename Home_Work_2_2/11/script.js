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

        let product = 1;
        let current = 1.1;

        for (let i = 1; i <= n; i++) {
            product *= current;
            current += 0.1;
        }

        result.textContent = `Произведение: ${product.toFixed(2)}`;
    });
});