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


        if (!/^[a-zA-Z]:[\\\/](?:[a-zA-Z0-9]+[\\\/])*([a-zA-Z0-9]+)\.([a-zA-Z0-9]+)$/.test(inputString)) {
            result.textContent = 'Ошибка: строка должна представлять полный путь к файлу (например, C:/folder/file.txt).';
            return;
        }


        let fileName = '';
        const lastSlashIndex = Math.max(inputString.lastIndexOf('/'), inputString.lastIndexOf('\\'));
        const lastDotIndex = inputString.lastIndexOf('.');

        if (lastSlashIndex !== -1 && lastDotIndex > lastSlashIndex) {
            fileName = inputString.substring(lastSlashIndex + 1, lastDotIndex);
        } else {
            result.textContent = 'Ошибка: некорректный формат пути к файлу.';
            return;
        }

        result.textContent = `Введенная строка: ${inputString}\nИмя файла без расширения: ${fileName}`;
    });
});