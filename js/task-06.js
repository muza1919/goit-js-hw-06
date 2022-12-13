const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', event => {
	if (event.target.value.length == validationInput.getAttribute('data-length')) {
		if (validationInput.classList.contains('invalid')) {
			validationInput.classList.remove('invalid');
		}
        validationInput.classList.add('valid');
	} else {
		if (validationInput.classList.contains('valid')) {
			validationInput.classList.remove('valid');
		}
		validationInput.classList.add('invalid');
	}
})