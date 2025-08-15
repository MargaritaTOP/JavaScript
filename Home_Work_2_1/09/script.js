document.addEventListener('DOMContentLoaded', function() {
    const gradeInput = document.getElementById('gradeInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const grade = parseInt(gradeInput.value);

        if (isNaN(grade)) {
            result.textContent = 'Пожалуйста, введите действительное число.';
            return;
        }

        switch (grade) {
            case 5:
                result.textContent = 'Отлично';
                break;
            case 4:
                result.textContent = 'Хорошо';
                break;
            case 3:
                result.textContent = 'Удовлетворительно';
                break;
            case 2:
                result.textContent = 'Неудовлетворительно';
                break;
            default:
                result.textContent = 'Ошибка: введите оценку от 2 до 5.';
        }
    });
});