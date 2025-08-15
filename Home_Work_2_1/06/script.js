document.addEventListener('DOMContentLoaded', function() {
    const number1Input = document.getElementById('number1Input');
    const number2Input = document.getElementById('number2Input');
    const number3Input = document.getElementById('number3Input');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
        const num3 = parseFloat(number3Input.value);

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            result.textContent = 'Пожалуйста, введите действительные числа.';
            return;
        }

        // Using switch(true) to mimic if-else logic for determining the smallest number
        let sum;
        switch (true) {
            case (num1 <= num2 && num1 <= num3): // num1 is the smallest
                sum = num2 + num3;
                result.textContent = `Сумма двух наибольших чисел: ${sum}`;
                break;
            case (num2 <= num1 && num2 <= num3): // num2 is the smallest
                sum = num1 + num3;
                result.textContent = `Сумма двух наибольших чисел: ${sum}`;
                break;
            case (num3 <= num1 && num3 <= num2): // num3 is the smallest
                sum = num1 + num2;
                result.textContent = `Сумма двух наibольших чисел: ${sum}`;
                break;
            default:
                result.textContent = 'Ошибка: некорректные данные.';
        }
    });
});