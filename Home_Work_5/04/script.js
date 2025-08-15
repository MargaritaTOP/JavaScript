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


        const rowResults = Array(n).fill().map(() => ({ sum: 0, count: 0 }));
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (array[i][j] % 2 === 0) {
                    rowResults[i].sum += array[i][j];
                    rowResults[i].count += 1;
                }
            }
        }


        const arrayString = array.map(row => row.join(' ')).join('\n');


        const resultsString = rowResults.map((res, index) => {
            const avg = res.count > 0 ? (res.sum / res.count).toFixed(2) : 'нет четных';
            return `Строка ${index + 1}: сумма четных элементов = ${res.sum}, среднее = ${avg}`;
        }).join('\n');

        result.textContent = `Сгенерированный массив:\n${arrayString}\n\nРезультаты для строк:\n${resultsString}`;
    });
});