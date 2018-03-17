var requestURL = 'https://api.wunderground.com/api/aab9c2fad2e8a298/forecast/geolookup/conditions/q/OR/Springfield.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function() {
    var greenvilleWeather = JSON.parse(request.responseText);
    document.getElementById('currentWeather').innerHTML = greenvilleWeather.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = greenvilleWeather.current_observation.temp_f;
    document.getElementById('currentWind').innerHTML = greenvilleWeather.current_observation.wind_mph;
    document.getElementById('weatherIcon').src = greenvilleWeather.current_observation.icon_url;
    document.getElementById('currentForecast').innerHTML = greenvilleWeather.forecast.txt_forecast.forecastday[0].fcttext;
}