document.addEventListener('DOMContentLoaded', function() {
    const number1Input = document.getElementById('number1Input');
    const number2Input = document.getElementById('number2Input');
    const number3Input = document.getElementById('number3Input');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const num1 = parseInt(number1Input.value);
        const num2 = parseInt(number2Input.value);
        const num3 = parseInt(number3Input.value);

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            result.textContent = 'Пожалуйста, введите действительные целые числа.';
            return;
        }

        let positiveCount = 0;
        let negativeCount = 0;

        // Check num1
        switch (true) {
            case (num1 > 0):
                positiveCount++;
                break;
            case (num1 < 0):
                negativeCount++;
                break;
        }

        // Check num2
        switch (true) {
            case (num2 > 0):
                positiveCount++;
                break;
            case (num2 < 0):
                negativeCount++;
                break;
        }

        // Check num3
        switch (true) {
            case (num3 > 0):
                positiveCount++;
                break;
            case (num3 < 0):
                negativeCount++;
                break;
        }

        result.textContent = `Положительных чисел: ${positiveCount}, Отрицательных чисел: ${negativeCount}`;
    });
});