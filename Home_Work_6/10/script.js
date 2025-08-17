document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const fullNameInput = document.getElementById('fullNameInput'); // Поле ввода ФИО
    const birthDateInput = document.getElementById('birthDateInput'); // Поле ввода даты рождения
    const phoneInput = document.getElementById('phoneInput'); // Поле ввода телефона
    const emailInput = document.getElementById('emailInput'); // Поле ввода email
    const positionInput = document.getElementById('positionInput'); // Поле ввода должности
    const dutiesInput = document.getElementById('dutiesInput'); // Поле ввода обязанностей
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const getFullNameButton = document.getElementById('getFullNameButton'); // Кнопка для ФИО
    const getBirthDateButton = document.getElementById('getBirthDateButton'); // Кнопка для даты рождения
    const getPhoneButton = document.getElementById('getPhoneButton'); // Кнопка для телефона
    const getEmailButton = document.getElementById('getEmailButton'); // Кнопка для email
    const getPositionButton = document.getElementById('getPositionButton'); // Кнопка для должности
    const getDutiesButton = document.getElementById('getDutiesButton'); // Кнопка для обязанностей
    const result = document.getElementById('result'); // Элемент для результата

    // Определяем класс Employee
    class Employee {
        // Конструктор класса с параметрами для полей
        constructor(fullName, birthDate, phone, email, position, duties) {
            this._fullName = fullName; // Приватное поле для ФИО
            this._birthDate = birthDate; // Приватное поле для даты рождения
            this._phone = phone; // Приватное поле для телефона
            this._email = email; // Приватное поле для email
            this._position = position; // Приватное поле для должности
            this._duties = duties; // Приватное поле для обязанностей
        }

        // Метод для ввода данных (установки значений полей)
        setData(fullName, birthDate, phone, email, position, duties) {
            this._fullName = fullName; // Устанавливаем ФИО
            this._birthDate = birthDate; // Устанавливаем дату рождения
            this._phone = phone; // Устанавливаем телефон
            this._email = email; // Устанавливаем email
            this._position = position; // Устанавливаем должность
            this._duties = duties; // Устанавливаем обязанности
        }

        // Метод для вывода всех данных
        getData() {
            // Возвращаем строку с данными сотрудника
            return `ФИО: ${this._fullName}\nДата рождения: ${this._birthDate}\nКонтактный телефон: ${this._phone}\nРабочий email: ${this._email}\nДолжность: ${this._position}\nСлужебные обязанности: ${this._duties}`;
        }

        // Геттер для получения ФИО
        getFullName() {
            return this._fullName;
        }

        // Геттер для получения даты рождения
        getBirthDate() {
            return this._birthDate;
        }

        // Геттер для получения контактного телефона
        getPhone() {
            return this._phone;
        }

        // Геттер для получения рабочего email
        getEmail() {
            return this._email;
        }

        // Геттер для получения должности
        getPosition() {
            return this._position;
        }

        // Геттер для получения описания обязанностей
        getDuties() {
            return this._duties;
        }
    }

    // Переменная для хранения объекта Employee
    let employee = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const fullName = fullNameInput.value.trim(); // ФИО
        const birthDate = birthDateInput.value.trim(); // Дата рождения
        const phone = phoneInput.value.trim(); // Телефон
        const email = emailInput.value.trim(); // Email
        const position = positionInput.value.trim(); // Должность
        const duties = dutiesInput.value.trim(); // Обязанности

        // Проверяем, что все поля заполнены
        if (!fullName || !birthDate || !phone || !email || !position || !duties) {
            result.textContent = 'Пожалуйста, заполните все поля.';
            return;
        }

        // Создаем новый объект Employee
        employee = new Employee(fullName, birthDate, phone, email, position, duties);
        // Выводим все данные объекта
        result.textContent = `Данные сотрудника:\n${employee.getData()}`;
    });

    // Обработчик для кнопки "Получить ФИО"
    getFullNameButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!employee) {
            result.textContent = 'Сначала создайте сотрудника.';
            return;
        }
        // Выводим ФИО
        result.textContent = `ФИО: ${employee.getFullName()}`;
    });

    // Обработчик для кнопки "Получить дату рождения"
    getBirthDateButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!employee) {
            result.textContent = 'Сначала создайте сотрудника.';
            return;
        }
        // Выводим дату рождения
        result.textContent = `Дата рождения: ${employee.getBirthDate()}`;
    });

    // Обработчик для кнопки "Получить телефон"
    getPhoneButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!employee) {
            result.textContent = 'Сначала создайте сотрудника.';
            return;
        }
        // Выводим контактный телефон
        result.textContent = `Контактный телефон: ${employee.getPhone()}`;
    });

    // Обработчик для кнопки "Получить email"
    getEmailButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!employee) {
            result.textContent = 'Сначала создайте сотрудника.';
            return;
        }
        // Выводим рабочий email
        result.textContent = `Рабочий email: ${employee.getEmail()}`;
    });

    // Обработчик для кнопки "Получить должность"
    getPositionButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!employee) {
            result.textContent = 'Сначала создайте сотрудника.';
            return;
        }
        // Выводим должность
        result.textContent = `Должность: ${employee.getPosition()}`;
    });

    // Обработчик для кнопки "Получить обязанности"
    getDutiesButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!employee) {
            result.textContent = 'Сначала создайте сотрудника.';
            return;
        }
        // Выводим описание обязанностей
        result.textContent = `Служебные обязанности: ${employee.getDuties()}`;
    });
});