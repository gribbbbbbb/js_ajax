function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

function submit() {
    const value_1 = document.getElementById("input_1").value;
    const value_2 = document.getElementById("input_2").value;
    if (isNumber(+value_1) && isNumber(+value_2) && value_1 >= 100 && value_1 <= 300 && value_2 >= 100 && value_2 <= 300) {
        message.innerHTML = "";
        makeRequest(value_1, value_2);
    } else {
        images.innerHTML = "";
        message.innerHTML = "одно из чисел вне диапазона от 100 до 300";
    }
}

function makeRequest(width, height) {
    const url = `https://picsum.photos/${width}/${height}`;
    images.innerHTML = "";
    fetch (url) 
        .then(response => response.blob())
        .then(blobData => {
            const img = document.createElement("img");
            img.src = URL.createObjectURL(blobData);
            document.getElementById("images").appendChild(img);
        })
}