document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const humanTypeInput = document.getElementById('humanTypeInput'); // Выпадающий список для типа
    const nameInput = document.getElementById('nameInput'); // Поле ввода имени
    const ageInput = document.getElementById('ageInput'); // Поле ввода возраста
    const specialtyInput = document.getElementById('specialtyInput'); // Поле для специальности
    const shipTypeInput = document.getElementById('shipTypeInput'); // Поле для типа судна
    const planeTypeInput = document.getElementById('planeTypeInput'); // Поле для типа самолёта
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const setPartialButton = document.getElementById('setPartialButton'); // Кнопка частичного ввода
    const getInfoButton = document.getElementById('getInfoButton'); // Кнопка для вывода информации
    const result = document.getElementById('result'); // Элемент для результата

    // Базовый класс Human (абстрактный)
    class Human {
        // Конструктор класса
        constructor(name, age) {
            if (this.constructor === Human) {
                throw new Error("Нельзя создать экземпляр абстрактного класса Human");
            }
            this._name = name || "Неизвестное имя"; // Имя
            this._age = age || 0; // Возраст
        }

        // Метод для ввода данных (имитация перегрузки)
        setData(name, age) {
            if (name && age !== undefined) {
                this._name = name;
                this._age = age;
            } else if (name) {
                this._name = name;
            } else {
                throw new Error("Необходимо указать как минимум имя");
            }
        }

        // Абстрактный метод getInfo
        getInfo() {
            throw new Error("Метод getInfo должен быть переопределен в производном классе");
        }
    }

    // Производный класс Builder
    class Builder extends Human {
        constructor(name, age, specialty) {
            super(name, age);
            this._specialty = specialty || "Неизвестная специальность"; // Специальность строителя
        }

        // Перегрузка setData
        setData(name, age, specialty = this._specialty) {
            super.setData(name, age);
            if (specialty) {
                this._specialty = specialty;
            }
        }

        // Переопределение метода getInfo
        getInfo() {
            return `Строитель\nИмя: ${this._name}\nВозраст: ${this._age}\nСпециальность: ${this._specialty}\nОбязанности: Строительство и ремонт зданий.`;
        }
    }

    // Производный класс Sailor
    class Sailor extends Human {
        constructor(name, age, shipType) {
            super(name, age);
            this._shipType = shipType || "Неизвестный тип судна"; // Тип судна
        }

        // Перегрузка setData
        setData(name, age, shipType = this._shipType) {
            super.setData(name, age);
            if (shipType) {
                this._shipType = shipType;
            }
        }

        // Переопределение метода getInfo
        getInfo() {
            return `Моряк\nИмя: ${this._name}\nВозраст: ${this._age}\nТип судна: ${this._shipType}\nОбязанности: Управление судном, обеспечение безопасности на море.`;
        }
    }

    // Производный класс Pilot
    class Pilot extends Human {
        constructor(name, age, planeType) {
            super(name, age);
            this._planeType = planeType || "Неизвестный тип самолёта"; // Тип самолёта
        }

        // Перегрузка setData
        setData(name, age, planeType = this._planeType) {
            super.setData(name, age);
            if (planeType) {
                this._planeType = planeType;
            }
        }

        // Переопределение метода getInfo
        getInfo() {
            return `Лётчик\nИмя: ${this._name}\nВозраст: ${this._age}\nТип самолёта: ${this._planeType}\nОбязанности: Управление самолётом, обеспечение безопасности полётов.`;
        }
    }

    // Переменная для хранения объекта
    let human = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const humanType = humanTypeInput.value; // Тип человека
        const name = nameInput.value.trim(); // Имя
        const age = parseInt(ageInput.value); // Возраст
        const specialty = specialtyInput.value.trim(); // Специальность (для строителя)
        const shipType = shipTypeInput.value.trim(); // Тип судна (для моряка)
        const planeType = planeTypeInput.value.trim(); // Тип самолёта (для лётчика)

        // Проверяем, что обязательные поля заполнены
        if (!name) {
            result.textContent = 'Введите имя.';
            return;
        }
        if (isNaN(age) || age < 18) {
            result.textContent = 'Введите корректный возраст (≥ 18).';
            return;
        }
        if (humanType === 'builder' && !specialty) {
            result.textContent = 'Введите специальность для строителя.';
            return;
        }
        if (humanType === 'sailor' && !shipType) {
            result.textContent = 'Введите тип судна для моряка.';
            return;
        }
        if (humanType === 'pilot' && !planeType) {
            result.textContent = 'Введите тип самолёта для лётчика.';
            return;
        }

        try {
            // Создаем объект соответствующего класса
            switch (humanType) {
                case 'builder':
                    human = new Builder(name, age, specialty);
                    break;
                case 'sailor':
                    human = new Sailor(name, age, shipType);
                    break;
                case 'pilot':
                    human = new Pilot(name, age, planeType);
                    break;
                default:
                    result.textContent = 'Неизвестный тип человека.';
                    return;
            }

            // Выводим данные
            result.textContent = `Человек создан:\n${human.getInfo()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Установить имя и возраст"
    setPartialButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const name = nameInput.value.trim(); // Имя
        const age = parseInt(ageInput.value); // Возраст

        // Проверяем, что обязательные поля заполнены
        if (!name) {
            result.textContent = 'Введите имя.';
            return;
        }
        if (isNaN(age) || age < 18) {
            result.textContent = 'Введите корректный возраст (≥ 18).';
            return;
        }

        try {
            if (!human) {
                // Если объект ещё не создан, создаём с значениями по умолчанию
                const humanType = humanTypeInput.value;
                switch (humanType) {
                    case 'builder':
                        human = new Builder(name, age);
                        break;
                    case 'sailor':
                        human = new Sailor(name, age);
                        break;
                    case 'pilot':
                        human = new Pilot(name, age);
                        break;
                    default:
                        result.textContent = 'Неизвестный тип человека.';
                        return;
                }
            } else {
                // Используем setData для частичного ввода
                human.setData(name, age);
            }
            // Выводим обновленные данные
            result.textContent = `Данные обновлены:\n${human.getInfo()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Показать информацию"
    getInfoButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!human) {
            result.textContent = 'Сначала создайте человека.';
            return;
        }
        try {
            // Выводим информацию
            result.textContent = human.getInfo();
        } catch (error) {
            result.textContent = error.message;
        }
    });
});