var requestURL = 'https://clwinward.github.io/assignments/finalproject/data/repairs.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();
request.onload = function() {

    var repairdata = JSON.parse(request.responseText);

    document.getElementById('repair1Name').innerHTML = repairdata.services[0].name;
    document.getElementById('repair2Name').innerHTML = repairdata.services[1].name;
    document.getElementById('repair3Name').innerHTML = repairdata.services[2].name;
    document.getElementById('repair4Name').innerHTML = repairdata.services[3].name;
    document.getElementById('repair5Name').innerHTML = repairdata.services[4].name;

    document.getElementById('repair1Price').innerHTML = repairdata.services[0].cost;
    document.getElementById('repair2Price').innerHTML = repairdata.services[1].cost;
    document.getElementById('repair3Price').innerHTML = repairdata.services[2].cost;
    document.getElementById('repair4Price').innerHTML = repairdata.services[3].cost;
    document.getElementById('repair5Price').innerHTML = repairdata.services[4].cost;
}

