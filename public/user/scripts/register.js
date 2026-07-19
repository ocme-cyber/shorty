const passwordInput = document.querySelectorAll('input[type="password"]')[0];
const confirmPasswordInput = document.querySelectorAll('input[type="password"]')[1];

if (passwordInput === confirmPasswordInput) {
    fetch("/user/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        username: document.querySelector('input[placeholder="Логин"]').value,
        password: document.querySelector('input[placeholder="Пароль"]').value,
        }).then(response => {
            document.location = '/'
        })
    })
}

