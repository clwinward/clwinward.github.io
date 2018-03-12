var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.send();

request.onload = function() {
    var townData = JSON.parse(request.responseText);

    document.getElementById('franklinMotto').innerHTML = townData.towns[0].motto;
    document.getElementById('franklinYear').innerHTML = townData.towns[0].yearFounded;
    document.getElementById('franklinPopulation').innerHTML = townData.towns[0].currentPopulation;
    document.getElementById('franklinRainfall').innerHTML = townData.towns[0].averageRainfall;

    document.getElementById('greenvilleMotto').innerHTML = townData.towns[1].motto;
    document.getElementById('greenvilleYear').innerHTML = townData.towns[1].yearFounded;
    document.getElementById('greenvillePopulation').innerHTML = townData.towns[1].currentPopulation;
    document.getElementById('greenvilleRainfall').innerHTML = townData.towns[1].averageRainfall;

    document.getElementById('springfieldMotto').innerHTML = townData.towns[3].motto;
    document.getElementById('springfieldYear').innerHTML = townData.towns[3].yearFounded;
    document.getElementById('springfieldPopulation').innerHTML = townData.towns[3].currentPopulation;
    document.getElementById('springfieldRainfall').innerHTML = townData.towns[3].averageRainfall;
}

