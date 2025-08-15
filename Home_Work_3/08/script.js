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


        let minIndex = 0;
        let maxIndex = 0;
        let minValue = numbers[0];
        let maxValue = numbers[0];

        for (let i = 1; i < n; i++) {
            if (numbers[i] < minValue) {
                minValue = numbers[i];
                minIndex = i;
            }
            if (numbers[i] > maxValue) {
                maxValue = numbers[i];
                maxIndex = i;
            }
        }


        const start = Math.min(minIndex, maxIndex);
        const end = Math.max(minIndex, maxIndex);


        const reversedNumbers = [...numbers];


        for (let i = start, j = end; i < j; i++, j--) {
            [reversedNumbers[i], reversedNumbers[j]] = [reversedNumbers[j], reversedNumbers[i]];
        }

        result.textContent = `Сгенерированный массив: ${numbers.join(', ')}\nПереставленный массив: ${reversedNumbers.join(', ')}`;
    });
});