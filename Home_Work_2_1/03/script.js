document.addEventListener('DOMContentLoaded', function() {
    const hoursInput = document.getElementById('hoursInput');
    const minutesInput = document.getElementById('minutesInput');
    const secondsInput = document.getElementById('secondsInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const hours = parseInt(hoursInput.value);
        const minutes = parseInt(minutesInput.value);
        const seconds = parseInt(secondsInput.value);

        if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
            result.textContent = 'Пожалуйста, введите действительные числа.';
            return;
        }

        // Using switch(true) to mimic if-else logic for range-based conditions
        switch (true) {
            case (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && seconds >= 0 && seconds <= 59):
                result.textContent = `Время корректно: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                break;
            default:
                result.textContent = 'Ошибка: введите часы (0-23), минуты (0-59), секунды (0-59).';
        }
    });
});