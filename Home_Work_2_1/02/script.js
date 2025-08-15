document.addEventListener('DOMContentLoaded', function() {
    const ageInput = document.getElementById('ageInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const age = parseInt(ageInput.value);

        if (isNaN(age)) {
            result.textContent = 'Пожалуйста, введите действительное число.';
            return;
        }

        // Using switch(true) to mimic if-else logic for range-based conditions
        switch (true) {
            case (age >= 0 && age <= 120):
                result.textContent = `Ваш возраст: ${age} лет. Данные корректны.`;
                break;
            default:
                result.textContent = 'Ошибка: возраст должен быть от 0 до 120 лет.';
        }
    });
});