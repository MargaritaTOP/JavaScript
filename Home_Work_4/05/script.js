document.addEventListener('DOMContentLoaded', function() {
    const stringInput = document.getElementById('stringInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const inputString = stringInput.value.trim();


        if (inputString === '') {
            result.textContent = 'Пожалуйста, введите непустую строку.';
            return;
        }


        if (!/^[а-яА-Я\s]+$/.test(inputString)) {
            result.textContent = 'Ошибка: строка должна содержать только русские буквы и пробелы.';
            return;
        }


        const words = inputString.split(/\s+/).filter(word => word.length > 0);


        const wordCount = words.length;

        result.textContent = `Введенная строка: ${inputString}\nКоличество слов: ${wordCount}`;
    });
});