document.addEventListener('DOMContentLoaded', function() {
    const sizeInput = document.getElementById('sizeInput');
    const shiftInput = document.getElementById('shiftInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const n = parseInt(sizeInput.value);
        const shift = parseInt(shiftInput.value);


        if (isNaN(n) || n <= 0) {
            result.textContent = 'Пожалуйста, введите действительное положительное число N.';
            return;
        }
        if (isNaN(shift)) {
            result.textContent = 'Пожалуйста, введите действительное число для сдвига.';
            return;
        }


        const numbers = Array.from({ length: n }, () => Math.floor(Math.random() * 201) - 100);


        const effectiveShift = shift % n >= 0 ? shift % n : (shift % n) + n;


        const shiftedNumbers = Array(n);
        for (let i = 0; i < n; i++) {
            const newIndex = (i - effectiveShift + n) % n;
            shiftedNumbers[newIndex] = numbers[i];
        }

        result.textContent = `Сгенерированный массив: ${numbers.join(', ')}\nСдвинутый массив: ${shiftedNumbers.join(', ')}`;
    });
});