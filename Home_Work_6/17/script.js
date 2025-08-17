document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const shapeTypeInput = document.getElementById('shapeTypeInput'); // Выпадающий список для типа фигуры
    const widthInput = document.getElementById('widthInput'); // Поле ввода ширины
    const heightInput = document.getElementById('heightInput'); // Поле ввода высоты
    const radiusInput = document.getElementById('radiusInput'); // Поле ввода радиуса
    const base1Input = document.getElementById('base1Input'); // Поле ввода первого основания
    const base2Input = document.getElementById('base2Input'); // Поле ввода второго основания
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const setPartialButton = document.getElementById('setPartialButton'); // Кнопка частичного ввода
    const getInfoButton = document.getElementById('getInfoButton'); // Кнопка для вывода информации
    const showAllShapesButton = document.getElementById('showAllShapesButton'); // Кнопка для вывода всех фигур
    const result = document.getElementById('result'); // Элемент для результата

    // Массив для хранения объектов фигур
    let shapes = [];

    // Базовый класс Shape (абстрактный)
    class Shape {
        // Конструктор класса
        constructor() {
            if (this.constructor === Shape) {
                throw new Error("Нельзя создать экземпляр абстрактного класса Shape");
            }
        }

        // Абстрактный метод для подсчёта площади
        getArea() {
            throw new Error("Метод getArea должен быть переопределен в производном классе");
        }

        // Абстрактный метод для вывода информации
        getInfo() {
            throw new Error("Метод getInfo должен быть переопределен в производном классе");
        }

        // Метод для ввода данных (имитация перегрузки)
        setData() {
            throw new Error("Метод setData должен быть переопределен в производном классе");
        }
    }

    // Производный класс Rectangle
    class Rectangle extends Shape {
        constructor(width, height) {
            super();
            this._width = width || 0; // Ширина
            this._height = height || 0; // Высота
        }

        // Перегрузка setData
        setData(width, height = this._height) {
            if (width !== undefined) {
                this._width = width;
                if (height !== undefined) {
                    this._height = height;
                }
            } else {
                throw new Error("Необходимо указать как минимум ширину");
            }
        }

        // Реализация метода getArea
        getArea() {
            return this._width * this._height;
        }

        // Реализация метода getInfo
        getInfo() {
            return `Прямоугольник\nШирина: ${this._width} см\nВысота: ${this._height} см\nПлощадь: ${this.getArea().toFixed(2)} см²`;
        }
    }

    // Производный класс Circle
    class Circle extends Shape {
        constructor(radius) {
            super();
            this._radius = radius || 0; // Радиус
        }

        // Перегрузка setData
        setData(radius) {
            if (radius !== undefined) {
                this._radius = radius;
            } else {
                throw new Error("Необходимо указать радиус");
            }
        }

        // Реализация метода getArea
        getArea() {
            return Math.PI * this._radius * this._radius;
        }

        // Реализация метода getInfo
        getInfo() {
            return `Круг\nРадиус: ${this._radius} см\nПлощадь: ${this.getArea().toFixed(2)} см²`;
        }
    }

    // Производный класс RightTriangle
    class RightTriangle extends Shape {
        constructor(width, height) {
            super();
            this._width = width || 0; // Ширина (основание)
            this._height = height || 0; // Высота
        }

        // Перегрузка setData
        setData(width, height = this._height) {
            if (width !== undefined) {
                this._width = width;
                if (height !== undefined) {
                    this._height = height;
                }
            } else {
                throw new Error("Необходимо указать как минимум ширину");
            }
        }

        // Реализация метода getArea
        getArea() {
            return 0.5 * this._width * this._height;
        }

        // Реализация метода getInfo
        getInfo() {
            return `Прямоугольный треугольник\nОснование: ${this._width} см\nВысота: ${this._height} см\nПлощадь: ${this.getArea().toFixed(2)} см²`;
        }
    }

    // Производный класс Trapezoid
    class Trapezoid extends Shape {
        constructor(base1, base2, height) {
            super();
            this._base1 = base1 || 0; // Первое основание
            this._base2 = base2 || 0; // Второе основание
            this._height = height || 0; // Высота
        }

        // Перегрузка setData
        setData(base1, base2 = this._base2, height = this._height) {
            if (base1 !== undefined) {
                this._base1 = base1;
                if (base2 !== undefined) {
                    this._base2 = base2;
                }
                if (height !== undefined) {
                    this._height = height;
                }
            } else {
                throw new Error("Необходимо указать как минимум первое основание");
            }
        }

        // Реализация метода getArea
        getArea() {
            return 0.5 * (this._base1 + this._base2) * this._height;
        }

        // Реализация метода getInfo
        getInfo() {
            return `Трапеция\nПервое основание: ${this._base1} см\nВторое основание: ${this._base2} см\nВысота: ${this._height} см\nПлощадь: ${this.getArea().toFixed(2)} см²`;
        }
    }

    // Переменная для хранения текущей фигуры
    let currentShape = null;

    // Обработчик для кнопки "Создать и показать данные"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const shapeType = shapeTypeInput.value; // Тип фигуры
        const width = parseFloat(widthInput.value); // Ширина
        const height = parseFloat(heightInput.value); // Высота
        const radius = parseFloat(radiusInput.value); // Радиус
        const base1 = parseFloat(base1Input.value); // Первое основание
        const base2 = parseFloat(base2Input.value); // Второе основание

        // Проверяем, что необходимые поля заполнены
        if (shapeType === 'rectangle' && (isNaN(width) || width <= 0 || isNaN(height) || height <= 0)) {
            result.textContent = 'Введите корректные ширину и высоту (> 0).';
            return;
        }
        if (shapeType === 'circle' && (isNaN(radius) || radius <= 0)) {
            result.textContent = 'Введите корректный радиус (> 0).';
            return;
        }
        if (shapeType === 'rightTriangle' && (isNaN(width) || width <= 0 || isNaN(height) || height <= 0)) {
            result.textContent = 'Введите корректные основание и высоту (> 0).';
            return;
        }
        if (shapeType === 'trapezoid' && (isNaN(base1) || base1 <= 0 || isNaN(base2) || base2 <= 0 || isNaN(height) || height <= 0)) {
            result.textContent = 'Введите корректные основания и высоту (> 0).';
            return;
        }

        try {
            // Создаем объект соответствующего класса
            switch (shapeType) {
                case 'rectangle':
                    currentShape = new Rectangle(width, height);
                    break;
                case 'circle':
                    currentShape = new Circle(radius);
                    break;
                case 'rightTriangle':
                    currentShape = new RightTriangle(width, height);
                    break;
                case 'trapezoid':
                    currentShape = new Trapezoid(base1, base2, height);
                    break;
                default:
                    result.textContent = 'Неизвестный тип фигуры.';
                    return;
            }

            // Добавляем фигуру в массив
            shapes.push(currentShape);

            // Выводим данные
            result.textContent = `Фигура создана:\n${currentShape.getInfo()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Установить основные параметры"
    setPartialButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const shapeType = shapeTypeInput.value; // Тип фигуры
        const width = parseFloat(widthInput.value); // Ширина
        const radius = parseFloat(radiusInput.value); // Радиус
        const base1 = parseFloat(base1Input.value); // Первое основание

        // Проверяем, что основные параметры заполнены
        if (shapeType === 'rectangle' && (isNaN(width) || width <= 0)) {
            result.textContent = 'Введите корректную ширину (> 0).';
            return;
        }
        if (shapeType === 'circle' && (isNaN(radius) || radius <= 0)) {
            result.textContent = 'Введите корректный радиус (> 0).';
            return;
        }
        if (shapeType === 'rightTriangle' && (isNaN(width) || width <= 0)) {
            result.textContent = 'Введите корректное основание (> 0).';
            return;
        }
        if (shapeType === 'trapezoid' && (isNaN(base1) || base1 <= 0)) {
            result.textContent = 'Введите корректное первое основание (> 0).';
            return;
        }

        try {
            if (!currentShape) {
                // Если объект ещё не создан, создаём с значениями по умолчанию
                switch (shapeType) {
                    case 'rectangle':
                        currentShape = new Rectangle(width, 0);
                        break;
                    case 'circle':
                        currentShape = new Circle(radius);
                        break;
                    case 'rightTriangle':
                        currentShape = new RightTriangle(width, 0);
                        break;
                    case 'trapezoid':
                        currentShape = new Trapezoid(base1, 0, 0);
                        break;
                    default:
                        result.textContent = 'Неизвестный тип фигуры.';
                        return;
                }
                shapes.push(currentShape);
            } else {
                // Используем setData для частичного ввода
                switch (shapeType) {
                    case 'rectangle':
                    case 'rightTriangle':
                        currentShape.setData(width);
                        break;
                    case 'circle':
                        currentShape.setData(radius);
                        break;
                    case 'trapezoid':
                        currentShape.setData(base1);
                        break;
                }
            }
            // Выводим обновленные данные
            result.textContent = `Данные обновлены:\n${currentShape.getInfo()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Показать информацию"
    getInfoButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!currentShape) {
            result.textContent = 'Сначала создайте фигуру.';
            return;
        }
        try {
            // Выводим информацию
            result.textContent = currentShape.getInfo();
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Показать все фигуры"
    showAllShapesButton.addEventListener('click', function() {
        // Проверяем, есть ли фигуры в массиве
        if (shapes.length === 0) {
            result.textContent = 'Массив фигур пуст.';
            return;
        }
        try {
            // Формируем информацию о всех фигурах
            let output = "Все фигуры:\n\n";
            shapes.forEach((shape, index) => {
                output += `Фигура ${index + 1}:\n${shape.getInfo()}\n\n`;
            });
            result.textContent = output;
        } catch (error) {
            result.textContent = error.message;
        }
    });
});