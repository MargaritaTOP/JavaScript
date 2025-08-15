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


        const num = Number(inputString);

        if (isNaN(num)) {
            result.textContent = `0 - строку нельзя преобразовать в число`;
        } else {

            if (inputString.includes('.')) {

                const parts = inputString.split('.');
                if (parts.length === 2 && /^[0-9]+$/.test(parts[0]) && /^[0-9]+$/.test(parts[1])) {
                    result.textContent = `2 - дробное число`;
                } else {
                    result.textContent = `0 - строку нельзя преобразовать в число`;
                }
            } else {

                if (/^[0-9]+$/.test(inputString)) {
                    result.textContent = `1 - целое число`;
                } else {
                    result.textContent = `0 - строку нельзя преобразовать в число`;
                }
            }
        }
    });
});