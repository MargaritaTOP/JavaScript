// Ждем полной загрузки DOM перед выполнением скрипта
document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const nameInput = document.getElementById('nameInput'); // Поле ввода названия магазина
    const addressInput = document.getElementById('addressInput'); // Поле ввода адреса
    const profileInput = document.getElementById('profileInput'); // Поле ввода описания профиля
    const phoneInput = document.getElementById('phoneInput'); // Поле ввода телефона
    const emailInput = document.getElementById('emailInput'); // Поле ввода e-mail
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const getNameButton = document.getElementById('getNameButton'); // Кнопка для названия
    const getAddressButton = document.getElementById('getAddressButton'); // Кнопка для адреса
    const getProfileButton = document.getElementById('getProfileButton'); // Кнопка для профиля
    const getPhoneButton = document.getElementById('getPhoneButton'); // Кнопка для телефона
    const getEmailButton = document.getElementById('getEmailButton'); // Кнопка для e-mail
    const result = document.getElementById('result'); // Элемент для результата

    // Определяем класс Store
    class Store {
        // Конструктор класса с параметрами для полей
        constructor(name, address, profile, phone, email) {
            this._name = name; // Приватное поле для названия магазина
            this._address = address; // Приватное поле для адреса
            this._profile = profile; // Приватное поле для описания профиля
            this._phone = phone; // Приватное поле для телефона
            this._email = email; // Приватное поле для e-mail
        }

        // Метод для ввода данных (установки значений полей)
        setData(name, address, profile, phone, email) {
            this._name = name; // Устанавливаем название
            this._address = address; // Устанавливаем адрес
            this._profile = profile; // Устанавливаем описание профиля
            this._phone = phone; // Устанавливаем телефон
            this._email = email; // Устанавливаем e-mail
        }

        // Метод для вывода всех данных
        getData() {
            // Возвращаем строку с данными магазина
            return `Название: ${this._name}\nАдрес: ${this._address}\nОписание профиля: ${this._profile}\nКонтактный телефон: ${this._phone}\nКонтактный e-mail: ${this._email}`;
        }

        // Геттер для получения названия магазина
        getName() {
            return this._name;
        }

        // Геттер для получения адреса магазина
        getAddress() {
            return this._address;
        }

        // Геттер для получения описания профиля магазина
        getProfile() {
            return this._profile;
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

    // Переменная для хранения объекта Store
    let store = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const name = nameInput.value.trim(); // Название магазина
        const address = addressInput.value.trim(); // Адрес
        const profile = profileInput.value.trim(); // Описание профиля
        const phone = phoneInput.value.trim(); // Телефон
        const email = emailInput.value.trim(); // E-mail

        // Проверяем, что все поля заполнены
        if (!name || !address || !profile || !phone || !email) {
            result.textContent = 'Пожалуйста, заполните все поля.';
            return;
        }

        // Создаем новый объект Store
        store = new Store(name, address, profile, phone, email);
        // Выводим все данные объекта
        result.textContent = `Данные магазина:\n${store.getData()}`;
    });

    // Обработчик для кнопки "Получить название"
    getNameButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!store) {
            result.textContent = 'Сначала создайте магазин.';
            return;
        }
        // Выводим название магазина
        result.textContent = `Название магазина: ${store.getName()}`;
    });

    // Обработчик для кнопки "Получить адрес"
    getAddressButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!store) {
            result.textContent = 'Сначала создайте магазин.';
            return;
        }
        // Выводим адрес магазина
        result.textContent = `Адрес магазина: ${store.getAddress()}`;
    });

    // Обработчик для кнопки "Получить описание профиля"
    getProfileButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!store) {
            result.textContent = 'Сначала создайте магазин.';
            return;
        }
        // Выводим описание профиля магазина
        result.textContent = `Описание профиля магазина: ${store.getProfile()}`;
    });

    // Обработчик для кнопки "Получить телефон"
    getPhoneButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!store) {
            result.textContent = 'Сначала создайте магазин.';
            return;
        }
        // Выводим контактный телефон
        result.textContent = `Контактный телефон: ${store.getPhone()}`;
    });

    // Обработчик для кнопки "Получить e-mail"
    getEmailButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!store) {
            result.textContent = 'Сначала создайте магазин.';
            return;
        }
        // Выводим контактный e-mail
        result.textContent = `Контактный e-mail: ${store.getEmail()}`;
    });
});