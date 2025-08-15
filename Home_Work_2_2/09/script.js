document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        let number = 1000;
        let divisions = 0;

        // Using DO WHILE loop to divide 1000 by 2 until the result is less than 50
        do {
            number = number / 2;
            divisions++;
        } while (number >= 50);

        result.textContent = `Конечное число: ${number.toFixed(2)}, Количество делений: ${divisions}`;
    });
});