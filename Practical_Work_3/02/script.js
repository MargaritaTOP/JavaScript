document.addEventListener('DOMContentLoaded', function() {
    const sizeInput1 = document.getElementById('sizeInput1');
    const sizeInput2 = document.getElementById('sizeInput2');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const n = parseInt(sizeInput1.value);
        const m = parseInt(sizeInput2.value);


        if (isNaN(n) || n <= 0 || isNaN(m) || m <= 0) {
            result.textContent = 'Пожалуйста, введите действительные положительные числа для размеров массивов.';
            return;
        }


        const array1 = Array.from({ length: n }, () => Math.floor(Math.random() * 201) - 100);
        const array2 = Array.from({ length: m }, () => Math.floor(Math.random() * 201) - 100);


        const uniqueInArray1 = [];
        for (let i = 0; i < n; i++) {
            let isUnique = true;
            for (let j = 0; j < m; j++) {
                if (array1[i] === array2[j]) {
                    isUnique = false;
                    break;
                }
            }
            if (isUnique) {
                uniqueInArray1.push(array1[i]);
            }
        }


        const uniqueInArray2 = [];
        for (let i = 0; i < m; i++) {
            let isUnique = true;
            for (let j = 0; j < n; j++) {
                if (array2[i] === array1[j]) {
                    isUnique = false;
                    break;
                }
            }
            if (isUnique) {
                uniqueInArray2.push(array2[i]);
            }
        }


        const combinedUnique = [...uniqueInArray1, ...uniqueInArray2];


        const array1String = array1.join(' ');
        const array2String = array2.join(' ');
        const unique1String = uniqueInArray1.length > 0 ? uniqueInArray1.join(' ') : 'нет уникальных элементов';
        const unique2String = uniqueInArray2.length > 0 ? uniqueInArray2.join(' ') : 'нет уникальных элементов';
        const combinedString = combinedUnique.length > 0 ? combinedUnique.join(' ') : 'нет уникальных элементов';

        result.textContent = `Первый массив:\n${array1String}\n\nВторой массив:\n${array2String}\n\nУникальные элементы первого массива (отсутствуют во втором):\n${unique1String}\n\nУникальные элементы второго массива (отсутствуют в первом):\n${unique2String}\n\nОбъединенный массив уникальных элементов:\n${combinedString}`;
    });
});