// check for Geolocation support
if (navigator.geolocation) {
    console.log('Geolocation is supported!');
} else {
    console.log('Geolocation is not supported for this Browser/OS.');
}

// Geolocation API Call
var apiKey = 'AIzaSyDYZGPu90WYbU5erEi2YGUGNneORumG_rE';

var geolocate = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`;

var latitude;
var longitude;


$.ajax({
    url: geolocate,
    method: "POST"
}).then(function(response) {
    latitude = response.location.lat;
    longitude = response.location.lng;
}).then(function(geocode) {
    // REVERSE Geocoding API
    var geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    $.ajax({
        url: geocode,
        method: "GET"
    }).then(function(locResponse) {
        console.log(locResponse);
        console.log(locResponse.results[0].formatted_address);
        var location = locResponse.results[0].formatted_address;
        $('#location').text(location);
    });
});