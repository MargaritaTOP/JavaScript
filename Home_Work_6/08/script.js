document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const workerTypeInput = document.getElementById('workerTypeInput'); // Выпадающий список для типа работника
    const nameInput = document.getElementById('nameInput'); // Поле ввода имени работника
    const positionInput = document.getElementById('positionInput'); // Поле ввода должности
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const printButton = document.getElementById('printButton'); // Кнопка для метода Print
    const result = document.getElementById('result'); // Элемент для результата

    // Базовый класс Worker (абстрактный)
    class Worker {
        // Конструктор класса с параметрами для имени и должности
        constructor(name, position) {
            // Проверяем, чтобы не создавался экземпляр базового класса
            if (this.constructor === Worker) {
                throw new Error("Нельзя создать экземпляр абстрактного класса Worker");
            }
            this._name = name; // Приватное поле для имени работника
            this._position = position; // Приватное поле для должности
        }

        // Метод Print (абстрактный, должен быть переопределен)
        print() {
            throw new Error("Метод Print должен быть переопределен в производном классе");
        }
    }

    // Производный класс President
    class President extends Worker {
        // Конструктор вызывает конструктор базового класса
        constructor(name, position) {
            super(name, position);
        }

        // Переопределение метода Print
        print() {
            return `Президент\nИмя: ${this._name}\nДолжность: ${this._position}\nОбязанности: Руководство компанией, принятие стратегических решений.`;
        }
    }

    // Производный класс Security
    class Security extends Worker {
        // Конструктор вызывает конструктор базового класса
        constructor(name, position) {
            super(name, position);
        }

        // Переопределение метода Print
        print() {
            return `Охранник\nИмя: ${this._name}\nДолжность: ${this._position}\nОбязанности: Обеспечение безопасности объекта, контроль доступа.`;
        }
    }

    // Производный класс Manager
    class Manager extends Worker {
        // Конструктор вызывает конструктор базового класса
        constructor(name, position) {
            super(name, position);
        }

        // Переопределение метода Print
        print() {
            return `Менеджер\nИмя: ${this._name}\nДолжность: ${this._position}\nОбязанности: Координация работы команды, управление проектами.`;
        }
    }

    // Производный класс Engineer
    class Engineer extends Worker {
        // Конструктор вызывает конструктор базового класса
        constructor(name, position) {
            super(name, position);
        }

        // Переопределение метода Print
        print() {
            return `Инженер\nИмя: ${this._name}\nДолжность: ${this._position}\nОбязанности: Разработка и внедрение технических решений.`;
        }
    }

    // Переменная для хранения объекта работника
    let worker = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const workerType = workerTypeInput.value; // Тип работника
        const name = nameInput.value.trim(); // Имя работника
        const position = positionInput.value.trim(); // Должность

        // Проверяем, что поля имени и должности заполнены
        if (!name || !position) {
            result.textContent = 'Пожалуйста, заполните все поля.';
            return;
        }

        // Создаем объект соответствующего класса в зависимости от типа
        try {
            switch (workerType) {
                case 'president':
                    worker = new President(name, position);
                    break;
                case 'security':
                    worker = new Security(name, position);
                    break;
                case 'manager':
                    worker = new Manager(name, position);
                    break;
                case 'engineer':
                    worker = new Engineer(name, position);
                    break;
                default:
                    result.textContent = 'Неизвестный тип работника.';
                    return;
            }

            // Выводим данные работника
            result.textContent = `Работник создан:\nИмя: ${name}\nДолжность: ${position}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Показать информацию"
    printButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!worker) {
            result.textContent = 'Сначала создайте работника.';
            return;
        }
        // Выводим информацию о работнике через метод Print
        try {
            result.textContent = worker.print();
        } catch (error) {
            result.textContent = error.message;
        }
    });
});