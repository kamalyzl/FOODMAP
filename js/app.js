
//Creamos un objeto dentro de un array, cada objeto es un restaurante
var restaurants = [
  {
    name: 'Rokys',
    tipo: 'Polleria',
    distrito: 'Lima',
    banner: 'assets/images/rokys.jpg'
  }, {
    name: 'La nonita Empanadería',
    tipo: 'Panaderia',
    distrito: 'San juan de miraflores',
    banner: 'assets/images/LanonitaEmpanaderia.jpg',
  }, {
    name: 'Berries del Perú',
    tipo: 'Licoreria',
    distrito: 'Chorrillos',
    banner: 'assets/images/berries.jpg',
  }, {
    name: 'Villa chicken',
    tipo: 'Polleria',
    distrito: 'Surco',
    banner: 'assets/images/villaChicken.jpg',
  }, {
    name: 'La pastana',
    tipo: 'Pastas',
    distrito: 'Surquillo',
    banner: 'assets/images/laPastana.jpg',
  }, {
    name: 'Chifa Express',
    tipo: 'China',
    distrito: 'Miraflores',
    banner: 'assets/images/chifaExpress.jpg',
  }, {
    name: 'Las canastas',
    tipo: 'Polleria',
    distrito: 'Surquillo',
    banner: 'assets/images/lasCanastas.jpg',
  }, {
    name: 'Mr lee',
    tipo: 'China',
    distrito: 'Miraflores',
    banner: 'assets/images/mrLee.jpg',
  }, {
    name: 'Tip top',
    tipo: 'Sangucheria',
    distrito: 'Lima',
    banner: 'assets/images/tiptop.jpg',
  }, {
    name: 'Don tito',
    tipo: 'Sangucheria',
    distrito: 'Pueblo libre',
    banner: 'assets/images/donTito.jpg',
  }, {
    name: 'La salchipaperia',
    tipo: 'Sangucheria',
    distrito: 'San juan de lurigancho',
    banner: 'assets/images/laSalchipaperia.jpg',
  }, {
    name: 'Nocturnos.pe',
    tipo: 'Sangucheria',
    distrito: 'Barranco',
    banner: 'assets/images/nocturnosPe.jpg',
  }, {
    name: 'Wong delivery',
    tipo: 'Polleria',
    distrito: 'Barranco',
    banner: 'assets/images/wongDelivery.jpg',
  }, {
    name: 'sushi Ki Delivery',
    tipo: 'China',
    distrito: 'Barranco',
    banner: 'assets/images/sushiKiDelivery.jpg',
  }, {
    name: 'Sabushi',
    tipo: 'China',
    distrito: 'Miraflores',
    banner: 'assets/images/sabushi.jpg',
  }, {
    name: 'Chifa Deliery',
    tipo: 'China',
    distrito: 'Lima',
    banner: 'assets/images/ChifaDelivery.jpg',
  }, {
    name: 'El punto express',
    tipo: 'China',
    distrito: 'Surco',
    banner: 'assets/images/elPuntoExpress.jpg',
  }, {
    name: 'Chuperman Delivery',
    tipo: 'Licoreria',
    distrito: 'Surco',
    banner: 'assets/images/chuperman.jpg',
  }, {
    name: 'Mashawi',
    tipo: 'China',
    distrito: 'Barranco',
    banner: 'assets/images/mashawi.jpg',
  }, {
    name: 'Pizza Piazzana',
    tipo: 'Pastas',
    distrito: 'Barranco',
    banner: 'assets/images/piazzana.jpg',
  }, {
    name: 'Telepizza',
    tipo: 'FastFood',
    distrito: 'Lima',
    banner: 'assets/images/telepizza.jpg',
  }, {
    name: 'Delicass',
    tipo: 'Criollo',
    distrito: 'Barranco',
    banner: 'assets/images/delicass.jpg',
  }, {
    name: 'Don bajadon',
    tipo: 'Sangucheria',
    distrito: 'Lima',
    banner: 'assets/images/donBajadon.jpg',
  }, {
    name: 'Sofá café',
    tipo: 'Cafe',
    distrito: 'Surco',
    banner: 'assets/images/sofaCafe.jpg',
  }, {
    name: 'Don belisario',
    tipo: 'Polleria',
    distrito: 'Surquillo',
    banner: 'assets/images/donBelisario.jpg',
  }, {
    name: 'Popeyes',
    tipo: 'FastFood',
    distrito: 'Lima',
    banner: 'assets/images/popeyes.jpg',
  }, {
    name: 'Papa johns',
    tipo: 'FastFood',
    distrito: 'Callo',
    banner: 'assets/images/papaJohns.jpg',
  }, {
    name: 'Patrio sangucheria',
    tipo: 'Sangucheria',
    distrito: 'Lima',
    banner: 'assets/images/patrioSangucheria.jpg',
  }, {
    name: 'Restaurante caldero',
    tipo: 'Criollo',
    distrito: 'Lima',
    banner: 'assets/images/elCaldero.jpg',
  }, {
    name: 'Kriollisimo',
    tipo: 'Criollo',
    distrito: 'Lima',
    banner: 'assets/images/kriollisimo.jpg',
  }, {
    name: 'Don Italo',
    tipo: 'Criollo',
    distrito: 'Lima',
    banner: 'assets/images/donItalo.jpg',
  }, {
    name: 'EL enano',
    tipo: 'Sangucheria',
    distrito: 'Miraflores',
    banner: 'assets/images/elEnano.jpg',
  }, {
    name: 'Burge King',
    tipo: 'FastFood',
    distrito: 'Miraflores',
    banner: 'assets/images/burgerKing.jpg',
  }, {
    name: 'Bembos',
    tipo: 'FastFood',
    distrito: 'Callao',
    banner: 'assets/images/bembos.jpg',
  }, {
    name: 'KFC',
    tipo: 'FastFood',
    distrito: 'Surquillo',
    banner: 'assets/images/kfc.jpg',
  }, {
    name: 'La lucha',
    tipo: 'Sangucheria',
    distrito: 'Surquillo',
    banner: 'assets/images/laLucha.jpg',
  }, {
    name: 'Norkys',
    tipo: 'Polleria',
    distrito: 'Surquillo',
    banner: 'assets/images/norkys.jpg',
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
  })
}

function begin() {

  // arrays de los tipos de restaurante
  var polleria = restaurants.filter(restaurants => restaurants.banner == "Polleria");
  var panaderia = restaurants.filter(restaurants => restaurants.tipo == "Panaderia");
  var licoreria = restaurants.filter(restaurants => restaurants.tipo == "Licoreria");
  var pastas = restaurants.filter(restaurants => restaurants.tipo == "Pastas");
  var chifa = restaurants.filter(restaurants => restaurants.tipo == "Chifa");
  var sangucheria = restaurants.filter(restaurants => restaurants.tipo == "Sangucheria");
  var criollo = restaurants.filter(restaurants => restaurants.tipo == "Criollo");
  var fastFood = restaurants.filter(restaurants => restaurants.tipo == "FastFood");
  var cafe = restaurants.filter(restaurants => restaurants.tipo == "Cafe");


  // console.log(nameRestaurant);
  maps();
  sliderVertical();
  tagfiltr();
  
  $("#tags").on('keyup', function (e) {
    var value =  $(this).val();
    for (i = 0; i < nameRestaurant.length; i++) {
      if (value == nameRestaurant[i]) {
        for (j = 0; j < restaurants.length; j++) {
          if (value == restaurants[j].tipo ||value == restaurants[j].name || value == restaurants[j].distrito  ) {
            $('.img').append("<img class='imageRestaurant' src = " + restaurants[j].banner + "></img>");
          } else {
          //  console.log('estas en el primer else');
          }
        }
      } else {
        // console.log('estas en el segundo else');
      }
    }
  });


}