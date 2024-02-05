function processWeather(data) {
  const newWeather = {};
  newWeather.name = data.location.name;
  newWeather.country = data.location.country;
  newWeather.temp_c = data.current.temp_c;
  newWeather.temp_f = data.current.temp_f;
  newWeather.icon = data.current.condition.icon;
  newWeather.condition = data.current.condition.text;
  newWeather.time = data.current.last_updated;
  newWeather.tommorowTempC = data.forecast.forecastday[1].hour[14].temp_c;
  newWeather.tommorowTempF = data.forecast.forecastday[1].hour[14].temp_f;
  newWeather.tommorowIcon = data.forecast.forecastday[1].hour[14].condition.icon;
  newWeather.tommorowText = data.forecast.forecastday[1].hour[14].condition.text;
  return newWeather;
}

async function fetchData(location = 'tampere') {
  try {
    const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=71166ee9ea884589b83200410240202&q=${location}&days=2`, { mode: 'cors' });
    const newData = await data.json();
    console.log(newData);

    return processWeather(newData);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default fetchData;
