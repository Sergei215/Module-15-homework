const wsUri = "wss://echo.websocket.org/";

const output = document.getElementById("output");
const btnGeo = document.querySelector('.geo');
const btnSend = document.querySelector('.j-btn-send');

let websocket;
let message;

const error = () => {
    message = 'Невозможно получить ваше местоположение';
}

const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    geolocationLinc= `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
    localStorage.setItem('Geolocation',geolocationLinc)
}


function writeToScreen(message) {
    let pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

document.addEventListener("DOMContentLoaded",()=>{
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) {
        writeToScreen("Соединение установлено");
    };
    websocket.onmessage = function(evt) {
        const str=evt.data
        if (!str.includes('www.openstreetmap.org')){
            writeToScreen(
                '<span style="color: blue;">Ответ: ' + evt.data+'</span>'
            )
        }        ;
    };
    websocket.onerror = function(evt) {
        writeToScreen(
            '<span style="color: red;">Ошибка:</span> ' + evt.data
        );
    };
    })

document.addEventListener("DOMContentLoaded",()=>{
    if (!navigator.geolocation) {
       console.log('Geolocation не поддерживается вашим браузером');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
})

btnSend.addEventListener('click', () => {

    let message = document.getElementsByClassName("inp-msg")[0].value;
    writeToScreen("Сообщение: " + message);
    websocket.send(message);
});

btnGeo.addEventListener('click', () => {

    let message = localStorage.getItem('Geolocation');

    writeToScreen("Сообщение: " + message);
    websocket.send(message);
})