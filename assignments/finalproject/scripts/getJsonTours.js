var requestURL = 'https://clwinward.github.io/assignments/finalproject/data/bikeInfo.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.send();

request.onload = function() {
var bikedata = JSON.parse(request.responseText);
document.getElementById('blueName').innerHTML = bikedata.bikes[0].name;
document.getElementById('bluegreenName').innerHTML = bikedata.bikes[2].name;
document.getElementById('redName').innerHTML = bikedata.bikes[1].name;

document.getElementById('bluePrice').innerHTML = bikedata.bikes[0].price;
document.getElementById('bluegreenPrice').innerHTML = bikedata.bikes[2].price;
document.getElementById('redPrice').innerHTML = bikedata.bikes[1].price;

document.getElementById('blueFeatures1').innerHTML = bikedata.bikes[0].features[0];
document.getElementById('blueFeatures2').innerHTML = bikedata.bikes[0].features[1];
document.getElementById('blueFeatures3').innerHTML = bikedata.bikes[0].features[2];
document.getElementById('blueFeatures4').innerHTML = bikedata.bikes[0].features[3];
document.getElementById('blueFeatures5').innerHTML = bikedata.bikes[0].features[4];

document.getElementById('bluegreenFeatures1').innerHTML = bikedata.bikes[2].features[0];
document.getElementById('bluegreenFeatures2').innerHTML = bikedata.bikes[2].features[1];
document.getElementById('bluegreenFeatures3').innerHTML = bikedata.bikes[2].features[2];
document.getElementById('bluegreenFeatures4').innerHTML = bikedata.bikes[2].features[3];
document.getElementById('bluegreenFeatures5').innerHTML = bikedata.bikes[2].features[4];

document.getElementById('redFeatures1').innerHTML = bikedata.bikes[1].features[0];
document.getElementById('redFeatures2').innerHTML = bikedata.bikes[1].features[1];
document.getElementById('redFeatures3').innerHTML = bikedata.bikes[1].features[2];
document.getElementById('redFeatures4').innerHTML = bikedata.bikes[1].features[3];
document.getElementById('redFeatures5').innerHTML = bikedata.bikes[1].features[4];
}