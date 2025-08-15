document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const n = parseInt(numberInput.value);

        if (isNaN(n) || n < 0) {
            result.textContent = 'Пожалуйста, введите действительное неотрицательное число.';
            return;
        }

        let evenNumbers = [];
        let oddNumbers = [];

        for (let i = 0; i <= n; i++) {
            if (i % 2 === 0) {
                evenNumbers.push(i);
            } else {
                oddNumbers.push(i);
            }
        }

        result.textContent = `Четные числа: ${evenNumbers.join(', ')}\nНечетные числа: ${oddNumbers.join(', ')}`;
    });
});