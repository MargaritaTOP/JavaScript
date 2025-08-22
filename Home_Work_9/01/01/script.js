// Обработчик события, срабатывающий после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы <a> внутри списка с id="linkList"
    const links = document.querySelectorAll('#linkList a');

    // Перебираем все ссылки
    links.forEach(link => {
        // Проверяем, начинается ли href ссылки с "http://"
        if (link.href.startsWith('http://')) {
            // Добавляем класс "dashed" для пунктирного подчёркивания
            link.classList.add('dashed');
        }
    });
});