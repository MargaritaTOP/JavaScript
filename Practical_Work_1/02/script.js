document.addEventListener('DOMContentLoaded', function() {
    const radiusInput = document.getElementById('radiusInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const radius = parseFloat(radiusInput.value);

        if (isNaN(radius) || radius <= 0) {
            result.textContent = 'Пожалуйста, введите действительное положительное число.';
            return;
        }

        const area = Math.PI * radius * radius;
        result.textContent = `Площадь окружности: ${area.toFixed(2)}`;
    });
});