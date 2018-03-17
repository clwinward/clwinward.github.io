var requestConditions = new XMLHttpRequest();
requestConditions.open('GET', 'https://api.wunderground.com/api/aab9c2fad2e8a298/conditions/q/OR/Springfield.json', true);
requestConditions.send();

requestConditions.onload = function() {
    var springfieldWeather = JSON.parse(requestConditions.responseText);
    console.log(springfieldWeather);
    document.getElementById('currentWeather').innerHTML = springfieldWeather.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = springfieldWeather.current_observation.temp_f;
    document.getElementById('currentWind').innerHTML = springfieldWeather.current_observation.wind_mph;
    document.getElementById('currentWindchill').innerHTML = springfieldWeather.current_observation.windchill_f;
    document.getElementById('weatherIcon').src = springfieldWeather.current_observation.icon_url;
}
var requestForecast = new XMLHttpRequest();
requestForecast.open('GET', 'https://api.wunderground.com/api/aab9c2fad2e8a298/forecast10day/q/OR/Springfield.json', true);
requestForecast.send();

requestForecast.onload = function() {
    var springfieldForecast = JSON.parse(requestForecast.responseText);
    console.log(springfieldForecast);
    document.getElementById('currentForecast').innerHTML = springfieldForecast.forecast.txt_forecast.forecastday[0].fcttext;
}
