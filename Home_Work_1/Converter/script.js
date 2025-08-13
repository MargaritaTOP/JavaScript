document.addEventListener('DOMContentLoaded', async function() {
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const convertButton = document.getElementById('convertButton');
    const resultDiv = document.getElementById('result');

    let exchangeRates = {};

    async function fetchCurrencies() {
        try {
            const response = await fetch('https://open.er-api.com/v6/latest/USD');
            const data = await response.json();
            if (data.result !== 'success') {
                throw new Error('Failed to fetch exchange rates');
            }

            exchangeRates = data.rates;
            const currencies = Object.keys(exchangeRates);

            currencies.forEach(currency => {
                const option1 = document.createElement('option');
                option1.value = currency;
                option1.textContent = currency;
                fromCurrencySelect.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = currency;
                option2.textContent = currency;
                toCurrencySelect.appendChild(option2);
            });

            fromCurrencySelect.value = 'USD';
            toCurrencySelect.value = 'EUR';
        } catch (error) {
            resultDiv.textContent = 'Ошибка загрузки курсов валют. Попробуйте позже.';
            resultDiv.style.color = 'red';
        }
    }

    function convertCurrency() {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = 'Введите корректную сумму.';
            resultDiv.style.color = 'red';
            return;
        }

        if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
            resultDiv.textContent = 'Курсы валют недоступны.';
            resultDiv.style.color = 'red';
            return;
        }

        const amountInUSD = amount / exchangeRates[fromCurrency];

        const convertedAmount = (amountInUSD * exchangeRates[toCurrency]).toFixed(2);

        resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        resultDiv.style.color = '#10b981';
    }

    await fetchCurrencies();

    convertButton.addEventListener('click', convertCurrency);
});