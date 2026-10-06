function register() {
    event.preventDefault();
    console.log("Click")
    const passwordInput = document.querySelectorAll('input[type="password"]')[0].value;
    const confirmPasswordInput = document.querySelectorAll('input[type="password"]')[1].value;
    console.log(passwordInput, confirmPasswordInput)

    if (passwordInput === confirmPasswordInput) {
        console.log('fetch')
        console.log(document.querySelector('input[placeholder="Логин"]').value, document.querySelector('input[placeholder="Пароль"]').value)
        fetch("/user/register", {
            
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    login: document.querySelector('input[placeholder="Логин"]').value,
                    password: document.querySelector('input[placeholder="Пароль"]').value,
                }
            })
        }).then(response => {
                response.json().then(data => {
                    console.log(data)
                    if (data.success) {
                        document.location = '/'
                    } else {
                        document.getElementById('password-error').textContent = data.message
                    }
                })
            })
    }
}