// Функция для показа сообщения
function showMessage(message, isError = false) {
    console.log('showMessage:', message, 'isError:', isError); // Отладка
    $('#output')
        .css('color', isError ? 'red' : '#e0e0e0')
        .val(message)
        .removeClass('show')
        .addClass('show');
    console.log('=== Данные о погоде ===');
    console.log(message);
    console.log('=======================');
}

// Обработка отправки формы
function handleFormSubmit() {
    try {
        // Получаем дату
        const date = $('#date').val();
        if (!date) {
            showMessage('Пожалуйста, введите дату.', true);
            return;
        }

        // Получаем выбранные погодные условия
        const selectedWeather = $('input[name="weather"]:checked')
            .map(function() { return $(this).val(); })
            .get()
            .join(', ');

        // Формируем результат
        const resultText = `Дата: ${date}\nПогода: ${selectedWeather || 'Не выбрано'}`;

        // Выводим результат в textarea и консоль
        showMessage(resultText);
    } catch (e) {
        console.error('Error in handleFormSubmit:', e);
        showMessage('Ошибка при обработке формы: ' + e.message, true);
    }
}

// Инициализация при загрузке страницы
$(document).ready(function() {
    // Устанавливаем текущую дату по умолчанию
    const today = new Date().toISOString().split('T')[0];
    $('#date').val(today);

    // Обработка отправки формы
    $('#weatherForm').on('submit', function(e) {
        e.preventDefault();
        handleFormSubmit();
    });

    // Поддержка клавиши Enter для активации формы
    $(document).on('keypress', function(e) {
        if (e.which === 13) { // Код клавиши Enter
            const focused = $(':focus');
            if (focused.is('button')) {
                focused.click(); // Активируем кнопку в фокусе
            } else if (focused.is('input')) {
                $('#weatherForm').submit(); // Отправляем форму, если фокус на input
            } else {
                $('button').click(); // Активируем кнопку по умолчанию
            }
        }
    });
});