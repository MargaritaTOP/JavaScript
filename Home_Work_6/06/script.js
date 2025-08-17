document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const deviceTypeInput = document.getElementById('deviceTypeInput'); // Выпадающий список для типа устройства
    const nameInput = document.getElementById('nameInput'); // Поле ввода имени устройства
    const specsInput = document.getElementById('specsInput'); // Поле ввода характеристик
    const createButton = document.getElementById('createButton'); // Кнопка создания устройства
    const showButton = document.getElementById('showButton'); // Кнопка для метода Show
    const descButton = document.getElementById('descButton'); // Кнопка для метода Desc
    const soundButton = document.getElementById('soundButton'); // Кнопка для метода Sound
    const result = document.getElementById('result'); // Элемент для результата

    // Базовый класс Device
    class Device {
        // Конструктор класса с параметрами для имени и характеристик
        constructor(name, specs) {
            this._name = name; // Приватное поле для имени устройства
            this._specs = specs; // Приватное поле для характеристик
        }

        // Метод Show для отображения имени устройства
        show() {
            return `Название устройства: ${this._name}`;
        }

        // Метод Desc для отображения характеристик устройства
        desc() {
            return `Характеристики: ${this._specs}`;
        }

        // Метод Sound (будет переопределен в производных классах)
        sound() {
            return "Устройство издает звук";
        }
    }

    // Производный класс Kettle
    class Kettle extends Device {
        // Конструктор вызывает конструктор базового класса
        constructor(name, specs) {
            super(name, specs);
        }

        // Переопределение метода Sound
        sound() {
            return "Чайник свистит: Фшшш!";
        }
    }

    // Производный класс Microwave
    class Microwave extends Device {
        // Конструктор вызывает конструктор базового класса
        constructor(name, specs) {
            super(name, specs);
        }

        // Переопределение метода Sound
        sound() {
            return "Микроволновка гудит: Бззз!";
        }
    }

    // Производный класс Car
    class Car extends Device {
        // Конструктор вызывает конструктор базового класса
        constructor(name, specs) {
            super(name, specs);
        }

        // Переопределение метода Sound
        sound() {
            return "Автомобиль сигналит: Би-бип!";
        }
    }

    // Производный класс Steamer
    class Steamer extends Device {
        // Конструктор вызывает конструктор базового класса
        constructor(name, specs) {
            super(name, specs);
        }

        // Переопределение метода Sound
        sound() {
            return "Пароход гудит: Ту-ту!";
        }
    }

    // Переменная для хранения объекта устройства
    let device = null;

    // Обработчик для кнопки "Создать устройство"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const deviceType = deviceTypeInput.value; // Тип устройства
        const name = nameInput.value.trim(); // Имя устройства
        const specs = specsInput.value.trim(); // Характеристики

        // Проверяем, что поля имени и характеристик заполнены
        if (!name || !specs) {
            result.textContent = 'Пожалуйста, заполните все поля.';
            return;
        }

        // Создаем объект соответствующего класса в зависимости от типа
        switch (deviceType) {
            case 'kettle':
                device = new Kettle(name, specs);
                break;
            case 'microwave':
                device = new Microwave(name, specs);
                break;
            case 'car':
                device = new Car(name, specs);
                break;
            case 'steamer':
                device = new Steamer(name, specs);
                break;
            default:
                result.textContent = 'Неизвестный тип устройства.';
                return;
        }

        // Выводим данные устройства
        result.textContent = `Устройство создано:\n${device.show()}\n${device.desc()}`;
    });

    // Обработчик для кнопки "Показать название"
    showButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!device) {
            result.textContent = 'Сначала создайте устройство.';
            return;
        }
        // Выводим название устройства
        result.textContent = device.show();
    });

    // Обработчик для кнопки "Показать описание"
    descButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!device) {
            result.textContent = 'Сначала создайте устройство.';
            return;
        }
        // Выводим описание устройства
        result.textContent = device.desc();
    });

    // Обработчик для кнопки "Издать звук"
    soundButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!device) {
            result.textContent = 'Сначала создайте устройство.';
            return;
        }
        // Выводим звук устройства
        result.textContent = device.sound();
        // Также выводим звук в консоль, как указано в задании
        console.log(device.sound());
    });
});