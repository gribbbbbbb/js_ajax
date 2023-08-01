function submit() {
    const value = document.querySelector('input').value;
    if ((value > 10) || (value < 1)) {
        images.innerHTML = ""
        message.innerHTML = "число вне диапазона от 1 до 10"
    } else {
        message.innerHTML = ""
        makeRequest(value);
    }
}

function makeRequest(limit) {
    const xhr = new XMLHttpRequest();
    const url = `https://picsum.photos/v2/list?limit=${limit}`;

    xhr.onload = function() {
        const data = JSON.parse(xhr.responseText);
        displayImages(data);
    };
    
    xhr.open("get", url, true);
    xhr.send();
}

function displayImages(data) {
    const images = document.getElementById("images");
    images.innerHTML = ""
    data.forEach(item =>{
        const img = document.createElement('img');
        img.src = item.download_url;
        images.appendChild(img);
    })
}