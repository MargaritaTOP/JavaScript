document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const passportTypeInput = document.getElementById('passportTypeInput'); // Выпадающий список для типа паспорта
    const nameInput = document.getElementById('nameInput'); // Поле ввода ФИО
    const passportNumberInput = document.getElementById('passportNumberInput'); // Поле ввода номера паспорта
    const countryInput = document.getElementById('countryInput'); // Поле ввода страны
    const foreignPassportNumberInput = document.getElementById('foreignPassportNumberInput'); // Поле для номера загранпаспорта
    const visasInput = document.getElementById('visasInput'); // Поле для виз
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const setPartialButton = document.getElementById('setPartialButton'); // Кнопка частичного ввода
    const getInfoButton = document.getElementById('getInfoButton'); // Кнопка для вывода информации
    const result = document.getElementById('result'); // Элемент для результата

    // Базовый класс Passport (абстрактный)
    class Passport {
        // Конструктор класса
        constructor(name, passportNumber, country) {
            if (this.constructor === Passport) {
                throw new Error("Нельзя создать экземпляр абстрактного класса Passport");
            }
            this._name = name || "Неизвестное имя"; // ФИО
            this._passportNumber = passportNumber || "Неизвестный номер"; // Номер паспорта
            this._country = country || "Неизвестная страна"; // Страна
        }

        // Метод для ввода данных (имитация перегрузки)
        setData(name, passportNumber, country = this._country) {
            if (name && passportNumber) {
                this._name = name;
                this._passportNumber = passportNumber;
                if (country) {
                    this._country = country;
                }
            } else {
                throw new Error("Необходимо указать как минимум ФИО и номер паспорта");
            }
        }

        // Абстрактный метод getInfo
        getInfo() {
            throw new Error("Метод getInfo должен быть переопределен в производном классе");
        }
    }

    // Производный класс ForeignPassport
    class ForeignPassport extends Passport {
        constructor(name, passportNumber, country, foreignPassportNumber, visas) {
            super(name, passportNumber, country);
            this._foreignPassportNumber = foreignPassportNumber || "Неизвестный номер загранпаспорта"; // Номер загранпаспорта
            this._visas = visas || []; // Список виз (массив)
        }

        // Перегрузка setData
        setData(name, passportNumber, country = this._country, foreignPassportNumber = this._foreignPassportNumber, visas = this._visas) {
            super.setData(name, passportNumber, country);
            if (foreignPassportNumber) {
                this._foreignPassportNumber = foreignPassportNumber;
            }
            if (visas) {
                this._visas = visas;
            }
        }

        // Переопределение метода getInfo
        getInfo() {
            return `Загранпаспорт\nФИО: ${this._name}\nНомер паспорта: ${this._passportNumber}\nСтрана: ${this._country}\nНомер загранпаспорта: ${this._foreignPassportNumber}\nВизы: ${this._visas.length > 0 ? this._visas.join(", ") : "Отсутствуют"}`;
        }
    }

    // Производный класс Passport (внутренний паспорт)
    class InternalPassport extends Passport {
        constructor(name, passportNumber, country) {
            super(name, passportNumber, country);
        }

        // Перегрузка setData
        setData(name, passportNumber, country = this._country) {
            super.setData(name, passportNumber, country);
        }

        // Переопределение метода getInfo
        getInfo() {
            return `Внутренний паспорт\nФИО: ${this._name}\nНомер паспорта: ${this._passportNumber}\nСтрана: ${this._country}`;
        }
    }

    // Переменная для хранения объекта
    let passport = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const passportType = passportTypeInput.value; // Тип паспорта
        const name = nameInput.value.trim(); // ФИО
        const passportNumber = passportNumberInput.value.trim(); // Номер паспорта
        const country = countryInput.value.trim(); // Страна
        const foreignPassportNumber = foreignPassportNumberInput.value.trim(); // Номер загранпаспорта
        const visas = visasInput.value.trim().split(',').map(v => v.trim()).filter(v => v); // Визы (массив)

        // Проверяем, что обязательные поля заполнены
        if (!name) {
            result.textContent = 'Введите ФИО.';
            return;
        }
        if (!passportNumber || !/^\d{4}\s?\d{6}$/.test(passportNumber.replace(/\s/g, ''))) {
            result.textContent = 'Введите корректный номер паспорта (10 цифр, например, 1234 567890).';
            return;
        }
        if (!country) {
            result.textContent = 'Введите страну.';
            return;
        }
        if (passportType === 'foreignPassport' && !foreignPassportNumber) {
            result.textContent = 'Введите номер загранпаспорта.';
            return;
        }

        try {
            // Создаем объект соответствующего класса
            switch (passportType) {
                case 'passport':
                    passport = new InternalPassport(name, passportNumber, country);
                    break;
                case 'foreignPassport':
                    passport = new ForeignPassport(name, passportNumber, country, foreignPassportNumber, visas);
                    break;
                default:
                    result.textContent = 'Неизвестный тип паспорта.';
                    return;
            }

            // Выводим данные
            result.textContent = `Паспорт создан:\n${passport.getInfo()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Установить ФИО и номер"
    setPartialButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const name = nameInput.value.trim(); // ФИО
        const passportNumber = passportNumberInput.value.trim(); // Номер паспорта

        // Проверяем, что обязательные поля заполнены
        if (!name) {
            result.textContent = 'Введите ФИО.';
            return;
        }
        if (!passportNumber || !/^\d{4}\s?\d{6}$/.test(passportNumber.replace(/\s/g, ''))) {
            result.textContent = 'Введите корректный номер паспорта (10 цифр, например, 1234 567890).';
            return;
        }

        try {
            if (!passport) {
                // Если объект ещё не создан, создаём с значениями по умолчанию
                const passportType = passportTypeInput.value;
                switch (passportType) {
                    case 'passport':
                        passport = new InternalPassport(name, passportNumber, "Неизвестная страна");
                        break;
                    case 'foreignPassport':
                        passport = new ForeignPassport(name, passportNumber, "Неизвестная страна", "Неизвестный номер", []);
                        break;
                    default:
                        result.textContent = 'Неизвестный тип паспорта.';
                        return;
                }
            } else {
                // Используем setData для частичного ввода
                passport.setData(name, passportNumber);
            }
            // Выводим обновленные данные
            result.textContent = `Данные обновлены:\n${passport.getInfo()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Показать информацию"
    getInfoButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!passport) {
            result.textContent = 'Сначала создайте паспорт.';
            return;
        }
        try {
            // Выводим информацию
            result.textContent = passport.getInfo();
        } catch (error) {
            result.textContent = error.message;
        }
    });
});