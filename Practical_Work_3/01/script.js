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


        const array = Array.from({ length: n }, () => Math.floor(Math.random() * 201) - 100);


        const sortedArray = [...array].sort((a, b) => (a % 2) - (b % 2));


        const originalArrayString = array.join(' ');
        const sortedArrayString = sortedArray.join(' ');

        result.textContent = `Сгенерированный массив:\n${originalArrayString}\n\nОтсортированный массив (четные впереди):\n${sortedArrayString}`;
    });
});