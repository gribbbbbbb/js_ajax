function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

function submit() {
    const value_1 = document.getElementById("input_1").value;
    const value_2 = document.getElementById("input_2").value;
    if ((!isNumber(+value_1) && !isNumber(+value_2)) || ((value_1 < 1 || value_1 > 10) && (value_2 < 1 || value_2 > 10))) {
        images.innerHTML = "";
        message.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    } else if (((value_2 > 10) || (value_2 < 1) || !isNumber(+value_2)) && ((value_1 <= 10) || (value_1 >= 1) || !isNumber(+value_1))) {
        images.innerHTML = "";
        message.innerHTML = "Лимит вне диапазона от 1 до 10"
    } else if (((value_1 > 10) || (value_1 < 1) || !isNumber(+value_1)) && ((value_2 <= 10) || (value_2 >= 1) || !isNumber(+value_2))) {
        images.innerHTML = "";
        message.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    } else {
        message.innerHTML = "";
        makeRequest(value_1, value_2)
    }
}

function makeRequest(page, limit) {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
    images.innerHTML = ""
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const imageURL = item.download_url;
                const img = document.createElement("img");
                img.src = imageURL
                document.getElementById("images").appendChild(img);
            });
            localStorage.setItem("lastPage", page)
            localStorage.setItem("lastLimit", limit)
        })
}

window.addEventListener('DOMContentLoaded', () => {
    const lastPage = localStorage.getItem('lastPage')
    const lastLimit = localStorage.getItem('lastLimit')
    makeRequest(lastPage, lastLimit);
});




