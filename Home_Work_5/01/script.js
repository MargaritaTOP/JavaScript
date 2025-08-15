document.addEventListener('DOMContentLoaded', function() {
    const sizeInput = document.getElementById('sizeInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const n = parseInt(sizeInput.value);


        if (isNaN(n) || n <= 0) {
            result.textContent = 'Пожалуйста, введите действительное положительное число N.';
            return;
        }


        const array = Array.from({ length: n }, () =>
            Array.from({ length: n }, () => Math.floor(Math.random() * 201) - 100)
        );


        const columnSums = Array(n).fill(0);
        for (let j = 0; j < n; j++) {
            for (let i = 0; i < n; i++) {
                if (array[i][j] < 0) {
                    columnSums[j] += array[i][j];
                }
            }
        }


        const arrayString = array.map(row => row.join(' ')).join('\n');


        const sumsString = columnSums.map((sum, index) =>
            `Столбец ${index + 1}: ${sum}`
        ).join('\n');

        result.textContent = `Сгенерированный массив:\n${arrayString}\n\nСуммы отрицательных элементов в столбцах:\n${sumsString}`;
    });
});