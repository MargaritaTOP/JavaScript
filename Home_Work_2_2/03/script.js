// script.js
document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const powerInput = document.getElementById('powerInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const number = parseFloat(numberInput.value);
        const power = parseInt(powerInput.value);

        if (isNaN(number) || isNaN(power)) {
            result.textContent = 'Пожалуйста, введите действительные числа.';
            return;
        }


        if (number === 0 && power === 0) {
            result.textContent = 'Ошибка: 0 в степени 0 не определено.';
            return;
        }

        let resultValue = 1;
        let absPower = Math.abs(power);
        let currentPower = 0;

        while (currentPower < absPower) {
            resultValue *= number;
            currentPower++;
        }

        if (power < 0) {
            resultValue = 1 / resultValue;
        }

        result.textContent = `Результат: ${number}^${power} = ${resultValue.toFixed(2)}`;
    });
});