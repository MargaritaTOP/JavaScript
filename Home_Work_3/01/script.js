
document.addEventListener('DOMContentLoaded', function() {
    const nInput = document.getElementById('nInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const n = parseInt(nInput.value);

        if (isNaN(n) || n <= 2) {
            result.textContent = 'Пожалуйста, введите действительное целое число больше 2.';
            return;
        }

        let fib = [0, 1];

        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        result.textContent = `Первые ${n} чисел Фибоначчи: ${fib.join(', ')}`;
    });
});