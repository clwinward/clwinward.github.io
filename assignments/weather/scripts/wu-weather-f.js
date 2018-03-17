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
function get10dayForecast(jsonObj){
    var franklin10dayForecast = jsonObj['forecast.simpleforecast.forecastday[0]'];

        for (var i=0 ; i < 10 ; i++){
            var myForecast = document.createElement('td');

            myForecast.textContent = franklin10dayForecast[i].high.fahrenheit + ' &deg;F' + franklin10dayForecast[i].low.fahrenheit + ' &deg;F';
        }
}


/*function showHeroes(jsonObj){
    var heroes = jsonObj['members'];

    for(var i=0; i < heroes.length; i++){
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        var superPowers = heroes[i].powers;
        for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
*/
