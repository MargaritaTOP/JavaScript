document.addEventListener('DOMContentLoaded', function() {
    const sideInput = document.getElementById('sideInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const side = parseFloat(sideInput.value);

        if (isNaN(side) || side <= 0) {
            result.textContent = 'Пожалуйста, введите действительное положительное число.';
            return;
        }

        const perimeter = 4 * side;
        const area = side * side;
        result.textContent = `Периметр: ${perimeter}, Площадь: ${area}`;
    });
});