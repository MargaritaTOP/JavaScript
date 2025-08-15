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

            const oddElements = [];
            for (let i = 0; i < n; i++) {
                if (sortedArray[i][j] % 2 !== 0) {
                    oddElements.push({ value: sortedArray[i][j], index: i });
                }
            }

            oddElements.sort((a, b) => b.value - a.value);

            let oddIndex = 0;
            for (let i = 0; i < n; i++) {
                if (sortedArray[i][j] % 2 !== 0) {
                    if (oddIndex < oddElements.length) {
                        sortedArray[i][j] = oddElements[oddIndex].value;
                        oddIndex++;
                    }
                }
            }
        }


        const originalArrayString = array.map(row => row.join(' ')).join('\n');
        const sortedArrayString = sortedArray.map(row => row.join(' ')).join('\n');

        result.textContent = `Сгенерированный массив:\n${originalArrayString}\n\nМассив с отсортированными нечетными элементами:\n${sortedArrayString}`;
    });
});