document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const generateButton = document.getElementById('generateButton');
    const generatedNumbersEl = document.getElementById('generatedNumbers');
    const evenNumbersEl = document.getElementById('evenNumbers');
    const oddNumbersEl = document.getElementById('oddNumbers');
    const finalCollectionEl = document.getElementById('finalCollection');

    generateButton.addEventListener('click', function() {
        // Получаем количество чисел от пользователя
        const count = parseInt(numberInput.value);

        // Проверяем валидность ввода
        if (isNaN(count) || count <= 0) {
            alert('Пожалуйста, введите положительное число');
            return;
        }

        // Генерируем случайные числа от -50 до 50
        const numbers = generateRandomNumbers(count, -50, 50);

        // Отображаем сгенерированные числа
        displayNumbers(numbers, generatedNumbersEl, 'generated');

        // Разделяем числа на четные и нечетные
        const evens = numbers.filter(num => num % 2 === 0);
        const odds = numbers.filter(num => num % 2 !== 0);

        // Сортируем четные по убыванию
        evens.sort((a, b) => b - a);

        // Сортируем нечетные по возрастанию
        odds.sort((a, b) => a - b);

        // Отображаем отсортированные числа
        displayNumbers(evens, evenNumbersEl, 'even');
        displayNumbers(odds, oddNumbersEl, 'odd');

        // Объединяем коллекции
        const finalCollection = [...evens, ...odds];

        // Отображаем итоговую коллекцию
        displayNumbers(finalCollection, finalCollectionEl, 'final');
    });

    // Функция генерации случайных чисел
    function generateRandomNumbers(count, min, max) {
        const numbers = [];
        for (let i = 0; i < count; i++) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            numbers.push(randomNumber);
        }
        return numbers;
    }


    function displayNumbers(numbers, container, type) {
        container.innerHTML = '';

        if (numbers.length === 0) {
            container.innerHTML = '<div class="number">Нет чисел</div>';
            return;
        }

        numbers.forEach(number => {
            const numberEl = document.createElement('div');
            numberEl.classList.add('number');


            if (type === 'even') {
                numberEl.classList.add('even');
            } else if (type === 'odd') {
                numberEl.classList.add('odd');
            } else if (type === 'final') {
                numberEl.classList.add('final-number');
            }

            numberEl.textContent = number;
            container.appendChild(numberEl);
        });
    }


    numberInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateButton.click();
        }
    });
});