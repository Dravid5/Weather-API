const app = document.querySelector('.climate-app');
const temp = document.querySelector('.temp');
const dateoutput = document.querySelector('.date');
const timeoutput = document.querySelector('.time');
const conditionoutput = document.querySelector('.condation');
const nameoutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudoutput = document.querySelector('.cloud');
const form = document.querySelector('.locationinput');
const windOutput = document.querySelector('.wind');
const search = document. querySelector('.search');
const btn = document. querySelector('.submit');
const cities = document.querySelectorAll('.city');
const citiesname = document.querySelector('.cityname');

let cityInput = "Chennai";
cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML;
        console.log(cityInput);
        fetchWeatherData();
        // app.style.opacity = "0";
    });
});

form.addEventListener('submit',(e)=>{
    if (search.value.length == 0){
        alert('please type in a city name');
    } else {
        cityInput = search.value;
        fetchWeatherData();
        search.value ="";
        //   app.style.opacity = "0";
    }
    e.preventDefault();
});
function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date('${day}/${month}/${year}').getDay()];
};
 function fetchWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&units=metric&appid=fc769a5605837af7fe06844eadb034df')
    .then(response => response.json())
    .then(data => {
        temp.innerHTML = data.main.temp+"&#176";
        citiesname.innerHTML = data.name
        console.log(data);
    })
 }  
 const date = data.location.localtime;
 const y = parseInt(date.substr(0,4));
 const m = parseInt(date.substr(5,2));
 const d = parseInt(date.substr(8,2));
 const time = date.substr(11);

 dateoutput.innerHTML = "${dayoftheweek(d,m,y)} ${d} ${m} ${y}"
 timeoutput.innerHTML = time;

 nameoutput.innerHTML = data.location.time



