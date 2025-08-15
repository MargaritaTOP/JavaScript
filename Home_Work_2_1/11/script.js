document.addEventListener('DOMContentLoaded', function() {
    const dayInput = document.getElementById('dayInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const day = parseInt(dayInput.value);

        if (isNaN(day)) {
            result.textContent = 'Пожалуйста, введите действительное число.';
            return;
        }

        switch (day) {
            case 1:
                result.textContent = 'Понедельник';
                break;
            case 2:
                result.textContent = 'Вторник';
                break;
            case 3:
                result.textContent = 'Среда';
                break;
            case 4:
                result.textContent = 'Четверг';
                break;
            case 5:
                result.textContent = 'Пятница';
                break;
            case 6:
                result.textContent = 'Суббота';
                break;
            case 7:
                result.textContent = 'Воскресенье';
                break;
            default:
                result.textContent = 'Ошибка: введите номер дня от 1 до 7.';
        }
    });
});