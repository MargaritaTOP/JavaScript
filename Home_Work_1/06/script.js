document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amountInput');
    const rateInput = document.getElementById('rateInput');
    const yearsInput = document.getElementById('yearsInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    button.addEventListener('click', function() {
        const amount = parseFloat(amountInput.value);
        const rate = parseFloat(rateInput.value);
        const years = parseFloat(yearsInput.value);

        if (isNaN(amount) || isNaN(rate) || isNaN(years) || amount <= 0 || rate <= 0 || years <= 0) {
            result.textContent = 'Пожалуйста, введите действительные положительные числа.';
            return;
        }

        const monthlyRate = rate / 100 / 12;
        const months = years * 12;
        const payment = amount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        result.textContent = `Ежемесячный платеж: ${payment.toFixed(2)}`;
    });
});