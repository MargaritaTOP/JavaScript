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


        let maxSum = -Infinity;
        let minSum = Infinity;
        let maxRowIndex = 0;
        let minRowIndex = 0;

        for (let i = 0; i < n; i++) {
            let rowSum = 0;
            for (let j = 0; j < n; j++) {
                rowSum += array[i][j];
            }
            if (rowSum > maxSum) {
                maxSum = rowSum;
                maxRowIndex = i;
            }
            if (rowSum < minSum) {
                minSum = rowSum;
                minRowIndex = i;
            }
        }


        if (maxRowIndex !== minRowIndex) {
            [modifiedArray[maxRowIndex], modifiedArray[minRowIndex]] =
                [modifiedArray[minRowIndex], modifiedArray[maxRowIndex]];
        }


        const originalArrayString = array.map(row => row.join(' ')).join('\n');
        const modifiedArrayString = modifiedArray.map(row => row.join(' ')).join('\n');

        result.textContent = `Сгенерированный массив:\n${originalArrayString}\n\nМассив после перестановки:\n${modifiedArrayString}`;
    });
});