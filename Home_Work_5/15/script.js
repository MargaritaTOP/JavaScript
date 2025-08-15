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


        const modifiedArray = array.map(row => [...row]);


        let diagonalSum = 0;
        for (let i = 0; i < n; i++) {
            diagonalSum += array[i][i];
        }
        const diagonalMean = diagonalSum / n;


        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                modifiedArray[i][j] -= diagonalMean;
            }
        }


        const originalArrayString = array.map(row => row.join(' ')).join('\n');
        const modifiedArrayString = modifiedArray.map(row => row.join(' ')).join('\n');

        result.textContent = `Сгенерированный массив:\n${originalArrayString}\n\nСреднее арифметическое главной диагонали: ${diagonalMean.toFixed(2)}\n\nМассив после вычитания:\n${modifiedArrayString}`;
    });
});