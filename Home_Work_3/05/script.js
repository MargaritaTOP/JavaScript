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


        let maxElement = null;


        for (let i = 1; i < n; i += 2) {
            if (maxElement === null || numbers[i] > maxElement) {
                maxElement = numbers[i];
            }
        }


        if (maxElement === null) {
            result.textContent = `Сгенерированный массив: ${numbers.join(', ')}\nНет элементов с нечетными номерами.`;
        } else {
            result.textContent = `Сгенерированный массив: ${numbers.join(', ')}\nМаксимальный элемент с нечетным номером: ${maxElement}`;
        }
    });
});