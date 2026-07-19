fetch("/user/login", {
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