document.addEventListener('DOMContentLoaded', function() {
    const sizeInput = document.getElementById('sizeInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const n = parseInt(sizeInput.value);


        if (isNaN(n) || n <= 0) {
            result.textContent = 'Пожалуйста, введите действительное положительное число N.';
            return;
        }


        const numbers = Array.from({ length: n }, () => Math.floor(Math.random() * 201) - 100);

        let evenNumbers = [];
        let oddNumbers = [];


        for (let i = 0; i < n; i++) {
            if (numbers[i] % 2 === 0) {
                evenNumbers.push(numbers[i]);
            } else {
                oddNumbers.push(numbers[i]);
            }
        }


        const output = [
            ...evenNumbers,
            ...oddNumbers.reverse()
        ];

        result.textContent = `Сгенерированный массив: ${numbers.join(', ')}\nРезультат: ${output.join(', ')}`;
    });
});