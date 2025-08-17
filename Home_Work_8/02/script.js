// Обработчик события, срабатывающий после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Получаем список языков браузера через navigator.languages
    const languages = navigator.languages;
    // Получаем предпочтительный язык (первый в списке)
    const preferredLanguage = navigator.language || navigator.userLanguage;

    // Получаем элемент списка для отображения языков
    const languageList = document.getElementById('languageList');

    // Перебираем массив языков и добавляем их в список
    languages.forEach(lang => {
        // Создаём элемент списка
        const li = document.createElement('li');
        // Устанавливаем текст элемента — код языка
        li.textContent = lang;
        // Если текущий язык совпадает с предпочтительным, добавляем класс для выделения
        if (lang === preferredLanguage) {
            li.classList.add('preferred');
        }
        // Добавляем элемент в список
        languageList.appendChild(li);
    });
});