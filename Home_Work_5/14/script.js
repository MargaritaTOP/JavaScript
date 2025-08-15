document.addEventListener('DOMContentLoaded', function() {
    const sizeInput = document.getElementById('sizeInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const n = parseInt(sizeInput.value);

        // Validate input
        if (isNaN(n) || n <= 0) {
            result.textContent = 'Пожалуйста, введите действительное положительное число N.';
            return;
        }


        const array = Array.from({ length: n }, () =>
            Array.from({ length: n }, () => Math.floor(Math.random() * 201) - 100)
        );


        const modifiedArray = array.map(row => [...row]);


        const positiveCounts = Array(n).fill(0);
        for (let j = 0; j < n; j++) {
            for (let i = 0; i < n; i++) {
                if (array[i][j] > 0) {
                    positiveCounts[j]++;
                }
            }
        }


        let maxCount = -Infinity;
        let minCount = Infinity;
        let maxColIndex = 0;
        let minColIndex = 0;

        for (let j = 0; j < n; j++) {
            if (positiveCounts[j] > maxCount) {
                maxCount = positiveCounts[j];
                maxColIndex = j;
            }
            if (positiveCounts[j] < minCount) {
                minCount = positiveCounts[j];
                minColIndex = j;
            }
        }


        if (maxColIndex !== minColIndex) {
            for (let i = 0; i < n; i++) {
                [modifiedArray[i][maxColIndex], modifiedArray[i][minColIndex]] =
                    [modifiedArray[i][minColIndex], modifiedArray[i][maxColIndex]];
            }
        }


        const originalArrayString = array.map(row => row.join(' ')).join('\n');
        const modifiedArrayString = modifiedArray.map(row => row.join(' ')).join('\n');

        result.textContent = `Сгенерированный массив:\n${originalArrayString}\n\nМассив после перестановки:\n${modifiedArrayString}`;
    });
});