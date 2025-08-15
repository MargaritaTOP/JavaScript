document.addEventListener('DOMContentLoaded', function() {
    const edgeAInput = document.getElementById('edgeAInput');
    const edgeBInput = document.getElementById('edgeBInput');
    const edgeCInput = document.getElementById('edgeCInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const edgeA = parseFloat(edgeAInput.value);
        const edgeB = parseFloat(edgeBInput.value);
        const edgeC = parseFloat(edgeCInput.value);

        if (isNaN(edgeA) || isNaN(edgeB) || isNaN(edgeC) || edgeA <= 0 || edgeB <= 0 || edgeC <= 0) {
            result.textContent = 'Пожалуйста, введите действительные положительные числа.';
            return;
        }

        const volume = edgeA * edgeB * edgeC;
        const surfaceArea = 2 * (edgeA * edgeB + edgeB * edgeC + edgeA * edgeC);
        result.textContent = `Объем: ${volume}, Площадь поверхности: ${surfaceArea}`;
    });
});