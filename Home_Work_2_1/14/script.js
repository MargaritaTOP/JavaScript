document.addEventListener('DOMContentLoaded', function() {
    const planetInput = document.getElementById('planetInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const planet = planetInput.value.trim();

        if (planet === '') {
            result.textContent = 'Пожалуйста, введите название планеты.';
            return;
        }

        // Using ternary operator to check if the input is "Земля" or "земля"
        result.textContent = (planet.toLowerCase() === 'земля') ? 'Привет, землянин!' : 'Привет, инопланетянин!';
    });
});