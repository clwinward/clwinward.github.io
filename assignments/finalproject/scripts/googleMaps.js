function initMap() {
    var uluru = {lat: 45.672273, lng: -111.090717};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
