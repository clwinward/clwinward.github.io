var requestURL = 'https://api.wunderground.com/api/aab9c2fad2e8a298/forecast/geolookup/conditions/q/MN/Franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function() {
    var franklinWeather = JSON.parse(request.responseText);
    document.getElementById('currentWeather').innerHTML = franklinWeather.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = franklinWeather.current_observation.temp_f;
    document.getElementById('currentWind').innerHTML = franklinWeather.current_observation.wind_mph;
    document.getElementById('weatherIcon').src = franklinWeather.current_observation.icon_url;
    document.getElementById('currentForecast').innerHTML = franklinWeather.forecast.txt_forecast.forecastday[0].fcttext;

    document.getElementById('10dayHigh').innerHTML = franklinWeather.forecast10day.forecastday.period[i].high.fahrenheight;
    document.getElementById('10dayLow').innerHTML = franklinWeather.forecast10day.forecastday.period[i].low.fahrenheight;
    document.getElementById('10dayConditions').innerHTML = franklinWeather.forecast10day.forecastday.period[i].conditions.fahrenheight;
    document.getElementById('10dayIcon').innerHTML = franklinWeather.forecast10day.forecastday.period[i].icon.fahrenheight;
}
