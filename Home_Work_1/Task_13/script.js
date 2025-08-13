document.addEventListener('DOMContentLoaded', function() {
    const cathetusAInput = document.getElementById('cathetusAInput');
    const cathetusBInput = document.getElementById('cathetusBInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const a = parseFloat(cathetusAInput.value);
        const b = parseFloat(cathetusBInput.value);

        if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
            result.textContent = 'Пожалуйста, введите действительные положительные числа.';
            return;
        }

        const hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        const perimeter = a + b + hypotenuse;
        result.textContent = `Гипотенуза: ${hypotenuse.toFixed(2)}, Периметр: ${perimeter.toFixed(2)}`;
    });
});