
//Creamos un objeto dentro de un array, cada objeto es un restaurante
var restaurants = [
  {
    name: 'Rokys',
    tipo: 'Polleria',
    distrito: 'Lima',
    banner: 'http://lorempixel.com/200/200'
  }, {
    name: 'La nonita Empanadería',
    tipo: 'Panaderia',
    distrito: 'San juan de miraflores',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Pet Lover',
    tipo: 'Panaderia',
    distrito: 'Miraflores',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Berries del Perú',
    tipo: 'Licoreria',
    distrito: 'Chorrillos',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Villa chicken',
    tipo: 'Polleria',
    distrito: 'Surco',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'La pastana',
    tipo: 'Pastas',
    distrito: 'Surquillo',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Chifa Express',
    tipo: 'China',
    distrito: 'Miraflores',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Las canastas',
    tipo: 'Polleria',
    distrito: 'Surquillo',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Mr lee',
    tipo: 'China',
    distrito: 'Miraflores',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Tip top',
    tipo: 'Sangucheria',
    distrito: 'Lima',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Don tito',
    tipo: 'Sangucheria',
    distrito: 'Pueblo libre',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'La salchipaperia',
    tipo: 'Sangucheria',
    distrito: 'San juan de lurigancho',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Nocturnos.pe',
    tipo: 'Sangucheria',
    distrito: 'Barranco',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Wong delivery',
    tipo: 'Polleria',
    distrito: 'Barranco',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'sushi Ki Delivery',
    tipo: 'China',
    distrito: 'Barranco',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Sabushi',
    tipo: 'China',
    distrito: 'Miraflores',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Chifa Deliery',
    tipo: 'China',
    distrito: 'Lima',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'El punto express',
    tipo: 'China',
    distrito: 'Surco',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Chuperman Delivery',
    tipo: 'Sangucheria',
    distrito: 'Surco',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Sr Saltado',
    tipo: 'Criollo',
    distrito: 'Surco',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Mashawi',
    tipo: 'China',
    distrito: 'Barranco',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Pizza Piazzana',
    tipo: 'Pastas',
    distrito: 'Barranco',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Telepizza',
    tipo: 'FastFood',
    distrito: 'Lima',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Delicass',
    tipo: 'Criollo',
    distrito: 'Barranco',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Don bajadon',
    tipo: 'Sangucheria',
    distrito: 'Lima',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'La comelona',
    tipo: 'Sangucheria',
    distrito: 'Lima',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Sofá café',
    tipo: 'Cafe',
    distrito: 'Surco',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Don belisario',
    tipo: 'Polleria',
    distrito: 'Surquillo',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Popeyes',
    tipo: 'FastFood',
    distrito: 'Lima',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Papa johns',
    tipo: 'FastFood',
    distrito: 'Callo',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Patrio sangucheria',
    tipo: 'Sangucheria',
    distrito: 'Lima',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Restaurante caldero',
    tipo: 'Criollo',
    distrito: 'Lima',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Kriollisimo',
    tipo: 'Criollo',
    distrito: 'Lima',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Don Italo',
    tipo: 'Criollo',
    distrito: 'Lima',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'EL enano',
    tipo: 'Sangucheria',
    distrito: 'Miraflores',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Burge King',
    tipo: 'FastFood',
    distrito: 'Miraflores',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Bembos',
    tipo: 'FastFood',
    distrito: 'Callao',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'KFC',
    tipo: 'FastFood',
    distrito: 'Surquillo',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'La lucha',
    tipo: 'Sangucheria',
    distrito: 'Surquillo',
    banner: 'http://lorempixel.com/200/200',
  }, {
    name: 'Norkys',
    tipo: 'Polleria',
    distrito: 'Surquillo',
    banner: 'http://lorempixel.com/200/200',
  }
]

//metodo creado para eliminar arrays repetidos
Array.prototype.unique = function (a) {
  return function () { return this.filter(a) }
}(function (a, b, c) {
  return c.indexOf(a, b + 1) < 0
});


$(window).ready(function () {
  $('#loadPage').delay(1000).fadeOut("slow");
})
$(document).ready(begin);
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

// REALIZAMOS LA SELECCION DE LO QUE QUEREMOS FILTRA Y LO UTILIZAMOS EN UNA FUNCION TAG

var realArray = $.makeArray(restaurants); // convertirmos en array los objetos dentro del restaurante para luego manipularlo con map() 
var nameRestaurant = $.map(realArray, function (val, i) {  // Array con los nombres de los restauranets 
  return val.name;
}).unique();
var tipoRestaurant = $.map(realArray, function (val, i) {// Array con los tipos de restauranets 
  return val.tipo;
}).unique();
var distritoRestaurant = $.map(realArray, function (val, i) {// Array con los distrito  de los restauranets 
  return val.distrito;
}).unique();
var listRestaurants = $.merge(nameRestaurant, tipoRestaurant, distritoRestaurant);
var listRestaurantsFinal = $.merge(listRestaurants, distritoRestaurant);

function tagfiltr() {
  $("#tags").autocomplete({
    source: listRestaurantsFinal
  });
}
function begin() {
  maps();
  sliderVertical();
  tagfiltr();
}

function filtroRestaurante() {


}

// console.log(distritoRestaurant.unique());

// arrays de los tipos de restaurante
var polleria = restaurants.filter(restaurants => restaurants.tipo == "Polleria");
var panaderia = restaurants.filter(restaurants => restaurants.tipo == "Panaderia");
var licoreria = restaurants.filter(restaurants => restaurants.tipo == "Licoreria");
var pastas = restaurants.filter(restaurants => restaurants.tipo == "Pastas");
var chifa = restaurants.filter(restaurants => restaurants.tipo == "Chifa");
var sangucheria = restaurants.filter(restaurants => restaurants.tipo == "Sangucheria");
var criollo = restaurants.filter(restaurants => restaurants.tipo == "Criollo");
var fastFood = restaurants.filter(restaurants => restaurants.tipo == "FastFood");
var cafe = restaurants.filter(restaurants => restaurants.tipo == "Cafe");

// console.log( nameRestaurant);
// console.log(polleria);
// console.log( tipoRestaurant);
// console.log(listRestaurants);