document.addEventListener('DOMContentLoaded', function() {
    const sideAInput = document.getElementById('sideAInput');
    const sideBInput = document.getElementById('sideBInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const sideA = parseFloat(sideAInput.value);
        const sideB = parseFloat(sideBInput.value);

        if (isNaN(sideA) || isNaN(sideB) || sideA <= 0 || sideB <= 0) {
            result.textContent = 'Пожалуйста, введите действительные положительные числа.';
            return;
        }

        const area = sideA * sideB;
        const perimeter = 2 * (sideA + sideB);
        result.textContent = `Площадь: ${area}, Периметр: ${perimeter}`;
    });
});