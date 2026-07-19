const passwordInput = document.querySelectorAll('input[type="password"]')[0];
const confirmPasswordInput = document.querySelectorAll('input[type="password"]')[1];
const error = document.getElementById('password-error');

function checkPasswords() {
    if (confirmPasswordInput.value === '') {
        error.textContent = '';
        confirmPasswordInput.setCustomValidity('');
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        error.textContent = 'Пароли не совпадают';
        confirmPasswordInput.setCustomValidity('Пароли не совпадают');
    } else {
        error.textContent = '';
        confirmPasswordInput.setCustomValidity('');
    }
}

passwordInput.addEventListener('input', checkPasswords);
confirmPasswordInput.addEventListener('input', checkPasswords);