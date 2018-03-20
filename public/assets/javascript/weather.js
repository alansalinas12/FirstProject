var database = firebase.database();
var weatherData;

database.ref('Users/' + auth + '/events/' + eventId)
    .on("value", function (snapshot) {
        var sv = snapshot.val();
        key = snapshot.key;

        lat = sv.lat;
        lng = sv.lng;
        time = sv.start;

        var keyAPI = "36f29f4a18b4bbad3f41032535ed8d43";
        var queryURL = "https://api.darksky.net/forecast/" + keyAPI + "/" + lat + "," + lng + "," + time;       


        weatherData = $.get(queryURL, data,
            function (data) {    
            });

        database.ref('Users/' + auth + '/events/' + eventId + 'weatherData').set(weatherData);
    });