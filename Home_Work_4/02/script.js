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


        let latinCount = 0;
        let russianCount = 0;
        for (let i = 0; i < inputString.length; i++) {
            const char = inputString[i];

            if (/[a-z]/.test(char)) {
                latinCount++;
            }

            else if (/[а-я]/.test(char)) {
                russianCount++;
            }
        }

        result.textContent = `Введенная строка: ${inputString}\nКоличество строчных латинских букв: ${latinCount}\nКоличество строчных русских букв: ${russianCount}`;
    });
});