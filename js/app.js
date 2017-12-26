


$(window).ready(function () {

    $('#loadPage').delay(2000).fadeOut("slow");
})


$(document).ready(begin);

function begin() {
    maps();
    $("#tags").autocomplete({
        source: availableTags
    });

}

// Insertando mapa
var map;
function initMap() {
    var mapCenter = new google.maps.LatLng(47.6145, -122.3418); //Google map Coordinates
    map = new google.maps.Map($("#map")[0], {
        center: mapCenter,
        zoom: 10
    });
}

function maps() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            infoWindow = new google.maps.InfoWindow({ map: map });
            var pos = { lat: position.coords.latitude, lng: position.coords.longitude };
            infoWindow.setPosition(pos);
            infoWindow.setContent("Found your location <br />Lat : " + position.coords.latitude + " </br>Lang :" + position.coords.longitude);
            map.panTo(pos);
        });
    } else {
        console.log("Browser doesn't support geolocation!");
    }
}

// Lista de restaurante
var availableTags = [
    "Rokys",
    "Norkys",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
];

