document.addEventListener('DOMContentLoaded', function() {
    const answerInput = document.getElementById('answerInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    // Correct answer for 2 + 2 * 2 (following order of operations: multiplication first)
    const correctAnswer = 6; // 2 + (2 * 2) = 2 + 4 = 6

    button.addEventListener('click', function() {
        let answer;

        do {
            answer = parseInt(answerInput.value);

            if (isNaN(answer)) {
                result.textContent = 'Пожалуйста, введите действительное число.';
                return;
            }

            if (answer === correctAnswer) {
                result.textContent = 'Правильно! 2 + 2 * 2 = 6';
                break;
            } else {
                result.textContent = 'Неправильно. Попробуйте еще раз.';
                return;
            }
        } while (answer !== correctAnswer);
    });
});