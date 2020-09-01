const setValue = {
	text: value => value,
	number: value => Math.abs(value),
	checkbox: value => value,
	email: value => value,
	textarea: value => value,
	password: value => value,
	passwordConfirmation: value => value,
}

const setFormObject = (data, fn) => ({ target }) => {
	const value = target.type === 'checkbox' ? target.checked : target.value;
	return fn({ ...data, [target.name]: setValue[target.type](value) });
}

export default setFormObject;