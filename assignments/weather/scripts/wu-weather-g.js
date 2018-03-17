var requestConditions = new XMLHttpRequest();
requestConditions.open('GET', 'https://api.wunderground.com/api/aab9c2fad2e8a298/conditions/q/TX/Greenville.json', true);
requestConditions.send();

requestConditions.onload = function() {
    var greenvilleWeather = JSON.parse(requestConditions.responseText);
    console.log(greenvilleWeather);
    document.getElementById('currentWeather').innerHTML = greenvilleWeather.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = greenvilleWeather.current_observation.temp_f;
    document.getElementById('currentWind').innerHTML = greenvilleWeather.current_observation.wind_mph;
    document.getElementById('currentWindchill').innerHTML = greenvilleWeather.current_observation.windchill_f;
    document.getElementById('weatherIcon').src = greenvilleWeather.current_observation.icon_url;
}
var requestForecast = new XMLHttpRequest();
requestForecast.open('GET', 'https://api.wunderground.com/api/aab9c2fad2e8a298/forecast10day/q/TX/Greenville.json', true);
requestForecast.send();

requestForecast.onload = function() {
    var greenvilleForecast = JSON.parse(requestForecast.responseText);
    console.log(greenvilleForecast);
    document.getElementById('currentForecast').innerHTML = greenvilleForecast.forecast.txt_forecast.forecastday[0].fcttext;
}
