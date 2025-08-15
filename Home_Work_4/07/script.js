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


        if (!/^[a-zA-Z\s]+$/.test(inputString)) {
            result.textContent = 'Ошибка: строка должна содержать только английские буквы и пробелы.';
            return;
        }


        const words = inputString.split(/\s+/).filter(word => word.length > 0);


        if (words.length === 0) {
            result.textContent = 'Ошибка: в строке нет слов.';
            return;
        }


        let maxLength = words[0].length;
        for (let i = 1; i < words.length; i++) {
            if (words[i].length > maxLength) {
                maxLength = words[i].length;
            }
        }

        result.textContent = `Введенная строка: ${inputString}\nДлина самого длинного слова: ${maxLength}`;
    });
});