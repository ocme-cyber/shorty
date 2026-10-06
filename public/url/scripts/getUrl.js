async function getUrl() {
    const originalUrl = document.querySelector(".box input").value;

    if(!originalUrl) {
        return showError("Введите ссылку")
    }

    const response = await fetch("/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ originalUrl })
    });

    const data = await response.json();
    console.log(data, response)
    if (response.status === 401) {
        window.location.href = "/user/login";
        return;
    }

    if (!response.ok) {
        return showError(data.message)
    }

    showSuccess(`Ссылка создана: ${data.shortUrl}`)

}


const message = document.getElementById("message");

function showError(text) {
    message.className = "message error";
    message.textContent = text;
}

function showSuccess(text) {
    message.className = "message success";
    message.textContent = text;
}

function clearMessage() {
    message.className = "message";
    message.textContent = "";
}