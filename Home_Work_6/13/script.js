document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const cardNumberInput = document.getElementById('cardNumberInput'); // Поле ввода номера карты
    const ownerInput = document.getElementById('ownerInput'); // Поле ввода ФИО
    const cvcInput = document.getElementById('cvcInput'); // Поле ввода CVC
    const expiryMonthInput = document.getElementById('expiryMonthInput'); // Поле ввода месяца
    const expiryYearInput = document.getElementById('expiryYearInput'); // Поле ввода года
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const setPartialButton = document.getElementById('setPartialButton'); // Кнопка частичного ввода
    const getCardNumberButton = document.getElementById('getCardNumberButton'); // Кнопка для номера
    const getOwnerButton = document.getElementById('getOwnerButton'); // Кнопка для ФИО
    const getCvcButton = document.getElementById('getCvcButton'); // Кнопка для CVC
    const getExpiryDateButton = document.getElementById('getExpiryDateButton'); // Кнопка для даты
    const result = document.getElementById('result'); // Элемент для результата

    // Определяем класс CreditCard
    class CreditCard {
        // Конструктор класса с параметрами для всех полей
        constructor(cardNumber, owner, cvc, expiryMonth, expiryYear) {
            this._cardNumber = cardNumber || "Неизвестный номер"; // Номер карты
            this._owner = owner || "Неизвестный владелец"; // ФИО владельца
            this._cvc = cvc || "000"; // CVC-код
            this._expiryMonth = expiryMonth || 0; // Месяц окончания
            this._expiryYear = expiryYear || 0; // Год окончания
        }

        // Метод для ввода данных (имитация перегрузки)
        setData(cardNumber, owner, cvc = this._cvc, expiryMonth = this._expiryMonth, expiryYear = this._expiryYear) {
            if (cardNumber && owner && cvc && expiryMonth && expiryYear) {
                // Полный ввод всех полей
                this._cardNumber = cardNumber;
                this._owner = owner;
                this._cvc = cvc;
                this._expiryMonth = expiryMonth;
                this._expiryYear = expiryYear;
            } else if (cardNumber && owner) {
                // Частичный ввод: только номер карты и ФИО
                this._cardNumber = cardNumber;
                this._owner = owner;
            } else {
                throw new Error("Необходимо указать как минимум номер карты и ФИО владельца");
            }
        }

        // Метод для вывода всех данных
        getData() {
            // Возвращаем строку с данными карты
            return `Номер карты: ${this._cardNumber}\nФИО владельца: ${this._owner}\nCVC: ${this._cvc}\nДата окончания: ${this._expiryMonth}/${this._expiryYear}`;
        }

        // Геттер для получения номера карты
        getCardNumber() {
            return this._cardNumber;
        }

        // Геттер для получения ФИО владельца
        getOwner() {
            return this._owner;
        }

        // Геттер для получения CVC-кода
        getCvc() {
            return this._cvc;
        }

        // Геттер для получения даты окончания
        getExpiryDate() {
            return `${this._expiryMonth}/${this._expiryYear}`;
        }
    }

    // Переменная для хранения объекта CreditCard
    let card = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const cardNumber = cardNumberInput.value.trim(); // Номер карты
        const owner = ownerInput.value.trim(); // ФИО владельца
        const cvc = cvcInput.value.trim(); // CVC-код
        const expiryMonth = parseInt(expiryMonthInput.value); // Месяц окончания
        const expiryYear = parseInt(expiryYearInput.value); // Год окончания

        // Проверяем, что все поля заполнены и корректны
        if (!cardNumber || cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
            result.textContent = 'Введите корректный номер карты (16 цифр).';
            return;
        }
        if (!owner) {
            result.textContent = 'Введите ФИО владельца.';
            return;
        }
        if (!cvc || cvc.length !== 3 || !/^\d+$/.test(cvc)) {
            result.textContent = 'Введите корректный CVC-код (3 цифры).';
            return;
        }
        if (isNaN(expiryMonth) || expiryMonth < 1 || expiryMonth > 12) {
            result.textContent = 'Введите корректный месяц окончания (1-12).';
            return;
        }
        if (isNaN(expiryYear) || expiryYear < 2025) {
            result.textContent = 'Введите корректный год окончания (≥ 2025).';
            return;
        }

        try {
            // Создаем новый объект CreditCard
            card = new CreditCard(cardNumber, owner, cvc, expiryMonth, expiryYear);
            // Выводим все данные объекта
            result.textContent = `Данные кредитной карты:\n${card.getData()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Установить номер и ФИО"
    setPartialButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const cardNumber = cardNumberInput.value.trim(); // Номер карты
        const owner = ownerInput.value.trim(); // ФИО владельца

        // Проверяем, что обязательные поля заполнены
        if (!cardNumber || cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
            result.textContent = 'Введите корректный номер карты (16 цифр).';
            return;
        }
        if (!owner) {
            result.textContent = 'Введите ФИО владельца.';
            return;
        }

        try {
            if (!card) {
                // Если объект ещё не создан, создаём с значениями по умолчанию
                card = new CreditCard(cardNumber, owner, "000", 0, 0);
            } else {
                // Используем setData для частичного ввода
                card.setData(cardNumber, owner);
            }
            // Выводим обновленные данные
            result.textContent = `Данные кредитной карты обновлены:\n${card.getData()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Получить номер карты"
    getCardNumberButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!card) {
            result.textContent = 'Сначала создайте кредитную карту.';
            return;
        }
        // Выводим номер карты
        result.textContent = `Номер карты: ${card.getCardNumber()}`;
    });

    // Обработчик для кнопки "Получить ФИО"
    getOwnerButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!card) {
            result.textContent = 'Сначала создайте кредитную карту.';
            return;
        }
        // Выводим ФИО владельца
        result.textContent = `ФИО владельца: ${card.getOwner()}`;
    });

    // Обработчик для кнопки "Получить CVC"
    getCvcButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!card) {
            result.textContent = 'Сначала создайте кредитную карту.';
            return;
        }
        // Выводим CVC-код
        result.textContent = `CVC: ${card.getCvc()}`;
    });

    // Обработчик для кнопки "Получить дату окончания"
    getExpiryDateButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!card) {
            result.textContent = 'Сначала создайте кредитную карту.';
            return;
        }
        // Выводим дату окончания
        result.textContent = `Дата окончания: ${card.getExpiryDate()}`;
    });
});