document.addEventListener('DOMContentLoaded', function() {
    const x1Input = document.getElementById('x1Input');
    const y1Input = document.getElementById('y1Input');
    const x2Input = document.getElementById('x2Input');
    const y2Input = document.getElementById('y2Input');
    const x3Input = document.getElementById('x3Input');
    const y3Input = document.getElementById('y3Input');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const x1 = parseInt(x1Input.value);
        const y1 = parseInt(y1Input.value);
        const x2 = parseInt(x2Input.value);
        const y2 = parseInt(y2Input.value);
        const x3 = parseInt(x3Input.value);
        const y3 = parseInt(y3Input.value);

        if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2) || isNaN(x3) || isNaN(y3)) {
            result.textContent = 'Пожалуйста, введите действительные целые числа.';
            return;
        }

        let x4, y4;

        switch (true) {
            case (x1 === x2 && y1 === y3):
                x4 = x3;
                y4 = y2;
                break;
            case (x1 === x3 && y1 === y2):
                x4 = x2;
                y4 = y3;
                break;
            case (x2 === x3 && y2 === y1):
                x4 = x1;
                y4 = y3;
                break;
            case (x2 === x1 && y2 === y3):
                x4 = x3;
                y4 = y1;
                break;
            case (x3 === x1 && y3 === y2):
                x4 = x2;
                y4 = y1;
                break;
            case (x3 === x2 && y3 === y1):
                x4 = x1;
                y4 = y2;
                break;
            default:
                result.textContent = 'Ошибка: координаты не образуют прямоугольник с сторонами, параллельными осям.';
                return;
        }

        result.textContent = `Координаты четвертой вершины: (${x4}, ${y4})`;
    });
});