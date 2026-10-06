function login() {
    event.preventDefault();
    fetch("/user/login", {
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
                showAlert("Успешный вход!", "success");

                setTimeout(() => {
                    document.location = "/";
                }, 1000);
            } else {
                showAlert(data.message, "error");
            }
        })
    })
}

let alertTimer;

function showAlert(message, type = "info") {
    const alert = document.getElementById("alert");

    clearTimeout(alertTimer);

    alert.textContent = message;
    alert.className = `${type} show`;

    alertTimer = setTimeout(() => {
        alert.classList.remove("show");
    }, 10000);
}