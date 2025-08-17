// Ждем полной загрузки DOM перед выполнением скрипта
document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const nameInput = document.getElementById('nameInput'); // Поле ввода названия
    const yearInput = document.getElementById('yearInput'); // Поле ввода года
    const descriptionInput = document.getElementById('descriptionInput'); // Поле ввода описания
    const phoneInput = document.getElementById('phoneInput'); // Поле ввода телефона
    const emailInput = document.getElementById('emailInput'); // Поле ввода e-mail
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const getNameButton = document.getElementById('getNameButton'); // Кнопка для названия
    const getYearButton = document.getElementById('getYearButton'); // Кнопка для года
    const getDescriptionButton = document.getElementById('getDescriptionButton'); // Кнопка для описания
    const getPhoneButton = document.getElementById('getPhoneButton'); // Кнопка для телефона
    const getEmailButton = document.getElementById('getEmailButton'); // Кнопка для e-mail
    const result = document.getElementById('result'); // Элемент для результата

    // Определяем класс Magazine
    class Magazine {
        // Конструктор класса с параметрами для полей
        constructor(name, year, description, phone, email) {
            this._name = name; // Приватное поле для названия журнала
            this._year = year; // Приватное поле для года основания
            this._description = description; // Приватное поле для описания
            this._phone = phone; // Приватное поле для телефона
            this._email = email; // Приватное поле для e-mail
        }

        // Метод для ввода данных (установки значений полей)
        setData(name, year, description, phone, email) {
            this._name = name; // Устанавливаем название
            this._year = year; // Устанавливаем год
            this._description = description; // Устанавливаем описание
            this._phone = phone; // Устанавливаем телефон
            this._email = email; // Устанавливаем e-mail
        }

        // Метод для вывода всех данных
        getData() {
            // Возвращаем строку с данными журнала
            return `Название: ${this._name}\nГод основания: ${this._year}\nОписание: ${this._description}\nКонтактный телефон: ${this._phone}\nКонтактный e-mail: ${this._email}`;
        }

        // Геттер для получения названия журнала
        getName() {
            return this._name;
        }

        // Геттер для получения года основания
        getYear() {
            return this._year;
        }

        // Геттер для получения описания журнала
        getDescription() {
            return this._description;
        }

        // Геттер для получения контактного телефона
        getPhone() {
            return this._phone;
        }

        // Геттер для получения контактного e-mail
        getEmail() {
            return this._email;
        }
    }

    // Переменная для хранения объекта Magazine
    let magazine = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const name = nameInput.value.trim(); // Название журнала
        const year = parseInt(yearInput.value); // Год основания (преобразуем в число)
        const description = descriptionInput.value.trim(); // Описание
        const phone = phoneInput.value.trim(); // Телефон
        const email = emailInput.value.trim(); // E-mail

        // Проверяем, что все поля заполнены и год является числом
        if (!name || isNaN(year) || !description || !phone || !email) {
            result.textContent = 'Пожалуйста, заполните все поля корректно (год должен быть числом).';
            return;
        }

        // Создаем новый объект Magazine
        magazine = new Magazine(name, year, description, phone, email);
        // Выводим все данные объекта
        result.textContent = `Данные журнала:\n${magazine.getData()}`;
    });

    // Обработчик для кнопки "Получить название"
    getNameButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!magazine) {
            result.textContent = 'Сначала создайте журнал.';
            return;
        }
        // Выводим название журнала
        result.textContent = `Название журнала: ${magazine.getName()}`;
    });

    // Обработчик для кнопки "Получить год основания"
    getYearButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!magazine) {
            result.textContent = 'Сначала создайте журнал.';
            return;
        }
        // Выводим год основания
        result.textContent = `Год основания: ${magazine.getYear()}`;
    });

    // Обработчик для кнопки "Получить описание"
    getDescriptionButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!magazine) {
            result.textContent = 'Сначала создайте журнал.';
            return;
        }
        // Выводим описание журнала
        result.textContent = `Описание журнала: ${magazine.getDescription()}`;
    });

    // Обработчик для кнопки "Получить телефон"
    getPhoneButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!magazine) {
            result.textContent = 'Сначала создайте журнал.';
            return;
        }
        // Выводим контактный телефон
        result.textContent = `Контактный телефон: ${magazine.getPhone()}`;
    });

    // Обработчик для кнопки "Получить e-mail"
    getEmailButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!magazine) {
            result.textContent = 'Сначала создайте журнал.';
            return;
        }
        // Выводим контактный e-mail
        result.textContent = `Контактный e-mail: ${magazine.getEmail()}`;
    });
});