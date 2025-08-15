document.addEventListener('DOMContentLoaded', function() {
    const number1Input = document.getElementById('number1Input');
    const number2Input = document.getElementById('number2Input');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const num1 = parseInt(number1Input.value);
        const num2 = parseInt(number2Input.value);

        if (isNaN(num1) || isNaN(num2)) {
            result.textContent = 'Пожалуйста, введите действительные числа.';
            return;
        }

        const absNum1 = Math.abs(num1);
        const absNum2 = Math.abs(num2);

        const maxDivisor = Math.min(absNum1, absNum2);
        let divisor = 1;
        let commonDivisors = [];

        while (divisor <= maxDivisor) {
            if (absNum1 % divisor === 0 && absNum2 % divisor === 0) {
                commonDivisors.push(divisor);
            }
            divisor++;
        }

        if (commonDivisors.length === 0) {
            result.textContent = 'Общих делителей нет.';
        } else {
            result.textContent = `Общие делители: ${commonDivisors.join(', ')}`;
        }
    });
});