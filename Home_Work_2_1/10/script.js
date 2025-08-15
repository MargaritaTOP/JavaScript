document.addEventListener('DOMContentLoaded', function() {
    const number1Input = document.getElementById('number1Input');
    const number2Input = document.getElementById('number2Input');
    const operatorInput = document.getElementById('operatorInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
        const operator = operatorInput.value;

        if (isNaN(num1) || isNaN(num2)) {
            result.textContent = 'Пожалуйста, введите действительные числа.';
            return;
        }

        let calculation;
        switch (operator) {
            case '+':
                calculation = num1 + num2;
                result.textContent = `Результат: ${num1} + ${num2} = ${calculation.toFixed(2)}`;
                break;
            case '-':
                calculation = num1 - num2;
                result.textContent = `Результат: ${num1} - ${num2} = ${calculation.toFixed(2)}`;
                break;
            case '*':
                calculation = num1 * num2;
                result.textContent = `Результат: ${num1} × ${num2} = ${calculation.toFixed(2)}`;
                break;
            case '/':
                if (num2 === 0) {
                    result.textContent = 'Ошибка: деление на ноль невозможно.';
                    return;
                }
                calculation = num1 / num2;
                result.textContent = `Результат: ${num1} ÷ ${num2} = ${calculation.toFixed(2)}`;
                break;
            default:
                result.textContent = 'Ошибка: выберите корректный оператор.';
        }
    });
});