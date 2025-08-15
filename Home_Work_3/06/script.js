// script.js
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


        let localMinIndex = -1;


        for (let i = 0; i < n; i++) {
            let isLocalMin = false;


            if (i === 0 && n > 1) {

                if (numbers[i] < numbers[i + 1]) {
                    isLocalMin = true;
                }
            } else if (i === n - 1 && n > 1) {

                if (numbers[i] < numbers[i - 1]) {
                    isLocalMin = true;
                }
            } else if (i > 0 && i < n - 1) {

                if (numbers[i] < numbers[i - 1] && numbers[i] < numbers[i + 1]) {
                    isLocalMin = true;
                }
            } else if (n === 1) {

                isLocalMin = true;
            }

            if (isLocalMin) {
                localMinIndex = i;
                break;
            }
        }


        if (localMinIndex === -1) {
            result.textContent = `Сгенерированный массив: ${numbers.join(', ')}\nЛокальный минимум не найден.`;
        } else {
            result.textContent = `Сгенерированный массив: ${numbers.join(', ')}\nПервый локальный минимум: ${numbers[localMinIndex]} (индекс ${localMinIndex})`;
        }
    });
});