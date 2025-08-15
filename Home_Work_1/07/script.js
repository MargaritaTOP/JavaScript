document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('salesInput');
    const button = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    const FIXED_SALARY = 15000;
    const COMMISSION_RATE = 0.10;

    button.addEventListener('click', function() {
        const sales = parseFloat(input.value);
        if (isNaN(sales) || sales < 0) {
            result.textContent = 'Пожалуйста, введите действительное неотрицательное число.';
            return;
        }
        const salary = FIXED_SALARY + COMMISSION_RATE * sales;
        result.textContent = `Зарплата за месяц: ${salary} р.`;
    });
});