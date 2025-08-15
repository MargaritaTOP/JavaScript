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
        for (let i = 0; i < n; i++) {

            let sum = 0;
            for (let j = 0; j < n; j++) {
                sum += array[i][j];
            }
            const mean = sum / n;

            for (let j = 0; j < n; j++) {
                if (array[i][j] > mean) {
                    counts[i]++;
                }
            }
        }


        const arrayString = array.map(row => row.join(' ')).join('\n');


        const countsString = counts.map((count, index) =>
            `Строка ${index + 1}: ${count} элементов превышают среднее`
        ).join('\n');

        result.textContent = `Сгенерированный массив:\n${arrayString}\n\nРезультаты для строк:\n${countsString}`;
    });
});