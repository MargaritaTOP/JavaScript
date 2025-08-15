document.addEventListener('DOMContentLoaded', function() {
    const xInput = document.getElementById('xInput');
    const yInput = document.getElementById('yInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const x = parseFloat(xInput.value);
        const y = parseFloat(yInput.value);

        if (isNaN(x) || isNaN(y)) {
            result.textContent = 'Пожалуйста, введите действительные числа.';
            return;
        }

        // Using switch(true) to mimic if-else logic for coordinate quadrant conditions
        switch (true) {
            case (x === 0 && y === 0):
                result.textContent = 'Точка находится в начале координат (0, 0).';
                break;
            case (x === 0 && y !== 0):
                result.textContent = 'Точка лежит на оси Y.';
                break;
            case (y === 0 && x !== 0):
                result.textContent = 'Точка лежит на оси X.';
                break;
            case (x > 0 && y > 0):
                result.textContent = 'Точка находится в первой четверти.';
                break;
            case (x < 0 && y > 0):
                result.textContent = 'Точка находится во второй четверти.';
                break;
            case (x < 0 && y < 0):
                result.textContent = 'Точка находится в третьей четверти.';
                break;
            case (x > 0 && y < 0):
                result.textContent = 'Точка находится в четвертой четверти.';
                break;
            default:
                result.textContent = 'Ошибка: некорректные координаты.';
        }
    });
});