
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


        let minElement = null;


        for (let i = 0; i < n; i += 2) {
            if (minElement === null || numbers[i] < minElement) {
                minElement = numbers[i];
            }
        }


        if (minElement === null) {
            result.textContent = `Сгенерированный массив: ${numbers.join(', ')}\nНет элементов с четными номерами.`;
        } else {
            result.textContent = `Сгенерированный массив: ${numbers.join(', ')}\nМинимальный элемент с четным номером: ${minElement}`;
        }
    });
});