document.addEventListener('DOMContentLoaded', function() {
    const stringInput = document.getElementById('stringInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const inputString = stringInput.value.trim();


        if (inputString === '') {
            result.textContent = 'Пожалуйста, введите непустую строку.';
            return;
        }


        let evenChars = '';
        let oddChars = '';


        for (let i = 0; i < inputString.length; i++) {
            if (i % 2 === 0) {
                evenChars += inputString[i];
            } else {
                oddChars = inputString[i] + oddChars;
            }
        }


        const encryptedString = evenChars + oddChars;

        result.textContent = `Введенная строка: ${inputString}\nЗашифрованная строка: ${encryptedString}`;
    });
});