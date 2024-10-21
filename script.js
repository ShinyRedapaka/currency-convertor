const currency_1 = document.getElementById('source-currency');
const currency_2 = document.getElementById('target-currency');
const input = document.getElementById('number');
const exchange_button = document.getElementById('convert');
const result = document.getElementById('result'); 
const exchange = document.getElementById('exchange');

let exchangeRates = {}; // To store exchange rates

// Fetch exchange rates
function select_countries() {
    fetch('https://v6.exchangerate-api.com/v6/277d52e4dd82f06a4c34cd5a/latest/USD')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            exchangeRates = data.conversion_rates; 
            currencyDropdowns(exchangeRates);
        })
        .catch(error => console.error('Error fetching exchange rates:', error));
}

// dropdowns with currency options
function currencyDropdowns(rates) {
    Object.keys(rates).forEach(currency => {
        const opt1 = document.createElement('option');
        opt1.value = currency;
        opt1.textContent = currency;
        currency_1.appendChild(opt1); 
        
        const opt2 = document.createElement('option');
        opt2.value = currency;
        opt2.textContent = currency;
        currency_2.appendChild(opt2);
    });
}

function cal() {
    const currency_one = currency_1.value;
    const currency_two = currency_2.value;
    const inputValue = input.value.trim(); 
    const amount = parseFloat(inputValue); 

    if (inputValue === "") {
        result.innerText = "Please enter some value.";
        return;
    }


    if (!currency_one || !currency_two) {
        result.innerText = "Please select both currencies.";
        return;
    }

    if (isNaN(amount)) {
        result.innerText = "Please enter a valid number.";
        return;
    }

    const rate = exchangeRates[currency_two] / exchangeRates[currency_one];
    
    if (!rate) {
        result.innerText = "Error: Rate not found.";
        return;
    }

    const convertedAmount = (amount * rate).toFixed(2);
    result.innerText = `${amount} ${currency_one} = ${convertedAmount} ${currency_two}`;
}

function interChange() {
    const temp = currency_1.value;
    currency_1.value = currency_2.value;
    currency_2.value = temp;
    cal(); // calculate after swap
}

select_countries();
exchange.addEventListener('click', interChange);
exchange_button.addEventListener('click', cal);
