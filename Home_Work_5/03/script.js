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


        for (let j = 0; j < n; j++) {
            for (let pass = 0; pass < n - 1; pass++) {
                for (let i = 0; i < n - 1 - pass; i++) {
                    if (sortedArray[i][j] < sortedArray[i + 1][j]) {

                        [sortedArray[i][j], sortedArray[i + 1][j]] = [sortedArray[i + 1][j], sortedArray[i][j]];
                    }
                }
            }
        }


        const originalArrayString = array.map(row => row.join(' ')).join('\n');
        const sortedArrayString = sortedArray.map(row => row.join(' ')).join('\n');

        result.textContent = `Сгенерированный массив:\n${originalArrayString}\n\nОтсортированный массив:\n${sortedArrayString}`;
    });
});