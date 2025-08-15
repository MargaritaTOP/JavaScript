document.addEventListener('DOMContentLoaded', function() {
    const birthYearInput = document.getElementById('birthYearInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const birthYear = parseInt(birthYearInput.value);
        const currentYear = new Date().getFullYear();

        if (isNaN(birthYear) || birthYear <= 0 || birthYear > currentYear) {
            result.textContent = 'Пожалуйста, введите действительный год рождения.';
            return;
        }

        const age = currentYear - birthYear;
        result.textContent = `Ваш возраст: ${age} лет`;
    });
});