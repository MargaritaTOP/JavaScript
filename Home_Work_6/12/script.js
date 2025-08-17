document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы интерфейса
    const rowsInput = document.getElementById('rowsInput'); // Поле ввода количества строк
    const colsInput = document.getElementById('colsInput'); // Поле ввода количества столбцов
    const createButton = document.getElementById('createButton'); // Кнопка создания и вывода
    const setElementsButton = document.getElementById('setElementsButton'); // Кнопка обновления элементов
    const getMatrixButton = document.getElementById('getMatrixButton'); // Кнопка для вывода матрицы
    const getMaxButton = document.getElementById('getMaxButton'); // Кнопка для максимума
    const getMinButton = document.getElementById('getMinButton'); // Кнопка для минимума
    const result = document.getElementById('result'); // Элемент для результата

    // Определяем класс Matrix
    class Matrix {
        // Конструктор класса с параметрами для строк и столбцов
        constructor(rows, cols) {
            this._rows = rows || 0; // Количество строк
            this._cols = cols || 0; // Количество столбцов
            this._matrix = []; // Двумерный массив для хранения элементов
            // Генерируем случайные элементы
            for (let i = 0; i < rows; i++) {
                this._matrix[i] = [];
                for (let j = 0; j < cols; j++) {
                    this._matrix[i][j] = Math.floor(Math.random() * 101); // Случайное число от 0 до 100
                }
            }
        }

        // Метод для ввода данных (имитация перегрузки)
        setData(rows, cols) {
            // Проверяем количество аргументов
            if (arguments.length === 2 && rows && cols) {
                // Полный ввод: новые размеры и случайные элементы
                this._rows = rows;
                this._cols = cols;
                this._matrix = [];
                for (let i = 0; i < rows; i++) {
                    this._matrix[i] = [];
                    for (let j = 0; j < cols; j++) {
                        this._matrix[i][j] = Math.floor(Math.random() * 101); // Случайное число от 0 до 100
                    }
                }
            } else if (arguments.length === 0) {
                // Частичный ввод: обновляем элементы, сохраняя размеры
                for (let i = 0; i < this._rows; i++) {
                    for (let j = 0; j < this._cols; j++) {
                        this._matrix[i][j] = Math.floor(Math.random() * 101); // Случайное число от 0 до 100
                    }
                }
            } else {
                throw new Error("Некорректные параметры: укажите размеры или ничего для обновления элементов");
            }
        }

        // Метод для вывода матрицы
        getData() {
            // Формируем строковое представление матрицы
            let output = "Матрица:\n";
            for (let i = 0; i < this._rows; i++) {
                output += this._matrix[i].join("\t") + "\n";
            }
            return output;
        }

        // Метод для подсчёта максимума
        getMax() {
            if (this._rows === 0 || this._cols === 0) {
                throw new Error("Матрица пуста");
            }
            let max = this._matrix[0][0];
            for (let i = 0; i < this._rows; i++) {
                for (let j = 0; j < this._cols; j++) {
                    if (this._matrix[i][j] > max) {
                        max = this._matrix[i][j];
                    }
                }
            }
            return max;
        }

        // Метод для подсчёта минимума
        getMin() {
            if (this._rows === 0 || this._cols === 0) {
                throw new Error("Матрица пуста");
            }
            let min = this._matrix[0][0];
            for (let i = 0; i < this._rows; i++) {
                for (let j = 0; j < this._cols; j++) {
                    if (this._matrix[i][j] < min) {
                        min = this._matrix[i][j];
                    }
                }
            }
            return min;
        }
    }

    // Переменная для хранения объекта Matrix
    let matrix = null;

    // Обработчик для кнопки "Создать и показать матрицу"
    createButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        const rows = parseInt(rowsInput.value); // Количество строк
        const cols = parseInt(colsInput.value); // Количество столбцов

        // Проверяем, что поля заполнены и корректны
        if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
            result.textContent = 'Пожалуйста, введите корректные положительные числа для строк и столбцов.';
            return;
        }

        try {
            // Создаем новый объект Matrix с случайными элементами
            matrix = new Matrix(rows, cols);
            // Выводим матрицу
            result.textContent = `Данные матрицы:\n${matrix.getData()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Обновить элементы"
    setElementsButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!matrix) {
            result.textContent = 'Сначала создайте матрицу.';
            return;
        }

        try {
            // Обновляем элементы матрицы (без изменения размеров)
            matrix.setData();
            // Выводим обновленную матрицу
            result.textContent = `Элементы матрицы обновлены:\n${matrix.getData()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Показать матрицу"
    getMatrixButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!matrix) {
            result.textContent = 'Сначала создайте матрицу.';
            return;
        }
        // Выводим матрицу
        result.textContent = matrix.getData();
    });

    // Обработчик для кнопки "Найти максимум"
    getMaxButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!matrix) {
            result.textContent = 'Сначала создайте матрицу.';
            return;
        }
        try {
            // Выводим максимум
            result.textContent = `Максимальный элемент: ${matrix.getMax()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });

    // Обработчик для кнопки "Найти минимум"
    getMinButton.addEventListener('click', function() {
        // Проверяем, существует ли объект
        if (!matrix) {
            result.textContent = 'Сначала создайте матрицу.';
            return;
        }
        try {
            // Выводим минимум
            result.textContent = `Минимальный элемент: ${matrix.getMin()}`;
        } catch (error) {
            result.textContent = error.message;
        }
    });
});