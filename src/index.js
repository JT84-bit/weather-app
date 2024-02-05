import './style.css';
import fetchData from './weatherdata';

const locationNAme = document.querySelector('.name');
const time = document.querySelector('.time');
const weatherImage = document.createElement('img');
const weatherIcon = document.querySelector('.icon');
const conditionText = document.querySelector('.text');
const tempC = document.querySelector('.tempC');
const tempF = document.querySelector('.tempF');
const form = document.querySelector('#searchLocation');
const location = document.querySelector('#location');

const currentWeather = async (newLocation) => {
  const data = await fetchData(newLocation);
  weatherImage.src = data.icon;
  locationNAme.textContent = `${data.name}, ${data.country}`;
  time.innerHTML = data.time;
  weatherImage.src = data.icon;
  tempC.textContent = `${data.temp_c} C`;
  tempF.textContent = `${data.temp_f} F`;
  conditionText.textContent = data.condition;
  weatherIcon.append(weatherImage);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newLocation = location.value;
  form.reset();
  currentWeather(newLocation);
});

currentWeather();
// console.log(currentWeather.current.temp_c);
