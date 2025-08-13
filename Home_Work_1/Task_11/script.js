document.addEventListener('DOMContentLoaded', function() {
    const x1Input = document.getElementById('x1Input');
    const y1Input = document.getElementById('y1Input');
    const x2Input = document.getElementById('x2Input');
    const y2Input = document.getElementById('y2Input');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const x1 = parseFloat(x1Input.value);
        const y1 = parseFloat(y1Input.value);
        const x2 = parseFloat(x2Input.value);
        const y2 = parseFloat(y2Input.value);

        if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
            result.textContent = 'Пожалуйста, введите действительные числа.';
            return;
        }

        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        result.textContent = `Расстояние: ${distance.toFixed(2)}`;
    });
});