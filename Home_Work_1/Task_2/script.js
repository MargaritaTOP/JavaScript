document.addEventListener('DOMContentLoaded', function() {
    const firstInput = document.getElementById('firstNumberInput');
    const secondInput = document.getElementById('secondNumberInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const firstNumber = parseFloat(firstInput.value);
        const secondNumber = parseFloat(secondInput.value);
        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            result.textContent = 'Пожалуйста, введите действительные числа.';
            return;
        }
        const average = (firstNumber + secondNumber) / 2;
        result.textContent = `Среднее арифметическое: ${average}`;
    });
});