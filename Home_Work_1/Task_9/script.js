document.addEventListener('DOMContentLoaded', function() {
    const edgeInput = document.getElementById('edgeInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const edge = parseFloat(edgeInput.value);

        if (isNaN(edge) || edge <= 0) {
            result.textContent = 'Пожалуйста, введите действительное положительное число.';
            return;
        }

        const volume = Math.pow(edge, 3);
        const surfaceArea = 6 * Math.pow(edge, 2);
        result.textContent = `Объем: ${volume}, Площадь поверхности: ${surfaceArea}`;
    });
});