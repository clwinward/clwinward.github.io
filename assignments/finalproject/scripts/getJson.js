function load() {
    var bikedata = JSON.parse(bikes);

    document.getElementById('blueName').innerHTML = bikedata[0].name;


    document.getElementById('bluegreenName').innerHTML = bikedata[1].name;


    document.getElementById('redName').innerHTML = bikedata[2].name;

}

