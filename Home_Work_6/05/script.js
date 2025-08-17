// Ждем полной загрузки DOM перед выполнением скрипта
document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const nameInput = document.getElementById('nameInput'); // Поле ввода названия продукта
    const wholeInput = document.getElementById('wholeInput'); // Поле ввода целой части цены
    const centsInput = document.getElementById('centsInput'); // Поле ввода копеек
    const discountInput = document.getElementById('discountInput'); // Поле ввода суммы уменьшения
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const reducePriceButton = document.getElementById('reducePriceButton'); // Кнопка уменьшения цены
    const getNameButton = document.getElementById('getNameButton'); // Кнопка для названия
    const getPriceButton = document.getElementById('getPriceButton'); // Кнопка для цены
    const result = document.getElementById('result'); // Элемент для результата

    // Определяем класс Money для работы с деньгами
    class Money {
        // Конструктор класса с параметрами для целой части и копеек
        constructor(whole, cents) {
            this._whole = whole; // Приватное поле для целой части
            this._cents = cents; // Приватное поле для копеек
        }

        // Метод для установки значений целой части и копеек
        setValues(whole, cents) {
            this._whole = whole; // Устанавливаем целую часть
            this._cents = cents; // Устанавливаем копейки
        }

        // Метод для вывода суммы в формате "коп"
        getAmount() {
            // Форматируем копейки для отображения двух цифр (например, 5 -> 05)
            return `${this._whole}.${this._cents.toString().padStart(2, '0')} руб`;
        }

        // Метод для уменьшения суммы на заданное значение (в гривнах)
        reduce(amount) {
            // Преобразуем сумму в копейки для точных вычислений
            const totalCents = this._whole * 100 + this._cents;
            const reduceCents = Math.floor(amount * 100); // Сумма уменьшения в копейках
            const newTotalCents = Math.max(0, totalCents - reduceCents); // Не допускаем отрицательной суммы
            this._whole = Math.floor(newTotalCents / 100); // Новая целая часть
            this._cents = newTotalCents % 100; // Новые копейки
        }

        // Геттер для получения целой части
        getWhole() {
            return this._whole;
        }

        // Геттер для получения копеек
        getCents() {
            return this._cents;
        }
    }

    // Определяем класс Product для работы с продуктом
    class Product {
        // Конструктор класса с параметрами для названия и цены (объект Money)
        constructor(name, price) {
            this._name = name; // Приватное поле для названия продукта
            this._price = price; // Приватное поле для цены (объект Money)
        }

        // Метод для установки данных продукта
        setData(name, whole, cents) {
            this._name = name; // Устанавливаем название
            this._price.setValues(whole, cents); // Устанавливаем цену через метод Money
        }

        // Метод для вывода данных продукта
        getData() {
            // Возвращаем строку с данными продукта
            return `Название: ${this._name}\nЦена: ${this._price.getAmount()}`;
        }

        // Метод для уменьшения цены на заданное значение
        reducePrice(amount) {
            this._price.reduce(amount); // Вызываем метод reduce класса Money
        }

        // Геттер для получения названия продукта
        getName() {
            return this._name;
        }

        // Геттер для получения цены
        getPrice() {
            return this._price.getAmount();
        }
    }

    // Переменная для хранения объекта Product
    let product = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const name = nameInput.value.trim(); // Название продукта
        const whole = parseInt(wholeInput.value); // Целая часть цены
        const cents = parseInt(centsInput.value); // Копейки
        const discount = parseFloat(discountInput.value); // Сумма уменьшения

        // Проверяем валидность ввода
        if (!name || isNaN(whole) || isNaN(cents) || cents < 0 || cents > 99) {
            result.textContent = 'Пожалуйста, заполните все поля корректно (копейки от 0 до 99).';
            return;
        }

        // Создаем объект Money
        const price = new Money(whole, cents);
        // Создаем объект Product
        product = new Product(name, price);
        // Выводим данные продукта
        result.textContent = `Данные продукта:\n${product.getData()}`;
    });

    // Обработчик для кнопки "Уменьшить цену"
    reducePriceButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!product) {
            result.textContent = 'Сначала создайте продукт.';
            return;
        }
        // Получаем сумму уменьшения
        const discount = parseFloat(discountInput.value);
        // Проверяем валидность суммы уменьшения
        if (isNaN(discount) || discount < 0) {
            result.textContent = 'Пожалуйста, введите корректную сумму уменьшения (положительное число).';
            return;
        }
        // Уменьшаем цену
        product.reducePrice(discount);
        // Выводим обновленные данные продукта
        result.textContent = `Данные продукта после уменьшения цены:\n${product.getData()}`;
    });

    // Обработчик для кнопки "Получить название"
    getNameButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!product) {
            result.textContent = 'Сначала создайте продукт.';
            return;
        }
        // Выводим название продукта
        result.textContent = `Название продукта: ${product.getName()}`;
    });

    // Обработчик для кнопки "Получить цену"
    getPriceButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!product) {
            result.textContent = 'Сначала создайте продукт.';
            return;
        }
        // Выводим цену продукта
        result.textContent = `Цена продукта: ${product.getPrice()}`;
    });
});