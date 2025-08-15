document.addEventListener('DOMContentLoaded', function() {
    const monthInput = document.getElementById('monthInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const month = parseInt(monthInput.value);

        if (isNaN(month)) {
            result.textContent = 'Пожалуйста, введите действительное число.';
            return;
        }

        switch (month) {
            case 1:
                result.textContent = 'Январь';
                break;
            case 2:
                result.textContent = 'Февраль';
                break;
            case 3:
                result.textContent = 'Март';
                break;
            case 4:
                result.textContent = 'Апрель';
                break;
            case 5:
                result.textContent = 'Май';
                break;
            case 6:
                result.textContent = 'Июнь';
                break;
            case 7:
                result.textContent = 'Июль';
                break;
            case 8:
                result.textContent = 'Август';
                break;
            case 9:
                result.textContent = 'Сентябрь';
                break;
            case 10:
                result.textContent = 'Октябрь';
                break;
            case 11:
                result.textContent = 'Ноябрь';
                break;
            case 12:
                result.textContent = 'Декабрь';
                break;
            default:
                result.textContent = 'Ошибка: введите номер месяца от 1 до 12.';
        }
    });
});