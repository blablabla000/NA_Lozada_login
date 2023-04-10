const username = document.getElementById('username');
const password = document.getElementById('password');
const oldresponse = document.querySelector('#response');

username.addEventListener('focus', function(event) {
	event.target.style.backgroundColor = '#f0f0f0';
});
username.addEventListener('blur', function(event) {
	event.target.style.backgroundColor = '#ffffff'; 
});
password.addEventListener('focus', function(event) {
	event.target.style.backgroundColor = '#f0f0f0'; 
});
password.addEventListener('blur', function(event) {
	event.target.style.backgroundColor = '#ffffff'; 
});

form.addEventListener('submit', function(event) {
	event.preventDefault();

	if (username.value === '' && password.value === '') {
		const newresponse = ('Please enter your username and password.');
		console.log('Login error.');
	} else if (username.value === '') {
		const newresponse = ('Please enter your username.');
		console.log('Login error.');
	} else if (password.value === '') {
		const newresponse = ('Please enter your password.');
		console.log('Login error.');
	}
    
    oldresponse.textContent = newresponse;
})