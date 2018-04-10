/*request.onload function() {
    var bikedata = JSON.parse(data/bikeInfo.json);

    document.getElementById('blueName').innerHTML = bikedata[0].name;


    document.getElementById('bluegreenName').innerHTML = bikedata[1].name;


    document.getElementById('redName').innerHTML = bikedata[2].name;

}*/

var requestURL = 'https://clwinward.github.io/assignments/finalproject/data/bikeInfo.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.send();

request.onload = function() {
   var bikedata = JSON.parse(request.responseText);
   document.getElementById('blueName').innerHTML = bikedata.bikes[0].name;
   document.getElementById('bluegreenName').innerHTML = bikedata.bikes[2].name;
   document.getElementById('redName').innerHTML = bikedata.bikes[1].name;

}

