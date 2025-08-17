document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const planeNameInput = document.getElementById('planeNameInput'); // Поле ввода названия самолёта
    const manufacturerInput = document.getElementById('manufacturerInput'); // Поле ввода производителя
    const yearInput = document.getElementById('yearInput'); // Поле ввода года выпуска
    const typeInput = document.getElementById('typeInput'); // Поле ввода типа самолёта
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const setPartialButton = document.getElementById('setPartialButton'); // Кнопка частичного ввода
    const getPlaneNameButton = document.getElementById('getPlaneNameButton'); // Кнопка для названия
    const getManufacturerButton = document.getElementById('getManufacturerButton'); // Кнопка для производителя
    const getYearButton = document.getElementById('getYearButton'); // Кнопка для года выпуска
    const getTypeButton = document.getElementById('getTypeButton'); // Кнопка для типа
    const result = document.getElementById('result'); // Элемент для результата

    // Определяем класс Plane
    class Plane {
        // Конструктор класса с параметрами для всех полей
        constructor(planeName, manufacturer, year, type) {
            this._planeName = planeName || "Неизвестный самолёт"; // Название самолёта
            this._manufacturer = manufacturer || "Неизвестный производитель"; // Производитель
            this._year = year || 0; // Год выпуска
            this._type = type || "Неизвестный тип"; // Тип самолёта
        }

        // Метод для ввода данных (имитация перегрузки)
        setData(planeName, manufacturer, year = this._year, type = this._type) {
            if (planeName && manufacturer && year !== undefined && type !== undefined) {
                // Полный ввод всех полей
                this._planeName = planeName;
                this._manufacturer = manufacturer;
                this._year = year;
                this._type = type;
            } else if (planeName && manufacturer) {
                // Частичный ввод: только название и производитель
                this._planeName = planeName;
                this._manufacturer = manufacturer;
            } else {
                throw new Error("Необходимо указать как минимум название и производителя");
            }
        }

        // Метод для вывода всех данных
        getData() {
            // Возвращаем строку с данными самолёта
            return `Название самолёта: ${this._planeName}\nПроизводитель: ${this._manufacturer}\nГод выпуска: ${this._year}\nТип самолёта: ${this._type}`;
        }

        // Геттер для получения названия самолёта
        getPlaneName() {
            return this._planeName;
        }

        // Геттер для получения производителя
        getManufacturer() {
            return this._manufacturer;
        }

        // Геттер для получения года выпуска
        getYear() {
            return this._year;
        }

        // Геттер для получения типа самолёта
        getType() {
            return this._type;
        }
    }

    // Переменная для хранения объекта Plane
    let plane = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const planeName = planeNameInput.value.trim(); // Название самолёта
        const manufacturer = manufacturerInput.value.trim(); // Производитель
        const year = parseInt(yearInput.value); // Год выпуска
        const type = typeInput.value.trim(); // Тип самолёта

        // Проверяем, что обязательные поля заполнены и год корректен
        if (!planeName || !manufacturer || isNaN(year) || year < 1900 || !type) {
            result.textContent = 'Пожалуйста, заполните все поля корректно (год выпуска ≥ 1900).';
            return;
        }

        // Создаем новый объект Plane
        plane = new Plane(planeName, manufacturer, year, type);
        // Выводим все данные объекта
        result.textContent = `Данные самолёта:\n${plane.getData()}`;
    });

    // Обработчик для кнопки "Установить название и производителя"
    setPartialButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const planeName = planeNameInput.value.trim(); // Название самолёта
        const manufacturer = manufacturerInput.value.trim(); // Производитель

        // Проверяем, что обязательные поля заполнены
        if (!planeName || !manufacturer) {
            result.textContent = 'Пожалуйста, заполните поля названия и производителя.';
            return;
        }

        try {
            if (!plane) {
                // Если объект ещё не создан, создаём с значениями по умолчанию для года и типа
                plane = new Plane(planeName, manufacturer, 0, "Неизвестный тип");
            } else {
                // Используем setData для частичного ввода
                plane.setData(planeName, manufacturer);
            }
            // Выводим обновленные данные
            result.textContent = `Данные самолёта обновлены:\n${plane.getData()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Получить название"
    getPlaneNameButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!plane) {
            result.textContent = 'Сначала создайте самолёт.';
            return;
        }
        // Выводим название самолёта
        result.textContent = `Название самолёта: ${plane.getPlaneName()}`;
    });

    // Обработчик для кнопки "Получить производителя"
    getManufacturerButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!plane) {
            result.textContent = 'Сначала создайте самолёт.';
            return;
        }
        // Выводим производителя
        result.textContent = `Производитель: ${plane.getManufacturer()}`;
    });

    // Обработчик для кнопки "Получить год выпуска"
    getYearButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!plane) {
            result.textContent = 'Сначала создайте самолёт.';
            return;
        }
        // Выводим год выпуска
        result.textContent = `Год выпуска: ${plane.getYear()}`;
    });

    // Обработчик для кнопки "Получить тип"
    getTypeButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!plane) {
            result.textContent = 'Сначала создайте самолёт.';
            return;
        }
        // Выводим тип самолёта
        result.textContent = `Тип самолёта: ${plane.getType()}`;
    });
});