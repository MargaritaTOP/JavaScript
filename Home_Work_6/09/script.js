document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const cityNameInput = document.getElementById('cityNameInput'); // Поле ввода названия города
    const countryInput = document.getElementById('countryInput'); // Поле ввода названия страны
    const populationInput = document.getElementById('populationInput'); // Поле ввода количества жителей
    const phoneCodeInput = document.getElementById('phoneCodeInput'); // Поле ввода телефонного кода
    const districtsInput = document.getElementById('districtsInput'); // Поле ввода названий районов
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const getCityNameButton = document.getElementById('getCityNameButton'); // Кнопка для названия города
    const getCountryButton = document.getElementById('getCountryButton'); // Кнопка для страны
    const getPopulationButton = document.getElementById('getPopulationButton'); // Кнопка для населения
    const getPhoneCodeButton = document.getElementById('getPhoneCodeButton'); // Кнопка для телефонного кода
    const getDistrictsButton = document.getElementById('getDistrictsButton'); // Кнопка для районов
    const result = document.getElementById('result'); // Элемент для результата

    // Определяем класс City
    class City {
        // Конструктор класса с параметрами для полей
        constructor(cityName, country, population, phoneCode, districts) {
            this._cityName = cityName; // Приватное поле для названия города
            this._country = country; // Приватное поле для названия страны
            this._population = population; // Приватное поле для количества жителей
            this._phoneCode = phoneCode; // Приватное поле для телефонного кода
            this._districts = districts; // Приватное поле для названий районов (массив)
        }

        // Метод для ввода данных (установки значений полей)
        setData(cityName, country, population, phoneCode, districts) {
            this._cityName = cityName; // Устанавливаем название города
            this._country = country; // Устанавливаем страну
            this._population = population; // Устанавливаем количество жителей
            this._phoneCode = phoneCode; // Устанавливаем телефонный код
            this._districts = districts; // Устанавливаем районы
        }

        // Метод для вывода всех данных
        getData() {
            // Возвращаем строку с данными города
            return `Название города: ${this._cityName}\nСтрана: ${this._country}\nНаселение: ${this._population}\nТелефонный код: ${this._phoneCode}\nРайоны: ${this._districts.join(', ')}`;
        }

        // Геттер для получения названия города
        getCityName() {
            return this._cityName;
        }

        // Геттер для получения названия страны
        getCountry() {
            return this._country;
        }

        // Геттер для получения количества жителей
        getPopulation() {
            return this._population;
        }

        // Геттер для получения телефонного кода
        getPhoneCode() {
            return this._phoneCode;
        }

        // Геттер для получения названий районов
        getDistricts() {
            return this._districts.join(', ');
        }
    }

    // Переменная для хранения объекта City
    let city = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const cityName = cityNameInput.value.trim(); // Название города
        const country = countryInput.value.trim(); // Страна
        const population = parseInt(populationInput.value); // Количество жителей
        const phoneCode = phoneCodeInput.value.trim(); // Телефонный код
        const districts = districtsInput.value.trim().split(',').map(d => d.trim()).filter(d => d); // Районы (массив)

        // Проверяем, что все поля заполнены и население является числом
        if (!cityName || !country || isNaN(population) || population < 0 || !phoneCode || districts.length === 0) {
            result.textContent = 'Пожалуйста, заполните все поля корректно (население должно быть неотрицательным числом, районы через запятую).';
            return;
        }

        // Создаем новый объект City
        city = new City(cityName, country, population, phoneCode, districts);
        // Выводим все данные объекта
        result.textContent = `Данные города:\n${city.getData()}`;
    });

    // Обработчик для кнопки "Получить название города"
    getCityNameButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!city) {
            result.textContent = 'Сначала создайте город.';
            return;
        }
        // Выводим название города
        result.textContent = `Название города: ${city.getCityName()}`;
    });

    // Обработчик для кнопки "Получить страну"
    getCountryButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!city) {
            result.textContent = 'Сначала создайте город.';
            return;
        }
        // Выводим название страны
        result.textContent = `Страна: ${city.getCountry()}`;
    });

    // Обработчик для кнопки "Получить население"
    getPopulationButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!city) {
            result.textContent = 'Сначала создайте город.';
            return;
        }
        // Выводим количество жителей
        result.textContent = `Население: ${city.getPopulation()}`;
    });

    // Обработчик для кнопки "Получить телефонный код"
    getPhoneCodeButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!city) {
            result.textContent = 'Сначала создайте город.';
            return;
        }
        // Выводим телефонный код
        result.textContent = `Телефонный код: ${city.getPhoneCode()}`;
    });

    // Обработчик для кнопки "Получить районы"
    getDistrictsButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!city) {
            result.textContent = 'Сначала создайте город.';
            return;
        }
        // Выводим названия районов
        result.textContent = `Районы: ${city.getDistricts()}`;
    });
});