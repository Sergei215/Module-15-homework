const timezone = document.querySelector('#timezone');
const dateTimeTxt = document.querySelector('#date_time_txt');
const btn = document.querySelector('.j-btn-test');

let latitude;
let longitude;
let dataTimeZone;

const useRequest = () => {
    return fetch('https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat='+`${latitude}`+'&long='+`${longitude}`+'')
        .then((response) => {
            return response.json();
        })
        .then((data)=>{
            dataTimeZone = data;
            console.log(dataTimeZone.timezone)
            timezone.textContent=`Временная зона, в которой находится пользователь: ${dataTimeZone.timezone} `
            dateTimeTxt.textContent=`Местные дата и время: ${dataTimeZone.date_time_txt} `
        })
        .catch(() => { console.log('Ошибка запроса') });
}

btn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(function (position){
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        useRequest()

    })
});


