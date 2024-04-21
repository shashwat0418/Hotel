let search = document.querySelector('#serach-bar');
let searchbox = document.querySelector('.search-box');
let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar');




search.onclick = () =>{
    searchbox.classList.toggle('active');
}

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

  function getWeather() {
const apiKey = '298671c7fecfb8a484b4add58aa02213';
const city = 'lucknow';

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

fetch(currentWeatherUrl)
  .then(response => response.json())
  .then(data => {
      displayWeather(data);
  })       
}
function displayWeather(data) {
const tempDivInfo = document.getElementById('temp-div');
const weatherInfoDiv = document.getElementById('weather-info');



weatherInfoDiv.innerHTML = '';

tempDivInfo.innerHTML = '';

if (data.cod === '404') {
  weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
} else {
  const cityName = data.name;
  const temperature = Math.round(data.main.temp - 273.15);
  const description = data.weather[0].description;

  const temperatureHTML = `
      <p>${temperature}°C </p>
  `;

  const weatherHtml = `
      
      <p>${description}</p>
  `;

  tempDivInfo.innerHTML = temperatureHTML;
  weatherInfoDiv.innerHTML = weatherHtml;
  weatherIcon.alt = description;

  showImage();
}
}
function showImage() {
const weatherIcon = document.getElementById('weather-icon');

}
function displayWeather(data) {
  const tempDivInfo = document.getElementById('temp-div');
  const weatherInfoDiv = document.getElementById('weather-info');

  weatherInfoDiv.innerHTML = '';
  tempDivInfo.innerHTML = '';

  if (data.cod === '404') {
      weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
  } else {
      const cityName = data.name;
      const temperature = Math.round(data.main.temp - 273.15);
      const description = data.weather[0].description;

      const temperatureHTML = `<p style="font-family: Arial, sans-serif; font-size: 24px; padding-top: 20px;">${temperature}°C </p>`;
      const weatherHtml = `<p style="font-family: Arial, sans-serif; font-size: 18px;">${description}</p>`;

      tempDivInfo.innerHTML = temperatureHTML;
      weatherInfoDiv.innerHTML = weatherHtml;
      weatherIcon.alt = description;

      showImage();
  }
}
