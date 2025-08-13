document.addEventListener('DOMContentLoaded', function() {
    const variableAInput = document.getElementById('variableAInput');
    const variableBInput = document.getElementById('variableBInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const a = parseFloat(variableAInput.value);
        const b = parseFloat(variableBInput.value);

        if (isNaN(a) || isNaN(b)) {
            result.textContent = 'Пожалуйста, введите действительные числа.';
            return;
        }

        result.textContent = `Новое значение A: ${b}, Новое значение B: ${a}`;
    });
});