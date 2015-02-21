var map = null;
function initialize() {
    var map_canvas = document.getElementById('googleMap');

    var map_options = {
        center: new google.maps.LatLng(44.434596, 26.080533),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };

    map = new google.maps.Map(map_canvas, map_options);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(44.434596, 26.080533),
        map: map,
        title: 'Hello World!'
    });
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


}

function addMarker(){
    var marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
	var iw = new google.maps.InfoWindow({
	    content: "Home For Sale"
	});
	google.maps.event.addListener(marker, "click", function (e) { iw.open(map, this); });
        
    });
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
