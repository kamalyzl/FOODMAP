$(window).ready(function () {
    $('#loadPage').delay(1000).fadeOut("slow");
})

$(document).ready(begin);

function begin() {
    maps();
    sliderVertical();
    tagfiltr();
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

//SLIDER
function sliderVertical() {
    $("#slider").slider();
}

// INPUT PARA EL FILTRO
function tagfiltr() {
    $("#tags").autocomplete({
        source: availableTags
    });
}






















// Lista de restaurante
var availableTags = [
    "Rokys",
    "Norkys",
    "La nonita Empanadería",
    "Previos online",
    "Pet Lover",
    "Berries del Perú",
    "Villa chicken",
    "La pastana",
    "Chifa Express",
    "Las canastas",
    "Mr lee",
    "Tip top",
    "Don tito",
    "La salchipaperia",
    "Nocturnos.pe",
    "Wong delivery",
    "sushi Ki Delivery",
    "Sabushi",
    "Chifa Deliery",
    "El punto express",
    "Chuperman Delivery",
    "Sr Saltado",
    "Mashawi",
    "Pizza Piazzana",
    "Telepizza",
    "Delicass",
    "Don bajadon",
    "La comelona",
    "Sofá café",
    "Don belisario",
    "Popeyes",
    "Papa johns",
    "Patrio sangucheria",
    "Restaurante caldero",
    "Kriollisimo",
    "Don Italo",
    "FKC",
    "EL enano",
    "Burge King",
    "Bembos",
    "La Luchga"
];


