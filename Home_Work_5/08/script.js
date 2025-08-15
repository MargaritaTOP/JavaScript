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


        for (let i = 0; i < n; i++) {
            let maxAbs = Math.abs(modifiedArray[i][0]);
            let maxIndex = 0;
            // Find the element with maximum absolute value
            for (let j = 1; j < n; j++) {
                if (Math.abs(modifiedArray[i][j]) > maxAbs) {
                    maxAbs = Math.abs(modifiedArray[i][j]);
                    maxIndex = j;
                }
            }

            [modifiedArray[i][0], modifiedArray[i][maxIndex]] = [modifiedArray[i][maxIndex], modifiedArray[i][0]];
        }


        const originalArrayString = array.map(row => row.join(' ')).join('\n');
        const modifiedArrayString = modifiedArray.map(row => row.join(' ')).join('\n');

        result.textContent = `Сгенерированный массив:\n${originalArrayString}\n\nМассив после перестановки:\n${modifiedArrayString}`;
    });
});