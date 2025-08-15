
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


        for (let j = 0; j < n; j++) {
            let minAbs = Math.abs(modifiedArray[0][j]);
            let minIndex = 0;

            for (let i = 1; i < n; i++) {
                if (Math.abs(modifiedArray[i][j]) < minAbs) {
                    minAbs = Math.abs(modifiedArray[i][j]);
                    minIndex = i;
                }
            }

            [modifiedArray[0][j], modifiedArray[minIndex][j]] = [modifiedArray[minIndex][j], modifiedArray[0][j]];
        }


        const originalArrayString = array.map(row => row.join(' ')).join('\n');
        const modifiedArrayString = modifiedArray.map(row => row.join(' ')).join('\n');

        result.textContent = `Сгенерированный массив:\n${originalArrayString}\n\nМассив после перестановки:\n${modifiedArrayString}`;
    });
});