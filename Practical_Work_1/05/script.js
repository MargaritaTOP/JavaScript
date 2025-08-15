document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const number = parseInt(numberInput.value);

        if (isNaN(number) || number < 100 || number > 999) {
            result.textContent = 'Пожалуйста, введите действительное трехзначное число.';
            return;
        }

        const reversedNumber = parseInt(number.toString().split('').reverse().join(''));
        result.textContent = `Число задом наперед: ${reversedNumber}`;
    });
});