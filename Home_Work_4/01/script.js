
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

        let randomString = '';
        for (let i = 0; i < n; i++) {
            randomString += Math.floor(Math.random() * 10).toString();
        }

        let digitCount = 0;
        for (let i = 0; i < randomString.length; i++) {
            if (/[0-9]/.test(randomString[i])) {
                digitCount++;
            }
        }

        result.textContent = `Сгенерированная строка: ${randomString}\nКоличество цифр: ${digitCount}`;
    });
});