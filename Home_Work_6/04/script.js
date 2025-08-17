// Ждем полной загрузки DOM перед выполнением скрипта
document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const numberInput = document.getElementById('numberInput'); // Поле ввода номера паспорта
    const nameInput = document.getElementById('nameInput'); // Поле ввода ФИО
    const issueDateInput = document.getElementById('issueDateInput'); // Поле ввода даты выдачи
    const issuedByInput = document.getElementById('issuedByInput'); // Поле ввода органа выдачи
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const getNumberButton = document.getElementById('getNumberButton'); // Кнопка для номера
    const getNameButton = document.getElementById('getNameButton'); // Кнопка для ФИО
    const getIssueDateButton = document.getElementById('getIssueDateButton'); // Кнопка для даты
    const getIssuedByButton = document.getElementById('getIssuedByButton'); // Кнопка для органа
    const result = document.getElementById('result'); // Элемент для результата

    // Определяем класс ForeignPassport
    class ForeignPassport {
        // Конструктор класса с параметрами для полей
        constructor(number, name, issueDate, issuedBy) {
            this._number = number; // Приватное поле для номера паспорта
            this._name = name; // Приватное поле для ФИО владельца
            this._issueDate = issueDate; // Приватное поле для даты выдачи
            this._issuedBy = issuedBy; // Приватное поле для органа, выдавшего паспорт
        }

        // Метод для ввода данных (установки значений полей)
        setData(number, name, issueDate, issuedBy) {
            this._number = number; // Устанавливаем номер
            this._name = name; // Устанавливаем ФИО
            this._issueDate = issueDate; // Устанавливаем дату выдачи
            this._issuedBy = issuedBy; // Устанавливаем орган выдачи
        }

        // Метод для вывода всех данных
        getData() {
            // Возвращаем строку с данными паспорта
            return `Номер паспорта: ${this._number}\nФИО владельца: ${this._name}\nДата выдачи: ${this._issueDate}\nОрган выдачи: ${this._issuedBy}`;
        }

        // Геттер для получения номера паспорта
        getNumber() {
            return this._number;
        }

        // Геттер для получения ФИО владельца
        getName() {
            return this._name;
        }

        // Геттер для получения даты выдачи
        getIssueDate() {
            return this._issueDate;
        }

        // Геттер для получения органа, выдавшего паспорт
        getIssuedBy() {
            return this._issuedBy;
        }
    }

    // Переменная для хранения объекта ForeignPassport
    let passport = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const number = numberInput.value.trim(); // Номер паспорта
        const name = nameInput.value.trim(); // ФИО
        const issueDate = issueDateInput.value.trim(); // Дата выдачи
        const issuedBy = issuedByInput.value.trim(); // Орган выдачи

        // Проверяем, что все поля заполнены
        if (!number || !name || !issueDate || !issuedBy) {
            result.textContent = 'Пожалуйста, заполните все поля.';
            return;
        }

        // Создаем новый объект ForeignPassport
        passport = new ForeignPassport(number, name, issueDate, issuedBy);
        // Выводим все данные объекта
        result.textContent = `Данные паспорта:\n${passport.getData()}`;
    });

    // Обработчик для кнопки "Получить номер"
    getNumberButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!passport) {
            result.textContent = 'Сначала создайте паспорт.';
            return;
        }
        // Выводим номер паспорта
        result.textContent = `Номер паспорта: ${passport.getNumber()}`;
    });

    // Обработчик для кнопки "Получить ФИО"
    getNameButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!passport) {
            result.textContent = 'Сначала создайте паспорт.';
            return;
        }
        // Выводим ФИО владельца
        result.textContent = `ФИО владельца: ${passport.getName()}`;
    });

    // Обработчик для кнопки "Получить дату выдачи"
    getIssueDateButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!passport) {
            result.textContent = 'Сначала создайте паспорт.';
            return;
        }
        // Выводим дату выдачи
        result.textContent = `Дата выдачи: ${passport.getIssueDate()}`;
    });

    // Обработчик для кнопки "Получить орган выдачи"
    getIssuedByButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!passport) {
            result.textContent = 'Сначала создайте паспорт.';
            return;
        }
        // Выводим орган, выдавший паспорт
        result.textContent = `Орган выдачи: ${passport.getIssuedBy()}`;
    });
});