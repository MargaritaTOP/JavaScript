document.addEventListener('DOMContentLoaded', function() {
    const expressionInput = document.getElementById('expressionInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const inputExpression = expressionInput.value.trim();


        if (inputExpression === '') {
            result.textContent = 'Пожалуйста, введите арифметическое выражение.';
            return;
        }


        if (!/^[0-9+\-*/\s]+$/.test(inputExpression)) {
            result.textContent = 'Ошибка: выражение содержит недопустимые символы.';
            return;
        }

        try {

            const value = eval(inputExpression);


            if (!isFinite(value)) {
                result.textContent = 'Ошибка: выражение некорректно (например, деление на ноль).';
                return;
            }
            if (!Number.isInteger(value)) {
                result.textContent = 'Ошибка: результат выражения не является целым числом.';
                return;
            }

            result.textContent = `Выражение: ${inputExpression}\nЗначение: ${value}`;
        } catch (e) {
            result.textContent = 'Ошибка: некорректное арифметическое выражение.';
        }
    });
});