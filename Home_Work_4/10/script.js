document.addEventListener('DOMContentLoaded', function() {
    const stringInput = document.getElementById('stringInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const inputString = stringInput.value.trim();

        if (inputString === '') {
            result.innerHTML = '<p class="error">Пожалуйста, введите непустую строку.</p>';
            return;
        }

        let evenChars = '';
        let oddChars = '';

        for (let i = 0; i < inputString.length; i++) {
            if (i % 2 === 1) {
                evenChars += inputString[i];
            } else {
                oddChars = inputString[i] + oddChars;
            }
        }

        const encryptedString = evenChars + oddChars;


        result.innerHTML = `
            <div class="original-string">Исходная строка: <span class="string-value">"${inputString}"</span></div>
            <div class="encrypted-string">Зашифрованная строка: <span class="string-value">"${encryptedString}"</span></div>
        `;
    });


    stringInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            button.click();
        }
    });
});