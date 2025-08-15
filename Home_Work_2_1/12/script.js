document.addEventListener('DOMContentLoaded', function() {
    const number1Input = document.getElementById('number1Input');
    const number2Input = document.getElementById('number2Input');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);

        if (isNaN(num1) || isNaN(num2)) {
            result.textContent = 'Пожалуйста, введите действительные числа.';
            return;
        }

        // Using ternary operator to find the larger number
        const larger = num1 > num2 ? num1 : num2;
        result.textContent = `Большее число: ${larger}`;
    });
});