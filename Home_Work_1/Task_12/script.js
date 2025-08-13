document.addEventListener('DOMContentLoaded', function() {
    const numberAInput = document.getElementById('numberAInput');
    const numberBInput = document.getElementById('numberBInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const a = parseFloat(numberAInput.value);
        const b = parseFloat(numberBInput.value);

        if (isNaN(a) || isNaN(b) || a < 0 || b < 0) {
            result.textContent = 'Пожалуйста, введите действительные неотрицательные числа.';
            return;
        }

        const geometricMean = Math.sqrt(a * b);
        result.textContent = `Среднее геометрическое: ${geometricMean.toFixed(2)}`;
    });
});