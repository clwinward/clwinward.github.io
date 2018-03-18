var requestConditions = new XMLHttpRequest();
requestConditions.open('GET', 'https://api.wunderground.com/api/aab9c2fad2e8a298/conditions/q/MN/Franklin.json', true);
requestConditions.send();

requestConditions.onload = function() {
    var franklinWeather = JSON.parse(requestConditions.responseText);
    console.log(franklinWeather);
    document.getElementById('currentWeather').innerHTML = franklinWeather.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = franklinWeather.current_observation.temp_f;
    document.getElementById('currentWind').innerHTML = franklinWeather.current_observation.wind_mph;
    document.getElementById('currentWindchill').innerHTML = franklinWeather.current_observation.windchill_f;
    document.getElementById('weatherIcon').src = franklinWeather.current_observation.icon_url;
}
var requestForecast = new XMLHttpRequest();
requestForecast.open('GET', 'https://api.wunderground.com/api/aab9c2fad2e8a298/forecast10day/q/MN/Franklin.json', true);
requestForecast.send();

requestForecast.onload = function() {
    var franklinForecast = JSON.parse(requestForecast.responseText);
    console.log(franklinForecast);
    document.getElementById('currentForecast').innerHTML = franklinForecast.forecast.txt_forecast.forecastday[0].fcttext;
}

