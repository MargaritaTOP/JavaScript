document.addEventListener('DOMContentLoaded', function() {
    const stringInput = document.getElementById('stringInput');
    const shiftInput = document.getElementById('shiftInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const inputString = stringInput.value.trim();
        const shift = parseInt(shiftInput.value);


        if (inputString === '') {
            result.textContent = 'Пожалуйста, введите непустую строку.';
            return;
        }
        if (isNaN(shift)) {
            result.textContent = 'Пожалуйста, введите действительное целое число для сдвига.';
            return;
        }
        if (!/^[а-яА-Я\s]+$/.test(inputString)) {
            result.textContent = 'Ошибка: строка должна содержать только русские буквы и пробелы.';
            return;
        }

        const effectiveShift = ((shift % 32) + 32) % 32;

        let standardEncrypted = '';
        for (let i = 0; i < inputString.length; i++) {
            const char = inputString[i];
            if (char === ' ') {
                standardEncrypted += char;
            } else {

                const isUpperCase = char === char.toUpperCase();
                const baseCharCode = isUpperCase ? 1040 : 1072;

                const charCode = char.charCodeAt(0);
                const shiftedCharCode = ((charCode - baseCharCode + effectiveShift) % 32) + baseCharCode;
                standardEncrypted += String.fromCharCode(shiftedCharCode);
            }
        }

        let modifiedEncrypted = '';
        for (let i = inputString.length - 1; i >= 0; i--) {
            const char = inputString[i];
            if (char === ' ') {
                modifiedEncrypted += char;
            } else {

                const isUpperCase = char === char.toUpperCase();
                const baseCharCode = isUpperCase ? 1040 : 1072;

                const charCode = char.charCodeAt(0);
                const shiftedCharCode = ((charCode - baseCharCode + effectiveShift) % 32) + baseCharCode;
                modifiedEncrypted += String.fromCharCode(shiftedCharCode);
            }
        }

        result.textContent = `Введенная строка: ${inputString}\nСтандартный код Цезаря: ${standardEncrypted}\nМодифицированный код Цезаря: ${modifiedEncrypted}`;
    });
});