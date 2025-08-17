document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const instrumentTypeInput = document.getElementById('instrumentTypeInput'); // Выпадающий список для типа инструмента
    const nameInput = document.getElementById('nameInput'); // Поле ввода имени инструмента
    const specsInput = document.getElementById('specsInput'); // Поле ввода характеристик
    const createButton = document.getElementById('createButton'); // Кнопка создания инструмента
    const showButton = document.getElementById('showButton'); // Кнопка для метода Show
    const descButton = document.getElementById('descButton'); // Кнопка для метода Desc
    const soundButton = document.getElementById('soundButton'); // Кнопка для метода Sound
    const historyButton = document.getElementById('historyButton'); // Кнопка для метода History
    const result = document.getElementById('result'); // Элемент для результата

    // Базовый класс MusicalInstrument
    class MusicalInstrument {
        // Конструктор класса с параметрами для имени и характеристик
        constructor(name, specs) {
            this._name = name; // Приватное поле для имени инструмента
            this._specs = specs; // Приватное поле для характеристик
        }

        // Метод Show для отображения имени инструмента
        show() {
            return `Название инструмента: ${this._name}`;
        }

        // Метод Desc для отображения характеристик инструмента
        desc() {
            return `Характеристики: ${this._specs}`;
        }

        // Метод Sound (будет переопределен в производных классах)
        sound() {
            return "Инструмент издает звук";
        }

        // Метод History (будет переопределен в производных классах)
        history() {
            return "История создания инструмента неизвестна";
        }
    }

    // Производный класс Violin
    class Violin extends MusicalInstrument {
        // Конструктор вызывает конструктор базового класса
        constructor(name, specs) {
            super(name, specs);
        }

        // Переопределение метода Sound
        sound() {
            const sound = "Скрипка звучит: Виии-виии!";
            console.log(sound); // Вывод в консоль
            return sound;
        }

        // Переопределение метода History
        history() {
            return "Скрипка: Струнный смычковый инструмент, появился в Европе в XVI веке. Современная форма создана мастерами, такими как Антонио Страдивари.";
        }
    }

    // Производный класс Trombone
    class Trombone extends MusicalInstrument {
        // Конструктор вызывает конструктор базового класса
        constructor(name, specs) {
            super(name, specs);
        }

        // Переопределение метода Sound
        sound() {
            const sound = "Тромбон звучит: Бвууу-бвууу!";
            console.log(sound); // Вывод в консоль
            return sound;
        }

        // Переопределение метода History
        history() {
            return "Тромбон: Духовой инструмент, известен с XV века. Использовался в церковной и военной музыке, получил развитие в джазе.";
        }
    }

    // Производный класс Ukulele
    class Ukulele extends MusicalInstrument {
        // Конструктор вызывает конструктор базового класса
        constructor(name, specs) {
            super(name, specs);
        }

        // Переопределение метода Sound
        sound() {
            const sound = "Укулеле звучит: Трень-трень!";
            console.log(sound); // Вывод в консоль
            return sound;
        }

        // Переопределение метода History
        history() {
            return "Укулеле: Струнный инструмент, появившийся в конце XIX века на Гавайях, основан на португальских гитарах.";
        }
    }

    // Производный класс Cello
    class Cello extends MusicalInstrument {
        // Конструктор вызывает конструктор базового класса
        constructor(name, specs) {
            super(name, specs);
        }

        // Переопределение метода Sound
        sound() {
            const sound = "Виолончель звучит: Буум-буум!";
            console.log(sound); // Вывод в консоль
            return sound;
        }

        // Переопределение метода History
        history() {
            return "Виолончель: Струнный смычковый инструмент, развился в XVI-XVII веках. Используется в классической музыке и камерных ансамблях.";
        }
    }

    // Переменная для хранения объекта инструмента
    let instrument = null;

    // Обработчик для кнопки "Создать инструмент"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const instrumentType = instrumentTypeInput.value; // Тип инструмента
        const name = nameInput.value.trim(); // Имя инструмента
        const specs = specsInput.value.trim(); // Характеристики

        // Проверяем, что поля имени и характеристик заполнены
        if (!name || !specs) {
            result.textContent = 'Пожалуйста, заполните все поля.';
            return;
        }

        // Создаем объект соответствующего класса в зависимости от типа
        switch (instrumentType) {
            case 'violin':
                instrument = new Violin(name, specs);
                break;
            case 'trombone':
                instrument = new Trombone(name, specs);
                break;
            case 'ukulele':
                instrument = new Ukulele(name, specs);
                break;
            case 'cello':
                instrument = new Cello(name, specs);
                break;
            default:
                result.textContent = 'Неизвестный тип инструмента.';
                return;
        }

        // Выводим данные инструмента
        result.textContent = `Инструмент создан:\n${instrument.show()}\n${instrument.desc()}`;
    });

    // Обработчик для кнопки "Показать название"
    showButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!instrument) {
            result.textContent = 'Сначала создайте инструмент.';
            return;
        }
        // Выводим название инструмента
        result.textContent = instrument.show();
    });

    // Обработчик для кнопки "Показать описание"
    descButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!instrument) {
            result.textContent = 'Сначала создайте инструмент.';
            return;
        }
        // Выводим описание инструмента
        result.textContent = instrument.desc();
    });

    // Обработчик для кнопки "Издать звук"
    soundButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!instrument) {
            result.textContent = 'Сначала создайте инструмент.';
            return;
        }
        // Выводим звук инструмента на экран и в консоль
        result.textContent = instrument.sound();
    });

    // Обработчик для кнопки "Показать историю"
    historyButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!instrument) {
            result.textContent = 'Сначала создайте инструмент.';
            return;
        }
        // Выводим историю инструмента
        result.textContent = instrument.history();
    });
});