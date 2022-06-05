const error = document.getElementById('error');
const password1 = document.getElementById('password');
const password2 = document.getElementById('confirm-password');

function onChange() {
    const password = document.querySelector('input[name=password]')
    const confirm = document.querySelector('input[name=confirm-password]')
    if (password.value === confirm.value) {
        confirm.setCustomValidity('');
        error.style.display = 'none';
        password1.style.border = '2px solid green';
        password2.style.border = '2px solid green';
    } else {
        confirm.setCustomValidity('Passwords do not match');
        error.style.display = 'block';
        password1.style.border = '2px solid red';
        password2.style.border = '2px solid red';
    }
}