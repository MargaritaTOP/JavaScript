
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

            const evenElements = [];
            for (let j = 0; j < n; j++) {
                if (sortedArray[i][j] % 2 === 0) {
                    evenElements.push({ value: sortedArray[i][j], index: j });
                }
            }

            evenElements.sort((a, b) => a.value - b.value);

            let evenIndex = 0;
            for (let j = 0; j < n; j++) {
                if (sortedArray[i][j] % 2 === 0) {
                    if (evenIndex < evenElements.length) {
                        sortedArray[i][j] = evenElements[evenIndex].value;
                        evenIndex++;
                    }
                }
            }
        }


        const originalArrayString = array.map(row => row.join(' ')).join('\n');
        const sortedArrayString = sortedArray.map(row => row.join(' ')).join('\n');

        result.textContent = `Сгенерированный массив:\n${originalArrayString}\n\nМассив с отсортированными четными элементами:\n${sortedArrayString}`;
    });
});