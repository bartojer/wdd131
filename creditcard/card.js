function isExpirationValid(month, year) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth();

    const expMonth = parseInt(month);
    const expYear = parseInt(year);
    
    if (isNaN(expMonth) || isNaN(expYear) || 
    expMonth < 1 || expMonth > 12 ||
    expYear < 0 || expYear > 99) 
    {
        return false;
    }
    

    return (expYear > currentYear) || (expYear === currentYear && expMonth >= currentMonth);
}

function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}

function displayError(msg) {
	document.querySelector('.errorMsg').innerHTML = msg
}

function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	console.log(this.cardNumber.value)
	displayError('')

	if (isNaN(this.cardNumber.value)) {
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		errorMsg += 'Card number is not a valid card number\n'
	}

    const month = this.querySelector('#exp-month').value;
    const year = this.querySelector('#exp-year').value;

    if (!isExpirationValid(month, year))
    {
        errorMsg += 'Expiration date must be in the future\n';
    }

	if (errorMsg !== '') {
		displayError(errorMsg)
		return false
	}
    
	return true
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler)