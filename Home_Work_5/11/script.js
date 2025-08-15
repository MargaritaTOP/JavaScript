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


        const counts = Array(n).fill(0);
        for (let j = 0; j < n; j++) {

            let sum = 0;
            for (let i = 0; i < n; i++) {
                sum += array[i][j];
            }
            const mean = sum / n;

            for (let i = 0; i < n; i++) {
                if (array[i][j] < mean) {
                    counts[j]++;
                }
            }
        }


        const arrayString = array.map(row => row.join(' ')).join('\n');


        const countsString = counts.map((count, index) =>
            `Столбец ${index + 1}: ${count} элементов меньше среднего`
        ).join('\n');

        result.textContent = `Сгенерированный массив:\n${arrayString}\n\nРезультаты для столбцов:\n${countsString}`;
    });
});