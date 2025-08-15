document.addEventListener('DOMContentLoaded', function() {
    const sizeInput = document.getElementById('sizeInput');
    const kInput = document.getElementById('kInput');
    const lInput = document.getElementById('lInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const n = parseInt(sizeInput.value);
        const k = parseInt(kInput.value);
        const l = parseInt(lInput.value);


        if (isNaN(n) || n <= 0) {
            result.textContent = 'Пожалуйста, введите действительное положительное число N.';
            return;
        }
        if (isNaN(k) || isNaN(l)) {
            result.textContent = 'Пожалуйста, введите действительные числа K и L.';
            return;
        }
        if (k < 0 || l < 0 || k >= n || l >= n || k > l) {
            result.textContent = `K и L должны быть от 0 до ${n - 1}, и K должно быть не больше L.`;
            return;
        }


        const numbers = Array.from({ length: n }, () => Math.floor(Math.random() * 201) - 100);


        let sum = 0;
        let count = 0;
        for (let i = k; i <= l; i++) {
            sum += numbers[i];
            count++;
        }
        const mean = sum / count;

        result.textContent = `Сгенерированный массив: ${numbers.join(', ')}\nСреднее арифметическое элементов с индексом с ${k} по ${l}: ${mean.toFixed(2)}`;
    });
});