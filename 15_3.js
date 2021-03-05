const status = document.querySelector('#status');
const btn = document.querySelector('.j-btn-test');

const error = () => {
    status.textContent = 'Информация о местоположении недоступна';
}

const success = (position) => {

    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const height=window.screen.height
    const width=window.screen.width

    status.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °, Высота экрана: ${height}, Ширина экрана: ${width}`;
}

btn.addEventListener('click', () => {
    if (!navigator.geolocation) {
        status.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        status.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
});