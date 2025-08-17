// Ждем полной загрузки DOM перед выполнением скрипта
document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const nameInput = document.getElementById('nameInput'); // Поле ввода названия
    const urlInput = document.getElementById('urlInput'); // Поле ввода пути
    const descriptionInput = document.getElementById('descriptionInput'); // Поле ввода описания
    const ipInput = document.getElementById('ipInput'); // Поле ввода IP-адреса
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const getNameButton = document.getElementById('getNameButton'); // Кнопка для получения названия
    const getUrlButton = document.getElementById('getUrlButton'); // Кнопка для получения пути
    const getDescriptionButton = document.getElementById('getDescriptionButton'); // Кнопка для получения описания
    const getIpButton = document.getElementById('getIpButton'); // Кнопка для получения IP
    const result = document.getElementById('result'); // Элемент для результата

    // Определяем класс Website
    class Website {
        // Конструктор класса с параметрами для полей
        constructor(name, url, description, ip) {
            this._name = name; // Приватное поле для названия сайта
            this._url = url; // Приватное поле для пути к сайту
            this._description = description; // Приватное поле для описания
            this._ip = ip; // Приватное поле для IP-адреса
        }

        // Метод для ввода данных (установки значений полей)
        setData(name, url, description, ip) {
            this._name = name; // Устанавливаем название
            this._url = url; // Устанавливаем путь
            this._description = description; // Устанавливаем описание
            this._ip = ip; // Устанавливаем IP-адрес
        }

        // Метод для вывода всех данных
        getData() {
            // Возвращаем строку с данными сайта
            return `Название: ${this._name}\nПуть: ${this._url}\nОписание: ${this._description}\nIP-адрес: ${this._ip}`;
        }

        // Геттер для получения названия сайта
        getName() {
            return this._name;
        }

        // Геттер для получения пути к сайту
        getUrl() {
            return this._url;
        }

        // Геттер для получения описания сайта
        getDescription() {
            return this._description;
        }

        // Геттер для получения IP-адреса сайта
        getIp() {
            return this._ip;
        }
    }

    // Переменная для хранения объекта Website
    let website = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const name = nameInput.value.trim();
        const url = urlInput.value.trim();
        const description = descriptionInput.value.trim();
        const ip = ipInput.value.trim();

        // Проверяем, что все поля заполнены
        if (!name || !url || !description || !ip) {
            result.textContent = 'Пожалуйста, заполните все поля.';
            return;
        }

        // Создаем новый объект Website
        website = new Website(name, url, description, ip);
        // Выводим все данные объекта
        result.textContent = `Данные веб-сайта:\n${website.getData()}`;
    });

    // Обработчик для кнопки "Получить название"
    getNameButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!website) {
            result.textContent = 'Сначала создайте веб-сайт.';
            return;
        }
        // Выводим название сайта
        result.textContent = `Название веб-сайта: ${website.getName()}`;
    });

    // Обработчик для кнопки "Получить путь"
    getUrlButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!website) {
            result.textContent = 'Сначала создайте веб-сайт.';
            return;
        }
        // Выводим путь к сайту
        result.textContent = `Путь к веб-сайту: ${website.getUrl()}`;
    });

    // Обработчик для кнопки "Получить описание"
    getDescriptionButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!website) {
            result.textContent = 'Сначала создайте веб-сайт.';
            return;
        }
        // Выводим описание сайта
        result.textContent = `Описание веб-сайта: ${website.getDescription()}`;
    });

    // Обработчик для кнопки "Получить IP-адрес"
    getIpButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!website) {
            result.textContent = 'Сначала создайте веб-сайт.';
            return;
        }
        // Выводим IP-адрес сайта
        result.textContent = `IP-адрес веб-сайта: ${website.getIp()}`;
    });
});