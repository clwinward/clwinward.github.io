// 10 Day Forecast

var requestURL = 'https://api.wunderground.com/api/aab9c2fad2e8a298/forecast10day/q/MN/Franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var franklinForecast = JSON.parse(request.response);
    populateHeader(forecast);
    showForecast(forecast);
}
function populateHeader(jsonObj) {
    var dayofweek = weekday_short[i].title;
    for(var i=0; i < dayofweek.length; i++){
        var myTH = document.createElement('th');
    }
}

    /*document.getElementById('dayName').innerHTML = franklinForecast.forecast.forecastday.weekday_short[i].title;
    document.getElementById('10dayHigh').innerHTML = franklinForecast.forecast.forecastday.period[i].high.fahrenheight;
    document.getElementById('10dayLow').innerHTML = franklinForecast.forecast.forecastday.period[i].low.fahrenheight;
    document.getElementById('10dayConditions').innerHTML = franklinForecast.forecast.forecastday.period[i].conditions.fahrenheight;
    document.getElementById('10dayIcon').innerHTML = franklinForecast.forecast.forecastday.period[i].icon_url;
}*/

/*


var myTable = document.createElement('td');
myTable.textContent = jsonObj['10dayConditions'];
header.appendChild(myPara);
}

function showHeroes(jsonObj){
    var 10days = jsonObj['period'];

    for(var i=0; i < 10days.length; i++){
        var myTableHeader = document.createElement('th');
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

</script>*/
