var database = firebase.database();

var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAKD3qFrC5SVawqQSZIxGe659YVIUZ39IY'
});

var lat;
var lng;

database.ref("events/")
    .on("child_added", function (snapshot) {
        var sv = snapshot.val();
        key = snapshot.key;

        var eventLocation = sv.location;

        // Geocode an address.
        googleMapsClient.geocode({
            address: eventLocation
        }, function (err, response) {
            if (!err) {
                var geolocation = response.json.results.geometry.location;
                lat = geolocation.lat;
                lng = geolocation.lng;
                database.ref().update(lat, lng);
            }
        });





    });