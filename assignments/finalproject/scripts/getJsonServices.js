var requestURL = 'https://clwinward.github.io/assignments/finalproject/data/repairs.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();
request.onload = function() {

    var repairdata = JSON.parse(request.responseText);

    document.getElementById('repair1Name').innerHTML = repairdatadata.services[0].name;
    document.getElementById('repair2Name').innerHTML = repairdatadata.services[1].name;
    document.getElementById('repair3Name').innerHTML = repairdatadata.services[2].name;
    document.getElementById('repair4Name').innerHTML = repairdatadata.services[3].name;
    document.getElementById('repair5Name').innerHTML = repairdatadata.services[4].name;

    document.getElementById('repair1Price').innerHTML = repairdatadata.services[0].cost;
    document.getElementById('repair2Price').innerHTML = repairdatadata.services[1].cost;
    document.getElementById('repair3Price').innerHTML = repairdatadata.services[2].cost;
    document.getElementById('repair4Price').innerHTML = repairdatadata.services[3].cost;
    document.getElementById('repair5Price').innerHTML = repairdatadata.services[4].cost;

    document.getElementById('').innerHTML = repairdatadata.services[0].includes[];

}

