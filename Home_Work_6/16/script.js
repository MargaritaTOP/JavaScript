document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const animalTypeInput = document.getElementById('animalTypeInput'); // Выпадающий список для типа животного
    const nameInput = document.getElementById('nameInput'); // Поле ввода имени
    const ageInput = document.getElementById('ageInput'); // Поле ввода возраста
    const maxSpeedInput = document.getElementById('maxSpeedInput'); // Поле для максимальной скорости
    const bodyLengthInput = document.getElementById('bodyLengthInput'); // Поле для длины тела
    const jumpHeightInput = document.getElementById('jumpHeightInput'); // Поле для высоты прыжка
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const setPartialButton = document.getElementById('setPartialButton'); // Кнопка частичного ввода
    const getInfoButton = document.getElementById('getInfoButton'); // Кнопка для вывода информации
    const result = document.getElementById('result'); // Элемент для результата

    // Базовый класс Animal (абстрактный)
    class Animal {
        // Конструктор класса
        constructor(name, age) {
            if (this.constructor === Animal) {
                throw new Error("Нельзя создать экземпляр абстрактного класса Animal");
            }
            this._name = name || "Без имени"; // Имя животного
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

    // Производный класс Tiger
    class Tiger extends Animal {
        constructor(name, age, maxSpeed) {
            super(name, age);
            this._maxSpeed = maxSpeed || 0; // Максимальная скорость (км/ч)
        }

        // Перегрузка setData
        setData(name, age, maxSpeed = this._maxSpeed) {
            super.setData(name, age);
            if (maxSpeed !== undefined) {
                this._maxSpeed = maxSpeed;
            }
        }

        // Переопределение метода getInfo
        getInfo() {
            return `Тигр\nИмя: ${this._name}\nВозраст: ${this._age} лет\nМаксимальная скорость: ${this._maxSpeed} км/ч\nОписание: Крупный хищник, обитающий в лесах и саваннах.`;
        }
    }

    // Производный класс Crocodile
    class Crocodile extends Animal {
        constructor(name, age, bodyLength) {
            super(name, age);
            this._bodyLength = bodyLength || 0; // Длина тела (м)
        }

        // Перегрузка setData
        setData(name, age, bodyLength = this._bodyLength) {
            super.setData(name, age);
            if (bodyLength !== undefined) {
                this._bodyLength = bodyLength;
            }
        }

        // Переопределение метода getInfo
        getInfo() {
            return `Крокодил\nИмя: ${this._name}\nВозраст: ${this._age} лет\nДлина тела: ${this._bodyLength} м\nОписание: Хищник, обитающий в реках и болотах.`;
        }
    }

    // Производный класс Kangaroo
    class Kangaroo extends Animal {
        constructor(name, age, jumpHeight) {
            super(name, age);
            this._jumpHeight = jumpHeight || 0; // Высота прыжка (м)
        }

        // Перегрузка setData
        setData(name, age, jumpHeight = this._jumpHeight) {
            super.setData(name, age);
            if (jumpHeight !== undefined) {
                this._jumpHeight = jumpHeight;
            }
        }

        // Переопределение метода getInfo
        getInfo() {
            return `Кенгуру\nИмя: ${this._name}\nВозраст: ${this._age} лет\nВысота прыжка: ${this._jumpHeight} м\nОписание: Сумчатое животное, обитающее в Австралии.`;
        }
    }

    // Переменная для хранения объекта
    let animal = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const animalType = animalTypeInput.value; // Тип животного
        const name = nameInput.value.trim(); // Имя
        const age = parseInt(ageInput.value); // Возраст
        const maxSpeed = parseFloat(maxSpeedInput.value); // Максимальная скорость (для тигра)
        const bodyLength = parseFloat(bodyLengthInput.value); // Длина тела (для крокодила)
        const jumpHeight = parseFloat(bodyLengthInput.value); // Высота прыжка (для кенгуру)

        // Проверяем, что обязательные поля заполнены
        if (!name) {
            result.textContent = 'Введите имя животного.';
            return;
        }
        if (isNaN(age) || age < 0) {
            result.textContent = 'Введите корректный возраст (≥ 0).';
            return;
        }
        if (animalType === 'tiger' && (isNaN(maxSpeed) || maxSpeed < 0)) {
            result.textContent = 'Введите корректную максимальную скорость (≥ 0).';
            return;
        }
        if (animalType === 'crocodile' && (isNaN(bodyLength) || bodyLength <= 0)) {
            result.textContent = 'Введите корректную длину тела (> 0).';
            return;
        }
        if (animalType === 'kangaroo' && (isNaN(jumpHeight) || jumpHeight <= 0)) {
            result.textContent = 'Введите корректную высоту прыжка (> 0).';
            return;
        }

        try {
            // Создаем объект соответствующего класса
            switch (animalType) {
                case 'tiger':
                    animal = new Tiger(name, age, maxSpeed);
                    break;
                case 'crocodile':
                    animal = new Crocodile(name, age, bodyLength);
                    break;
                case 'kangaroo':
                    animal = new Kangaroo(name, age, jumpHeight);
                    break;
                default:
                    result.textContent = 'Неизвестный тип животного.';
                    return;
            }

            // Выводим данные
            result.textContent = `Животное создано:\n${animal.getInfo()}`;
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
            result.textContent = 'Введите имя животного.';
            return;
        }
        if (isNaN(age) || age < 0) {
            result.textContent = 'Введите корректный возраст (≥ 0).';
            return;
        }

        try {
            if (!animal) {
                // Если объект ещё не создан, создаём с значениями по умолчанию
                const animalType = animalTypeInput.value;
                switch (animalType) {
                    case 'tiger':
                        animal = new Tiger(name, age, 0);
                        break;
                    case 'crocodile':
                        animal = new Crocodile(name, age, 0);
                        break;
                    case 'kangaroo':
                        animal = new Kangaroo(name, age, 0);
                        break;
                    default:
                        result.textContent = 'Неизвестный тип животного.';
                        return;
                }
            } else {
                // Используем setData для частичного ввода
                animal.setData(name, age);
            }
            // Выводим обновленные данные
            result.textContent = `Данные обновлены:\n${animal.getInfo()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Показать информацию"
    getInfoButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!animal) {
            result.textContent = 'Сначала создайте животное.';
            return;
        }
        try {
            // Выводим информацию
            result.textContent = animal.getInfo();
        } catch (error) {
            result.textContent = error.message;
        }
    });
});