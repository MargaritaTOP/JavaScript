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


        const sortedArray = array.map(row => [...row]);


        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - 1; j++) {
                for (let k = 0; k < n - 1 - j; k++) {
                    if (sortedArray[i][k] > sortedArray[i][k + 1]) {

                        [sortedArray[i][k], sortedArray[i][k + 1]] = [sortedArray[i][k + 1], sortedArray[i][k]];
                    }
                }
            }
        }


        const originalArrayString = array.map(row => row.join(' ')).join('\n');
        const sortedArrayString = sortedArray.map(row => row.join(' ')).join('\n');

        result.textContent = `Сгенерированный массив:\n${originalArrayString}\n\nОтсортированный массив:\n${sortedArrayString}`;
    });
});