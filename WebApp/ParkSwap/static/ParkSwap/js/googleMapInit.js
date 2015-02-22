var map = null;
var lat = 44.434596;
var lng = 26.080533;
var randomMultiplier = 20;
function initialize() {
    var map_canvas = document.getElementById('googleMap');

    var map_options = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };

    map = new google.maps.Map(map_canvas, map_options);

    var styles = [
        {
            "featureType": "landscape",
            "stylers": [
                { "visibility": "on" }

            ]
        },{
            "featureType": "poi",
            "stylers": [
                { "visibility": "off" }
            ]
        },{
            "featureType": "road",
            "stylers": [

            ]
        },{
            "elementType": "geometry.stroke",
            "stylers": [
                { "visibility": "off" }
            ]
        },{
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                { "visibility": "on" }

            ]
        },{
            "featureType": "landscape",
            "elementType": "labels.text.stroke",
            "stylers": [
                { "visibility": "on" }
            ]
        },{
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                { "visibility": "on" }
            ]
        },{
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                { "visibility": "off" }

            ]
        },{
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                { "visibility": "on" }
            ]
        },{
            "featureType": "water",

        },{
        }
    ]
    map.setOptions({styles: styles});

    for (var i = 0; i < 20; i++) {
        var randomAddonLat = (Math.random() - 0.5) / 80;
        var randomAddonLng = (Math.random() - 0.5) / 80;
        laglng = new google.maps.LatLng(lat + randomAddonLat, lng + randomAddonLng);
        addStaticMarker(laglng, "Aashir");
    };


    var iw = new google.maps.InfoWindow({
       content: content
    });
    google.maps.event.addListener(marker, "click", function (e) {
        iw.open(map, marker);
    });
}

function addStaticMarker(laglng, name){

    if (!laglng) {
        laglng = map.getCenter();
    }
    var marker = new google.maps.Marker({
        position: laglng,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: "static/ParkSwap/images/markerPrice2.gif"
    });

    var content = '<p>' + name + ' has a free spot here in ' + Math.floor(Math.random() * 10) + ' minute(s).</p>' +
    '<a href="javascript:void(0)">Call ' + name + '</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +
    '<a href="javascript:void(0)">Text ' + name + '</a>';


    var iw = new google.maps.InfoWindow({
       content: content
    });
    google.maps.event.addListener(marker, "click", function (e) {
        iw.open(map, marker);
    });
}


function addMarker(laglng, name){
    if (!laglng) {
        laglng = map.getCenter();
    }
    var marker = new google.maps.Marker({
        position: laglng,
        map: map
    });

    var iw = new google.maps.InfoWindow({

	   content: (name + " has a free spot here in " + Math.floor(Math.random() * 10) + " minute(s).")
    });
    google.maps.event.addListener(marker, "click", function (e) { iw.open(map, this); });


}


/*
$(document).ready(function () {

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* google */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var map_canvas = document.getElementById('googleMap');

var map_options = {
    center: new google.maps.LatLng(44.434596, 26.080533),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
};

var map = new google.maps.Map(map_canvas, map_options);




google.maps.event.addDomListener(window, 'load', initialize);


});
*/
