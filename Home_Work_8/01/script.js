// Объявляем переменную для хранения ссылки на новое окно
let newWindow = null;

// Добавляем обработчик события для кнопки "Открыть окно"
document.getElementById('openWindow').addEventListener('click', () => {
    // Открываем новое окно с указанным URL и размерами 640x480
    newWindow = window.open('https://itstep.org', '_blank', 'width=640,height=480');
});

// Добавляем обработчик события для кнопки "Закрыть окно"
document.getElementById('closeWindow').addEventListener('click', () => {
    // Проверяем, открыто ли окно и не закрыто ли оно
    if (newWindow && !newWindow.closed) {
        // Закрываем окно
        newWindow.close();
    }
});