document.addEventListener('DOMContentLoaded', function() {
    const xInput = document.getElementById('xInput');
    const nInput = document.getElementById('nInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    function factorial(k) {
        let fact = 1;
        for (let i = 1; i <= k; i++) {
            fact *= i;
        }
        return fact;
    }

    button.addEventListener('click', function() {
        const x = parseFloat(xInput.value);
        const n = parseInt(nInput.value);

        if (isNaN(x) || isNaN(n) || n <= 0) {
            result.textContent = 'Пожалуйста, введите действительное число X и положительное целое число N.';
            return;
        }

        let sum = 0;

        for (let i = 0; i < n; i++) {
            const k = 2 * i;
            const term = (Math.pow(-1, i) * Math.pow(x, k)) / factorial(k);
            sum += term;
        }

        result.textContent = `Приближенное значение cos(${x}): ${sum.toFixed(6)}`;
    });
});