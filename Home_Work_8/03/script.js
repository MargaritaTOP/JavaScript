// Обработчик события, срабатывающий после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Получаем кнопку и элемент для отображения результата
    const button = document.getElementById('showHistoryCount');
    const historyCountElement = document.getElementById('historyCount').querySelector('span');

    // Добавляем обработчик события для кнопки
    button.addEventListener('click', () => {
        // Получаем количество записей в истории браузера через history.length
        // Обновляем текст в элементе с количеством записей
        historyCountElement.textContent = history.length;
    });
});