document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('fInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const f = parseFloat(input.value);
        if (isNaN(f)) {
            result.textContent = 'Пожалуйста, введите действительное число.';
            return;
        }
        const c = (f - 32) * 5 / 9;
        result.textContent = `Результат: ${f} °F = ${c} °C`;
    });
});