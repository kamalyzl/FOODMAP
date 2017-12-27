


$(window).ready(function () {
    $('#loadPage').delay(1000).fadeOut("slow");
})

$(document).ready(begin);

function begin() {
    maps();
    filter() 
    sliderVertical();   
    // // modal();
    // $("#tags").autocomplete({
    //     source: availableTags
    // });


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

//SLIDER

function sliderVertical() {
    $( "#slider" ).slider();
  }

// filtro

function filter() {
    $.widget( "custom.combobox", {
      _create: function() {
        this.wrapper = $( "<span>" )
          .addClass( "custom-combobox" )
          .insertAfter( this.element );
 
        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
      },
 
      _createAutocomplete: function() {
        var selected = this.element.children( ":selected" ),
          value = selected.val() ? selected.text() : "";
 
        this.input = $( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
          .autocomplete({
            delay: 0,
            minLength: 0,
            source: $.proxy( this, "_source" )
          })
          .tooltip({
            classes: {
              "ui-tooltip": "ui-state-highlight"
            }
          });
 
        this._on( this.input, {
          autocompleteselect: function( event, ui ) {
            ui.item.option.selected = true;
            this._trigger( "select", event, {
              item: ui.item.option
            });
          },
 
          autocompletechange: "_removeIfInvalid"
        });
      },
 
      _createShowAllButton: function() {
        var input = this.input,
          wasOpen = false;
 
        $( "<a>" )
          .attr( "tabIndex", -1 )
          .attr( "title", "Show All Items" )
          .tooltip()
          .appendTo( this.wrapper )
          .button({
            icons: {
              primary: "ui-icon-triangle-1-s"
            },
            text: false
          })
          .removeClass( "ui-corner-all" )
          .addClass( "custom-combobox-toggle ui-corner-right" )
          .on( "mousedown", function() {
            wasOpen = input.autocomplete( "widget" ).is( ":visible" );
          })
          .on( "click", function() {
            input.trigger( "focus" );
 
            // Close if already visible
            if ( wasOpen ) {
              return;
            }
 
            // Pass empty string as value to search for, displaying all results
            input.autocomplete( "search", "" );
          });
      },
 
      _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
        response( this.element.children( "option" ).map(function() {
          var text = $( this ).text();
          if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
              label: text,
              value: text,
              option: this
            };
        }) );
      },
 
      _removeIfInvalid: function( event, ui ) {
 
        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }
 
        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
 
        // Found a match, nothing to do
        if ( valid ) {
          return;
        }
 
        // Remove invalid value
        this.input
          .val( "" )
          .attr( "title", value + " didn't match any item" )
          .tooltip( "open" );
        this.element.val( "" );
        this._delay(function() {
          this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
        this.input.autocomplete( "instance" ).term = "";
      },
 
      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      }
    });
 
    $( "#combobox" ).combobox();
    $( "#toggle" ).on( "click", function() {
      $( "#combobox" ).toggle();
    });
  } 

